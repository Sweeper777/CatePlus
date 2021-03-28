let getInformation = function () {


    let texts = $('b').slice(0, 9);
    let obj = {
        name: $(texts[0]).text(),
        login: $(texts[1]).text(),
        cid: $(texts[2]).text(),
        status: $(texts[3]).text(),
        dept: $(texts[4]).text(),
        category: $(texts[5]).text(),
        email: $(texts[6]).text(),
        pTutor: $(texts[7]).text(),
        timetablePeriod: $($(texts[8]).parent().parent().parent().find(":first-child")[1]).val(),
        year: $('font').slice(0).html().substring(0, 4),
        moduleCode: category.split(" ")[3],
        // the appropriate time-table link:
        timetableLink: "https://cate.doc.ic.ac.uk/timetable.cgi?keyt=" + year + ":" + timetablePeriod + ":" + moduleCode + ":" + login
    }
    return obj;
}
// after swap the whole thing
let main = function () {
    chrome.extension.sendRequest({ cmd: "read_file" }, function (html) {
        document.write(html)
    });
}
// plugin the variables

let afterwards = function (data) {

    $("#name").replaceWith(data.name)
    $("#short code").replaceWith(data.shortCode)
    $("#status").replaceWith(data.status)
    $("#cid").replaceWith(data.cid)
    $("department").replaceWith(data.department)
    $("category class").replaceWith(data.categoryClass)
    $("email").replaceWith(data.email)
    $("personal tutor").replaceWith(data.personalTutor)

    $("#photo").replaceWith(data.photo)

    $("#link to timetable button").replaceWith(data.timeTableButton)

}