
function restoreOptions() {
    chrome.storage.sync.get(["openSpecInNewTab"], result => {
        $("#open-in-new-tab").attr("checked", result.openSpecInNewTab);
    });
}

$("#save").on("click", () => {
    chrome.storage.sync.set(
        {
            openSpecInNewTab: $("#open-in-new-tab").is(":checked")
        },
        () => {
            $("#status").html("Options Saved!");
        }
    )
});

$(window).on( "load", restoreOptions);