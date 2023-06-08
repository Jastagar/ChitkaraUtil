import React,{useEffect, useState} from 'react'
import { specificFind } from '../../server/server';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserGroup} from '@fortawesome/free-solid-svg-icons'


function LectureOptions({value}){
  return(
    <option value={""+value}>{value}</option>
  )
}

export default function SpecificFind({ changeContent }) {
  const [active,setActive] = useState(false);
  const [classes, setClasses] = useState('')

  const [lectures,setLectures] = useState([1,2,3,4,5,6,7,8,9]);

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
      <div className="d-flex flex-column overflow-hidden neuMorph rounded rounded-4 m-3">
          <button onClick={colapse} id="specificFind" className="dropDownBtn btn w-100 text-light fs-3">
            <FontAwesomeIcon className='mx-3' icon={faUserGroup} />
            Specific Find
          </button>
          <form onSubmit={handleSubmit} className={`flex-column p-2 justify-content-between ${active? 'classShow':''}`} id="specificFindForm">
              <label htmlFor="dayQuery">
                Specify the day
              </label>
              <select name="selectDay" className="form-control my-3 w-100" id="dayQuery" required>                        
                  <option value="today">Today</option>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                  <option value="5">Friday</option>
              </select>
              <label htmlFor="inputQuery">Specify the Lecture</label>
              <select name="selectPeriod" className="form-control my-3 w-100" id="inputQuery" required>
                  {lectures.map(e => <LectureOptions key={"lectureOptionsValue"+e} value={e} />)}
              </select>
              <button type='submit' href="#showArea"  className="getData btn btn-primary">Get free classes</button>
          </form>
      </div>
  )
}
