import React, {useEffect, useState} from 'react'
import useInput from '../../Utils/useInput'
import { studentFind } from '../../server/server';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

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
    // console.log("queryType",event.target.queryType)
    studentFind(query.value,event.target.queryType.checked).then((res)=>{
      setInfo(res.data)
    })
  }
  return (
    <div className="d-flex neuMorph flex-column overflow-hidden rounded rounded-4 m-3">
        <button onClick={colapse} id="studentFind" className="dropDownBtn btn text-light fs-3">
          <FontAwesomeIcon className='mx-3' icon={faSearch} />
          Student Find
        </button>
        <form onSubmit={handleStudentFind} className={`flex-column p-2 justify-content-between ${active? 'classShow':''}`} id="studentFindForm">
            <fieldset>
                <label htmlFor="studentNameFind">by Name or Surname or RollNumber</label>
                <input {...query} id="studentNameFind"></input>
            </fieldset>
            <fieldset>
                <label htmlFor="queryType">by sername</label>
                <input className="my-3 pb-3" type="checkbox" name="queryType" id="queryType"></input>
            </fieldset>
            <button className="getData btn btn-primary">Find this student</button>
        </form>
    </div>
  )}
