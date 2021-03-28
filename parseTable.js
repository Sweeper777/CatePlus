let selectDate = function(){
    let htmlCollection = $("body > table:nth-child(3) > tbody > tr:nth-child(3)").children
    let dateArray = Array.from(htmlCollection).slice(1)
    let outputArray = []
    for (let i of dateArray){
        let value = i.innerText === "" ? 0 : parseInt(i.innerText)
        outputArray.push(value)
    }
    return outputArray
}

let selectHw = function(){
    let htmlCollection = $("body > table:nth-child(3) > tbody > tr:nth-child(4)").children
    let hwArray = Array.from(htmlCollection).slice(2)
    let outputArray = []
    for (i of hwArray){
        let value = i.innerText === "" ? 0 : parseInt(i.innerText)
        outputArray.push(value)
    }
    return outputArray
}

let selectExam = function(){
    let htmlCollection = $("body > table:nth-child(3) > tbody > tr:nth-child(5)").children
    let examArray = Array.from(htmlCollection).slice(2)
    let outputArray = []
    for (i of examArray){
        let value = i.innerText === "" ? 0 : parseInt(i.firstChild.firstElementChild.innerText)
        outputArray.push(value)
    }
    return outputArray
}

let selectMonth = function(){
    let htmlCollection = $("body > table:nth-child(3) > tbody > tr:nth-child(1)").children
    let monthArray = Array.from(htmlCollection).slice(1)
    let outputArray = []
    for (i of monthArray){
        for (j = 0; j < i.colSpan; j++){
            outputArray.push(i.innerText)
        }
    }
    return outputArray
}

// plug in DDL array (Exam or Homework)
let mapFromDDLToDate = function(DDLArray, dateArray, monthArray){
    let outputArray = []
    for (i = 0; i < DDLArray.length; i++){
        if (DDLArray[i] !== 0) {
            let obj = {
                "numOfDDLs" : DDLArray[i],
                "date" : dateArray[i],
                "month" : monthArray[i]
            }
            outputArray.push(obj)
        }
    }
    return outputArray
}