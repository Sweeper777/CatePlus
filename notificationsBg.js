chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.notificationAction) {
            if (request.notificationAction == "clear") {
                chrome.alarms.clearAll(sendResponse);
                return true;
            } else if (request.notificationAction == "create") {
                chrome.alarms.create(request.notificationId, {
                    when: request.notificationTime
                });
                sendResponse();
            }
        }
    }
);


function notificationId(deadline, key) {
    return key + "-" + String(deadline.month) + "-" + String(deadline.day);
}

chrome.alarms.onAlarm.addListener(
    function(alarm) {
        var storageKey;
        var deadlineType;
        if (alarm.name.startsWith("examDeadlines")) {
            storageKey = "examDeadlines";
            deadlineType = "exam";
        } else if (alarm.name.startsWith("homeworkDeadlines")) {
            storageKey = "homeworkDeadlines";
            deadlineType = "homework";
        }
        chrome.storage.local.get([storageKey], result => {
            var storedDeadlines = result[storageKey];
            var reached = storedDeadlines.filter(x => notificationId(x, storageKey) == alarm.name)[0];
            
            chrome.notifications.create(alarm.name, {
                iconUrl: "icons/logo.png",
                message: "You have " + String(reached.count) + " " + deadlineType + " deadline(s) tommorrow!",
                title: "CATe++",
                type: "basic"
            }, id => {});
        })
    }
)