import React, {useState} from 'react'
import QuickFind    from './QuickFind'
import SpecificFind from './SpecificFind'
import StudentFind  from './StudentFind'
import SchduleFind  from './SchduleFind'
import DisplayArea  from './DisplayArea'

export default function Main() {
    const [incomingContent, changeIncomingContent] = useState('')
  return (
    <div className="container h-100">
      <div className="row justify-content-center">
        <div className="col-sm-6 row flex-column align-items-center g-md-4">
          <QuickFind    changeContent={changeIncomingContent} />
          <SpecificFind changeContent={changeIncomingContent} />
          <StudentFind  changeContent={changeIncomingContent} />
          <SchduleFind  changeContent={changeIncomingContent} />
        </div>
          <DisplayArea incomingContent={incomingContent} changeContent={changeIncomingContent}/>
      </div>
    </div>
  )
}
