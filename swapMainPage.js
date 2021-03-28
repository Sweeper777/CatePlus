let mainPageTemplate = `<html>

<head>
    <title>Personal Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <div class="container" id = "Largest" style = "width : 300px">
        <div class="row">
            <div class="col" >
                <h1  style = "color : 1EDECA">
                    Personal Page
                </h1>
                <nav class="navbar navbar-default" role="navigation" style = "background-color : 585550">
                    <div class="container-fluid"   style = "background-color : 585550">
                        <div class="navbar-header"   style = "background-color : 585550">
                            <a class="navbar-brand" href="#" style = "color : pink">Personal Information</a>
                        </div>
                        <div>
                            <ul class="nav navbar-nav">
                                <li><a id="name" style = "color : white">Name </a></li>
                                <li><a id="status" style = "color : white">Status </a></li>
                                <li><a id="cid" style = "color : white">Cid </a></li>
                                <li><a id="department" style = "color : white">Department</a> </li>
                                <li><a id="category_class" style = "color : white">Class </a></li>
                                <li><a id="email" style = "color : white">Email </a></li>
                                <li><a id="personal_tutor" style = "color : white">Tutor </a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav class="navbar navbar-default" role="navigation"  style = "background-color : 585550">
                <div class="container-fluid"   style = "background-color : 585550">
                    <div class="navbar-header"   style = "background-color : 585550">
                        <a class="navbar-brand" href="#" style = "color : pink">TimeTable</a>
                    </div>
                    <div>
                        <ul class="nav navbar-nav">
                            <li><a id="timetable_button" class="btn"  style = "color : white"> My TimeTable</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
                    <!-- <div id="photo" class="container"></div> -->

                    <nav class="navbar navbar-default" role="navigation">
                        <div class="container-fluid"   style = "background-color : 585550">
                            <div class="navbar-header"   style = "background-color : 585550">
                                <a class="navbar-brand" href="#" style = "color : pink">Other Useful Links</a>
                            </div>
                            <div>
                                <ul class="nav navbar-nav">
                                    <li><a href="#" style = "color : white">Department Grading Schema</a></li>
                                    <li><a href="#" style = "color : white">Late Submissions and Extensions</a></li>
                                    <li><a href="#" style = "color : white">Projects Portal</a></li>
                                    <li><a href="#" style = "color : white">Email and Modules subscriptions</a></li>
                                    <li><a href="#" style = "color : white">Teaching Database</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div id="link_to_individual_record" class="container"></div>
                
            </div>
        </div>
        <script src="https://code.jquery.com/jquery.js"></script>
        <script src="js/bootstrap.min.js"></script>

</body>

</html>`

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
    // let r;
    // chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
    //     r = response;
    //     console.log(r)
    //     // document.write(r);
    //     $("html").html(r);
    //     afterwards(information)
    // });
    document.write(mainPageTemplate)
    afterwards(information)

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