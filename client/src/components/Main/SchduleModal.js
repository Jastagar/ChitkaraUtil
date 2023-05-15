import React from 'react'

export default function SchduleModal({ image, groupNumber }) {
  return (
    <div className="col-4 col-md-2 col-xxl-2 p-1">
        <button type="button" style={{textTransform: 'capitalize'}} className="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target={`#groupModalFor${groupNumber}`}>
          {groupNumber}
        </button>
        <div className="modal fade modal-xl" id={`groupModalFor${groupNumber}`} tabIndex="-1" aria-labelledby={`groupModalLabelFor${groupNumber}`} aria-hidden="true">
            <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img className="w-100 schduleImage" src={image} alt='Not Found'></img>
                </div>
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
// mongodb+srv://:@cluster0.bpdao.mongodb.net/Schdule