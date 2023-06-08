import React, {useEffect, useState} from 'react'
import DisplayAreaComponent from './DisplayAreaComponent';

export default function DisplayArea({ changeContent, incomingContent }) {
  const [content, setContent] = useState(incomingContent);
  useEffect(()=>{
    setContent(incomingContent)
  },[incomingContent])

  function handleClear(){
    changeContent('')
  }
  return (
      <div className="m-4 displayCtrl h-100">
          <div id="showArea" className="ShowArea neoConcave">
            <DisplayAreaComponent content={content} />
          </div>
          <div className="p-3 m-2 d-flex justify-content-around">
              <button onClick={handleClear} className="btn text-light neuMorph p-3 col-6 col-md-4">&times; Clear</button>
              <button className="btn neuMorph">Go to top</button>
          </div>
      </div>
  )
}

// Booking for Halls