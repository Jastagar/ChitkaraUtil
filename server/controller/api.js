const apiHandler = require('express').Router()
const Daily = require("../models/daily")
const Schedule=require('../models/schdules')
const Student = require("../models/student")

apiHandler.get("/classDatabase",(req,res)=>{
    Schedule.find({}).then((e)=>{
        res.json(e).status(200)
    })
})
apiHandler.get("/dailyDatabase",(req,res)=>{
    Daily.find({}).then((e)=>{
        res.json(e).status(200)
    })
})
apiHandler.get("/studentsDatabase",(req,res)=>{
    Student.find({}).then((e)=>{
        res.json(e).status(200)
    })
})

module.exports = apiHandler