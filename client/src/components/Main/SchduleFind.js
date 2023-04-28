import React, {useState} from 'react'
import SchduleModal from './SchduleModal';
import images from '../../assets/images'

export default function SchduleFind() {
  const [active,setActive] = useState(false);
  function colapse(){
    setActive(!active);
  }
  return (
    <div className="py-3 py-md-0">
      <div className="p-3 border shadow flex-column overflow-hidden">
          <button onClick={colapse} id="schdules" className="dropDownBtn btn w-100 border border-3">Schdules</button>
          <div className={`row flex-row ${active? 'classShow':''}`} id="schduleFindForm">
              {images.map((eachImage,i) => <SchduleModal key={`keyFor${'g'+(i+1)}`} image={eachImage} groupNumber={'g'+(i+1)}  />)}
          </div>
      </div>
  </div>
  )
}
