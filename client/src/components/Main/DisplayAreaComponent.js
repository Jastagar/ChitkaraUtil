import React from 'react'

export default function DisplayAreaComponent({ content }) {

  const [header,...contentData] = content;
  if(header==='err'){
    return(
      <div className='alert alert-danger'>
        {contentData}
      </div>
    )
  }
  else if(header==='user0'){
    return(
      <div className='alert alert-success'>
        Name: <strong>{contentData[0]}</strong><br></br>
        RollNumber: <strong>{contentData[1]}</strong> <br></br>
        Group No.: <strong>{contentData[2]}</strong> <br></br>
        This student has a free lecture, Khud Dhond lo :/
      </div>
    )
  }
  else if(header==='user1'){
    return(
      <div className='alert alert-success'>
        Name: <strong>{contentData[0]}</strong> <br></br>
        RollNumber: <strong>{contentData[1]}</strong> <br></br>
        Group No.: <strong>{contentData[2]}</strong><br></br>
        This student should be in his/her <strong>{contentData[3]}</strong> class<br></br>
        in class number <strong>TG-{contentData[4]}</strong> <br></br> by Facutly number <strong>{contentData[5]}</strong> <br></br>
      </div>
    )
  }
  else if(header==='userM'){
    const [message,length,...students] = contentData
    return(
      <>  
        <div className='alert alert-warning'>
          {message}
        </div>
        <div className='alert alert-warning'>
          <h4>Found {length} students :</h4>
        </div>
        {students.map((eachStudent, i)=>{
          const thisArrData = Object.values(eachStudent)
          return (
            <div key={`KeyForStudentFindResult${i}`} className='alert alert-success'>
              <strong>{thisArrData[0]} </strong>
              rollNumber <strong>{thisArrData[1]}</strong> of
              group <strong style={{textTransform:'capitalize'}}>{thisArrData[2]}</strong>
            </div>
          ) 
        })}
      </>
    )
  }
  else if(header==='classes'){
    if(!contentData[0].length){
      return(
        <div className='alert alert-warning'>
          No free classes are available at this moment (bunk mt maaro :/)
        </div>
      )
    }
    return(
      <div className='alert alert-success'>
      Classes:<br></br>
        {contentData[0].map((e) => {
          return (<div key={`KeyForClasses${e}`}><strong>TG-{e}</strong></div>)
        }
        )}Should be free
      </div>
    )
  }
  else {
    return (
      <div>{contentData}</div>
    )
  }
}
