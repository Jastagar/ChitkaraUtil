import React,{useEffect, useState} from 'react'
import { specificFind } from '../../server/server';

export default function SpecificFind({ changeContent }) {
  const [active,setActive] = useState(false);
  const [classes, setClasses] = useState('')
  function colapse(){
    setActive(!active);
  }
  
  useEffect(()=>{
    changeContent(classes)
  },[changeContent, classes])

  function handleSubmit(event){
    event.preventDefault()
    specificFind(event.target[0].value,event.target[1].value).then((res)=>{
      setClasses(res.data)
    })
  }
  return (
    <div className="py-3 py-md-0">
      <div className="p-3 border shadow d-flex flex-column overflow-hidden">
          <button onClick={colapse} id="specificFind" className="dropDownBtn btn w-100 border border-3">Specific Find</button>
          <form onSubmit={handleSubmit} className={`flex-column justify-content-between ${active? 'classShow':''}`} id="specificFindForm">
              <label htmlFor="dayQuery">Specify the day</label>
              <select name="selectDay" className="my-3 w-100" id="dayQuery" required>                        
                  <option value="today">Today</option>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                  <option value="5">Friday</option>
              </select>
              <label htmlFor="inputQuery">Specify the Lecture</label>
              <select name="selectPeriod" className="my-3 w-100" id="inputQuery" required>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
              </select>
              <button type='submit' href="#showArea"  className="getData btn btn-primary">Get free classes</button>
          </form>
      </div>
  </div>
  )
}
