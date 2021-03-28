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
        timetablePeriod: $($(texts[8]).parent().parent().parent().find(" :first-child")[1]).val(),
        year: $('font').slice(0).html().substring(0, 4)
    }

    obj.moduleCode = obj.category.split(" ")[3];
    // the appropriate time-table link :
    obj.timetableLink = "https://cate.doc.ic.ac.uk/timetable.cgi?keyt=" + obj.year + ":" + obj.timetablePeriod + ":" + obj.moduleCode + ":" + obj.login;
    return obj;
}

let generateButton = function (link, id, text) {
    var button = `<button type = "button" class = "btn" id = ${id}
                 onclick = "window.location.href = ${link}> ${text}</button>`;
    console.log(button)
    return button;
}

// after swap the whole thing
let main = function () {
    let information = getInformation()
    console.log(information)
    let r;
    chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
        r = response;
        console.log(r)
        // document.write(r);
        $("html").html(r);
        afterwards(information)
    });

}
// plugin the variables

let afterwards = function (data) {

    let button = generateButton(data.timetableLink, "timetable button", "timetable")

    $("#name").append(data.name)
    $("#status").append(data.status)
    $("#cid").append(data.cid)
    $("#department").append(data.dept)
    $("#category_class").append(data.category)
    $("#email").append(data.email)
    $("#personal_tutor").append(data.pTutor)
    $("#timetable_button").on("click", () => { window.open(data.timetableLink) })
}

main()