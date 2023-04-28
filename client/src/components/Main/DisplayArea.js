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
    <div className="col-md-6">
        <div className="m-4 displayCtrl h-100">
            <div className="p-3 d-flex justify-content-around">
                <button onClick={handleClear} className="btn btn-outline-danger col-6 col-md-4">&times; Clear</button>
            </div>
            <div id="showArea" className="ShowArea neoConcave">
              <DisplayAreaComponent content={content} />
            </div>
            <div className="p-3 d-flex justify-content-around">
                <button onClick={handleClear} className="btn btn-outline-danger col-6 col-md-4">&times; Clear</button>
                <a className="btn btn-outline-secondary" href="#body">Go to top</a>
            </div>
        </div>
    </div>
  )
}

// Booking for Halls