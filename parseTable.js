selectDate = function(){
    htmlCollection = $("body > table:nth-child(3) > tbody > tr:nth-child(3)").children
    dateArray = Array.from(htmlCollection).slice(1)
    outputArray = []
    for (i of dateArray){
        value = i.innerText === "" ? 0 : parseInt(i.innerText)
        outputArray.push(value)
    }
    return outputArray
}

selectHw = function(){
    htmlCollection = $("body > table:nth-child(3) > tbody > tr:nth-child(4)").children
    hwArray = Array.from(htmlCollection).slice(2)
    outputArray = []
    for (i of hwArray){
        value = i.innerText === "" ? 0 : parseInt(i.innerText)
        outputArray.push(value)
    }
    return outputArray
}

selectExam = function(){
    htmlCollection = $("body > table:nth-child(3) > tbody > tr:nth-child(5)").children
    examArray = Array.from(htmlCollection).slice(2)
    outputArray = []
    for (i of examArray){
        value = i.innerText === "" ? 0 : parseInt(i.firstChild.firstElementChild.innerText)
        outputArray.push(value)
    }
    return outputArray
}

selectMonth = function(){
    htmlCollection = $("body > table:nth-child(3) > tbody > tr:nth-child(1)").children
    monthArray = Array.from(htmlCollection).slice(1)
    outputArray = []
    for (i of monthArray){
        for (j = 0; j < i.colSpan; j++){
            outputArray.push(i.innerText)
        }
    }
    return outputArray
}

// plug in DDL array (Exam or Homework)
mapFromDDLToDate = function(DDLArray, dateArray, monthArray){
    outputArray = []
    for (i = 0; i < DDLArray.length; i++){
        if (DDLArray[i] !== 0) {
            obj = {
                "numOfDDLs" : DDLArray[i],
                "date" : dateArray[i],
                "month" : monthArray[i]
            }
            outputArray.push(obj)
        }
    }
    return outputArray
}