var monthArray = [
    "Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

function notificationId(deadline, key) {
    return key + "-" + String(deadline.month) + "-" + String(deadline.day);
}

function deadlinesFromTaskSelector(taskSelector) {
    return mapFromDDLToDate(taskSelector(), selectDate(), selectMonth());
}

function scheduleDeadlineNotifications(rawDeadlines, storageKey) {
    var deadlines = rawDeadlines.map(x => ({
        count: x.numOfDDLs, 
        day: x.date,
        month: monthArray.indexOf(x.month)
    }));

    function clearExistingNotifications(storedDeadlines, completion) {
        var ids = storedDeadlines.map(x => notificationId(x, storageKey));
        chrome.runtime.sendMessage({
            notificationAction: "clear",
            notificationIds: ids
        }, completion);
    }

    function saveNewDeadlinesAndScheduleNotifications() {
        var newDeadlinesObject = {};
        newDeadlinesObject[storageKey] = deadlines;
        chrome.storage.local.set(newDeadlinesObject, () => {
            var i = 1;
            for (var newDeadline of deadlines) {
                var id = notificationId(newDeadline, storageKey);
                chrome.runtime.sendMessage({
                    notificationAction: "create",
                    notificationId: id,
                    notificationOptions: {
                        iconUrl: "icons/logo.png",
                        message: "You have " + String(newDeadline.count) + " deadline(s) tommorrow!",
                        title: "CATePlus",
                        type: "basic",
                        eventTime: new Date(new Date().getFullYear(), newDeadline.month, newDeadline.day, 9).getTime()
                    }
                }, response => {});
                i++;
            }
        })
    }

    chrome.storage.local.get([storageKey], result => {
        var storedDeadlines = result[storageKey];
        if (storedDeadlines) {
            clearExistingNotifications(storedDeadlines, saveNewDeadlinesAndScheduleNotifications);
        } else {
            saveNewDeadlinesAndScheduleNotifications();
        }
    });
}