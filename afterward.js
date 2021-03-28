// before swap the whole thing

// after swap the whole thing
let main = function(){
    chrome.extension.sendRequest({cmd: "read_file"}, function(html){
        document.write(html)
    });

    afterwards()
}

let afterwards = function(data){

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