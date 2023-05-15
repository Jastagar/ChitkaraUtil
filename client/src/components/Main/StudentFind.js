import React, {useEffect, useState} from 'react'
import useInput from '../../Utils/useInput'
import { studentFind } from '../../server/server';

export default function StudentFind({ changeContent }) {
  
  const [active,setActive] = useState(false);
  const query = useInput()
  const [info,setInfo] = useState('')

  function colapse(){
    setActive(!active);
  }

  useEffect(()=>{
    changeContent(info)
  },[changeContent,info])

  function handleStudentFind(event){
    event.preventDefault()
    studentFind({query:query.value,}).then((res)=>{
      setInfo(res.data)
    })
  }
  return (
    <div className="py-3 py-md-0">
      <div className="p-3 d-flex flex-column overflow-hidden blur border rounded rounded-4">
          <button onClick={colapse} id="studentFind" className="dropDownBtn btn text-light fs-3">Student Find</button>
          <form onSubmit={handleStudentFind} className={`flex-column justify-content-between ${active? 'classShow':''}`} id="studentFindForm">
              <fieldset>
                  <label htmlFor="studentNameFind">by Name or Surname or RollNumber</label>
                  <input {...query} id="studentNameFind"></input>
              </fieldset>
              <fieldset>
                  <label htmlFor="queryType">by sername</label>
                  <input className="my-3 pb-3" type="checkbox" name="queryType" id="queryType"></input>
              </fieldset>
              <button type="submit" className="getData btn btn-primary">Find this student</button>
          </form>
      </div>
  </div>
  )}
