var monthArray = [
    "Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

function notificationId(deadline, key) {
    return key + "-" + String(deadline.month) + "-" + String(deadline.day);
}

function deadlinesFromTaskSelector(taskSelector) {
    return mapFromDDLToDate(taskSelector(), selectDate(), selectMonth());
}

function notificationTimeForDeadline(deadline) {
    var deadlineDate = new Date(new Date().getFullYear(), deadline.month, deadline.day, 9);
    return deadlineDate.setDate(deadlineDate.getDate() - 1);
}

function scheduleDeadlineNotifications(rawDeadlines, storageKey) {
    var deadlines = rawDeadlines.map(x => ({
        count: x.numOfDDLs, 
        day: x.date,
        month: monthArray.indexOf(x.month)
    }));

    function clearExistingNotifications() {
        chrome.runtime.sendMessage({
            notificationAction: "clear"
        }, saveNewDeadlinesAndScheduleNotifications);
    }

    function saveNewDeadlinesAndScheduleNotifications() {
        var newDeadlinesObject = {};
        newDeadlinesObject[storageKey] = deadlines;
        chrome.storage.local.set(newDeadlinesObject, () => {
            var i = 1;
            for (var newDeadline of deadlines) {
                if (notificationTimeForDeadline(newDeadline) < Date.now()) {
                    continue;
                }
                var id = notificationId(newDeadline, storageKey);
                chrome.runtime.sendMessage({
                    notificationAction: "create",
                    notificationId: id,
                    notificationTime: notificationTimeForDeadline(newDeadline)
                }, response => {});
                i++;
            }
        })
    }

    chrome.storage.local.get([storageKey], result => {
        var storedDeadlines = result[storageKey];
        if (storedDeadlines) {
            clearExistingNotifications(storedDeadlines);
        } else {
            saveNewDeadlinesAndScheduleNotifications();
        }
    });
}