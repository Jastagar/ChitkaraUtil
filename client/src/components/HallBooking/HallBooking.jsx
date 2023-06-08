import React, {useState} from 'react'
import './HallBooking.css'
import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChair} from '@fortawesome/free-solid-svg-icons'

const hallData={
    sunHall:{
        name: "Sun Hall",
        location: "Turing Block",
        capacity: 160,
        rows: 10,
        cols: 8,
        blocks: ["a","b","c","d"]
    },
    pltzHall:{
        name: "Plutizar Hall",
        location: "Picasso Block",
        capacity: 320,
        rows: 8,
        cols: 40,
        blocks: ["a","b","c"],
    }
}

function HallNav({nav}){

    return(
        <div className='hallNav'>
            <Button onClick={()=>nav(hallData.sunHall)} className='px-3'>sun</Button>
            <Button onClick={()=>nav(hallData.pltzHall)} className='px-3'>pulitzer</Button>
            <span className='px-3'>Einstein</span>
        </div>
    )
}
// sun hall
// expolotrum hall
// pulitzer hall
// einestine hall

function RenderHall({hall}){
    const seatsPerBlock =hall.capacity/hall.blocks.length 
    const widthNeeded = 100/hall.cols + "%"
    const seats = new Array(seatsPerBlock).fill(0)
    console.log(widthNeeded)
    return(
        <>
            <h1 className='disply-1 text-light'>
                {hall.name}
            </h1>
            <div className='MainCanvas'>
                <div className='hallReplica'>
                    {hall.blocks.map((e,i) => (
                            <div className='eachBlock p-4' key={"EachBlock"+i}>
                                {seats.map((a,seat)=>{
                                    return (
                                        <div style={{width:widthNeeded}} className='EachSeat'>
                                            <FontAwesomeIcon icon={faChair} style={{color: "#00aaff",}} />
                                            <div>{e + "" +(seat+1)}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


export default function HallBooking() {
    const [activeHall, setActiveHall] = useState(hallData.sunHall);

    function changeActiveHall(e){
        setActiveHall(e)
    }

  return (
    <section className='m-3 p-3 neuMorph'>
        <HallNav nav={changeActiveHall} />
        <div className='renderHallContainer'>
            <RenderHall hall={activeHall} />
        </div>
    </section>
  )
}
