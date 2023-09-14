import React from 'react'
import Ccard from './Ccard';
import { RiBankFill} from "react-icons/ri"
const cardLlist = [
    {greenTitle:"ispiratio",title:"Branding",img:"images/features1.jpg", content:"풀이 언덕 그러나 하나에 하나에 거외다. 별들을 아직 흙으로 별 별 프랑시스 거외다. 청춘이 아스라히 이름과, 소녀들의 애기 경, 봅니다."},
    {greenTitle:"research",title:"Marketing",img:"images/features2.jpg", content:"풀이 언덕 그러나 하나에 하나에 거외다. 별들을 아직 흙으로 별 별 프랑시스 거외다. 청춘이 아스라히 이름과, 소녀들의 애기 경, 봅니다."},
    {greenTitle:"branding",title:"Design",img:"images/features3.jpg", content:"풀이 언덕 그러나 하나에 하나에 거외다. 별들을 아직 흙으로 별 별 프랑시스 거외다. 청춘이 아스라히 이름과, 소녀들의 애기 경, 봅니다."}
]

const SectionB = () => {
  return (
    <div className='container section-b'>
        <div className='title'>
            <span><RiBankFill/></span>
            <h1>Our Services</h1>
        </div>
        <div className="row">
            <Ccard {...cardLlist[0]}/>
            <Ccard {...cardLlist[1]}/>
            <Ccard {...cardLlist[2]}/>
        </div>
    </div>
  )
}

export default SectionB