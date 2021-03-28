chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.notificationAction) {
            if (request.notificationAction == "clear") {
                for (var id of request.notificationIds) {
                    chrome.notifications.clear(id);
                }
                sendResponse({});
            } else if (request.notificationAction == "create") {
                chrome.notifications.create(request.notificationId, request.notificationOptions, id => {});
                sendResponse({});
            }
        }
    }
);