import React, {useState} from 'react'
import images from '../../assets/images'
import './Schedule.css'
import {Button, Modal} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendar} from '@fortawesome/free-solid-svg-icons'

export default function ScheduleFind() {
  const [active,setActive] = useState(false);
  const [activeImg, setActiveImg] = useState('')
  const [modalState,setModalState] = useState(false)
  
  function showModal(img){
    setActiveImg(img)
    setModalState(true)
  }


  function colapse(){
    setActive(!active);
  }
  return (
    <>
      <Modal
          show={modalState}
          backdrop="static"
          onHide={()=> setModalState(false)}
          keyboard={false}
          size='xl'
      >
          <Modal.Header closeButton>
              <Modal.Title>schedule</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className='ScheduleImgContainer'>
              <img src={activeImg} alt='Not Found'></img>
            </div>
          </Modal.Body>
      </Modal>
      <div className="flex-column overflow-hidden neuMorph rounded rounded-4 m-3">
          <button onClick={colapse} id="schedules" className="dropDownBtn btn w-100 text-light fs-3">
            <FontAwesomeIcon className='mx-3' icon={faCalendar} />
            Schedules
          </button>
          <div className={`row flex-row p-2 ${active? 'classShow':''}`} id="scheduleFindForm">
              {images.map((eachImage,i) => 
                (
                <div key={"ScheduleOpenButton"+i+eachImage.toString()} className='col-2 my-2'>
                  <Button onClick={()=>showModal(eachImage)} variant='success w-100'>G{i+1}</Button>
                </div>
                ))}
          </div>
      </div>
  </>
  )
}
