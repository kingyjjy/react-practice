import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6"

const Ccard = ({greenTitle, title, img, content}) => {
  return (
    <div className='col-4'>
        <div className="card">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <div className="card-content">
                <h4>{greenTitle}</h4>
                <h2>{title}</h2>
                <p>
                {content}
                </p>
                <div className="more"><FaArrowRightLong/></div>
            </div>

        </div>
    </div>
  )
}

export default Ccard