import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'
const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn ">
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)
const renderContent={
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Sasa,</span>
        <br/>
        A Software Engineer
        </h1>
    ),
    2: (
        <InfoBox 
            text="I am a software engineer with a passion for problem solving and learning new technologies" 
            link="/about" 
            btnText="Learn More" 
        />
    ),
    3: (
        <InfoBox 
            text="I made many projects that you can check out here" 
            link="/projects" 
            btnText="Visit my portfolio" 
        />
    ),
    4: (
        <InfoBox 
            text="Need a project done or looking for a dev? Contact me!"
            link="/contact" 
            btnText="Lets Talk" 
        />
    ),

}


const HomeInfo = ({currentStage}) => {
  return (
    renderContent[currentStage] || null
  )
}

export default HomeInfo