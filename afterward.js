// before swap the whole thing

// extract necessary information

let texts = $('b').slice(0,9);

const name = $(texts[0]).text();
const login = $(texts[1]).text();
const cid = $(texts[2]).text();
const status = $(texts[3]).text();
const dept = $(texts[4]).text();
const category = $(texts[5]).text();
const email = $(texts[6]).text();
const pTutor = $(texts[7]).text();
const timetablePeriod = $($(texts[8]).parent().parent().parent().find(":first-child")[1]).val();
const year = $('font').slice(0).html().substring(0,4);
const moduleCode = category.split(" ")[3];

// the appropriate time-table link:
const timetableLink = "https://cate.doc.ic.ac.uk/timetable.cgi?keyt=" + year + ":" + timetablePeriod + ":" + moduleCode + ":" + login;
// console.log(timetableLink)


// after swap the whole thing

// plugin the variables

afterwards = function(data){

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