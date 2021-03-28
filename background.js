var options;

chrome.storage.sync.get(["openSpecInNewTab"], result => {
    options = result;
})

chrome.storage.onChanged.addListener(function (changes, namespace) {
    for (var key in changes) {
        console.log(key);
        if (["openSpecInNewTab"].indexOf(key) >= 0) {
            options[key] = changes[key].newValue;
        }
    }
});

chrome.webRequest.onHeadersReceived.addListener(
    function (details) {
        if (!options.openSpecInNewTab) {
            return { responseHeaders: details.responseHeaders };
        }
        details.responseHeaders.forEach((header, i, a) => {
            if (header.name == "Content-Disposition") {
                details.responseHeaders[i].value = "inline";
            }
        });
        return { responseHeaders: details.responseHeaders };
    },
    { urls: ["https://cate.doc.ic.ac.uk/showfile.cgi*"] },
    ["responseHeaders", "blocking"]
);

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if (request.greeting == "hello")
//         sendResponse({farewell: "goodbye"});
//     }
//   );

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.greeting == "hello") {
            console.log("I am here!");
            $.get(chrome.extension.getURL("template.html"),
                (data) => { sendResponse(data) });
            return true;
        }
    }
);