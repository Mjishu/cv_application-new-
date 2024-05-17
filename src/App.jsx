import React from 'react'
import General from "./components/general"
import Education from './components/Education'
import Practical from './components/Practical'

import './App.css'

function App() {
  const [information, setInformation] = React.useState({
    name:"",
    email:"",
    phone:"",
    institution:"",
    studyTitle:"",
    dateStudied:"",
    dateGraduated:"",
    company:"",
    position:"",
    responsibilities:"",
    dateStarted:"",
    dateEnd:""
  })

  function handleChange(event){
    const {name,value} = event.target;

    setInformation(oldInformation => ({
        ...oldInformation,
        [name]: value
    }))
}
  function CvApplication(){
    return(
        <>
        <p><span className='information-span uppercase'>Name:</span> {information.name}</p>
        <p><span className='information-span uppercase'>Email:</span> {information.email}</p>
        <p><span className='information-span uppercase'>Phone:</span> {information.phone}</p>
        <p><span className='information-span uppercase'>Institution:</span> {information.institution}</p>
        <p><span className='information-span uppercase'>Study Title:</span> {information.studyTitle}</p>
        <p><span className='information-span uppercase'>Dates Studied:</span> {information.dateStudied} {information.dateGraduated ? "" : ""} {information.dateGraduated}</p>
        <p ><span className='information-span uppercase'>Company: </span>{information.company}</p>
        <p><span className='information-span uppercase'>Position: </span>{information.position}</p>
        <p><span className='information-span uppercase'>Responsibilities: </span>{information.responsibilities}</p>
        <p><span className='information-span uppercase'>Dates Worked: </span>{information.dateStarted} {information.dateEnd ? "-" : ""} {information.dateEnd}</p>
        </>
    )
  }

  return (
    <>
      <header className='Header'><h1>CV</h1></header>
      <div className='content-holder'>
        <div className="enter-information">
          <General information={information} setInformation={setInformation} handleChange={handleChange}/>
          <Education information={information} setInformation={setInformation} handleChange={handleChange}/>
          <Practical information={information} setInformation={setInformation} handleChange={handleChange}/>
        </div>
        <div className="information">
          <h1 className='information-title'>Information</h1>
            <CvApplication/>
        </div>
      </div>
    </>
  )
}

export default App
//todo: Add a way that when a plus button is clicked on education or practical it makes a new field