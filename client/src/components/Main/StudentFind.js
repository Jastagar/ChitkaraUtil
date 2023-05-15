import React, {useEffect, useState} from 'react'
import { studentFind } from '../../server/server';
export default function StudentFind({ changeContent }) {
  
  const [active,setActive] = useState(false);
  const [queryTypeName,setQueryTypeName] = useState(false);
  const [query,setQuery] = useState('');
  const [info,setInfo] = useState('')

  function handleQueryNameChange(event){
    setQuery(event.target.value)
  }
  function colapse(){
    setActive(!active);
  }
  function handleQueryTypeChange(){
    setQueryTypeName(!queryTypeName);
  }

  useEffect(()=>{
    changeContent(info)
  },[changeContent,info])

  function handleStudentFind(event){
    event.preventDefault()
    if(queryTypeName){
      studentFind(query).then((res)=>{
        setInfo(res.data)
      })
    }else{
      studentFind(query,true).then((res)=>{
        setInfo(res.data)
      })
    }
    
  }
  return (
    <div className="py-3 py-md-0">
      <div className="p-3 d-flex flex-column overflow-hidden blur border rounded rounded-4">
          <button onClick={colapse} id="studentFind" className="dropDownBtn btn text-light fs-3">Student Find</button>
          <form onSubmit={handleStudentFind} className={`flex-column justify-content-between ${active? 'classShow':''}`} id="studentFindForm">
              <fieldset>
                  <label htmlFor="studentNameFind">by Name or Surname or RollNumber</label>
                  <input onChange={handleQueryNameChange} className="my-3 w-100" type="text" name="studentNameFind" id="studentNameFind"></input>
              </fieldset>
              <fieldset>
                  <input onClick={handleQueryTypeChange} className="my-3 pb-3" type="checkbox" name="queryType" id="queryType"></input>
                  <label htmlFor="queryType">by sername</label>
              </fieldset>
              <button type="submit" className="getData btn btn-primary">Find this student</button>
          </form>
      </div>
  </div>
  )}
