
function restoreOptions() {
    chrome.storage.sync.get(["openSpecInNewTab", "customColorScheme", "customIcons"], result => {
        $("#open-in-new-tab").attr("checked", result.openSpecInNewTab);
        $("#custom-color-scheme").attr("checked", result.customColorScheme);
        $("#custom-icons").attr("checked", result.customIcons);
    });
}

$("#save").on("click", () => {
    chrome.storage.sync.set(
        {
            openSpecInNewTab: $("#open-in-new-tab").is(":checked"),
            customColorScheme: $("#custom-color-scheme").is(":checked"),
            customIcons: $("#custom-icons").is(":checked")
        },
        () => {
            $("#status").html("Options Saved!");
        }
    )
});

$(window).on( "load", restoreOptions);