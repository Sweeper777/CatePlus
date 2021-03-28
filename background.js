chrome.webRequest.onHeadersReceived.addListener(
    function(details) { 
        details.responseHeaders.forEach((header, i, a) => {
            if (header.name == "Content-Disposition") {
                details.responseHeaders[i].value = "inline";
            }
        });
        return {responseHeaders: details.responseHeaders}; 
    },
    {urls: ["https://cate.doc.ic.ac.uk/showfile.cgi*"]},
    ["responseHeaders", "blocking"]
);