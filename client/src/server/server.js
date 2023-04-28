import axios from "axios";


// const baseUrl = 'http://localhost:3009/'
const baseUrl = '/'
const timeNow = new Date()
const secNow = timeNow.getHours()*3600 + timeNow.getMinutes()*60
const dayToday = timeNow.getDay()


function getEachDayData(){
    return axios.get(baseUrl+'api/classDatabase') 
}
function getDailyData(){
    return axios.get(baseUrl+'api/dailyDatabase')
}
function getStudentsData(){
    return axios.get(baseUrl+'api/studentsDatabase')
}


function quickFind(){
    return axios.get(baseUrl + `search/${secNow}/${dayToday}/quick`)
}
function quickFindForNext(){
    return axios.get(baseUrl + `search/${secNow}/${dayToday}/quicknext`)
}
function specificFind(day,lecture){
    return axios.get(baseUrl + `search/${secNow}/${dayToday}/find/${day}/${lecture}`)
}
function studentFind(queryStudent,surname=false){
    if(!surname){
        return axios.get(baseUrl + `search/${secNow}/${dayToday}/student/${queryStudent}/1`)
    }
    if(!queryStudent){
        return 'tryagain'
    }
    return axios.get(baseUrl + `search/${secNow}/${dayToday}/student/${queryStudent}`)
}

export {
    getEachDayData,
    getDailyData,
    getStudentsData,
    quickFind,
    quickFindForNext,
    specificFind,
    studentFind
}
