import React, {useEffect, useState} from 'react'
import { quickFind,quickFindForNext } from '../../server/server'

export default function QuickFind({ changeContent }) {

  const [classes,setClasses] = useState('')
  function handleQuickFind(){
    quickFind().then((res)=>{
      setClasses(res.data)
    })
  }
  function handleQuickFindForNext(){
    quickFindForNext().then((res)=>{
      setClasses(res.data)
    })
  }
  useEffect(()=>{
    changeContent(classes)
  },[classes, changeContent])
  
  return (
      <div className="neuMorph rounded rounded-4 p-4">
          <div className="d-flex flex-column justify-content-between">
              <p className="text-light">Use quick find to get free classes now</p>
              <a href="#showArea" onClick={handleQuickFind} className="btn btn-primary majorButtons p-2 my-1 flex-grow-1">Quick Find</a>
              <a href="#showArea" onClick={handleQuickFindForNext} className="btn btn-secondary majorButtons p-2 my-1 flex-grow-1">Quick Find For Next</a>
          </div>
      </div>
  )
}
