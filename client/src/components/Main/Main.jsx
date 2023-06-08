import React, {useState} from 'react'
import QuickFind    from './QuickFind'
import SpecificFind from './SpecificFind'
import StudentFind  from './StudentFind'
import DisplayArea  from './DisplayArea'
import ScheduleFind from './ScheduleFind'
import './Main.css'


export default function Main() {
    const [incomingContent, changeIncomingContent] = useState('')
  return (
    <section className="container d-flex align-items-center text-light">
      <div className="w-100 MainComponent neuMorph rounded p-4">
        <div className="row align-items-center">
          <div className='col-sm-6'>
            <QuickFind    changeContent={changeIncomingContent} />
          </div>
          <div className='col-sm-6 d-flex flex-column justify-content-between'>
            <SpecificFind changeContent={changeIncomingContent} />
            <StudentFind  changeContent={changeIncomingContent} />
            <ScheduleFind  changeContent={changeIncomingContent} />
          </div>
        </div>
          <DisplayArea incomingContent={incomingContent} changeContent={changeIncomingContent}/>
      </div>
    </section>
  )
}
