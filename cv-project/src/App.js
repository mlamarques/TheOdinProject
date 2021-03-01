import React, {useEffect, useState} from 'react'
import Information from './components/Information'
import Education from './components/Education'
import Experience from './components/Experience'
import Final from './components/Final'
import './styles/App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [idEdu, setIdEdu] = useState(0)
  const [idExp, setIdExp] = useState(0)
  const [education, setEducation] = useState([])
  const [educations, setEducations] = useState([])
  const [eduOrg, setEduOrg] = useState('')
  const [eduTitle, setEduTitle] = useState('')
  const [eduDescription, setEduDescription] = useState('')
  // const [experiences, setExperiences] = useState([])
  // const [expOrg, setExpOrg] = useState('')
  // const [expRole, setExpRole] = useState('')
  // const [expDescription, setExpDescription] = useState('')
  
  const handleChange = (e) => { 
    if (e.target.name === 'setName')
    setName(
      e.target.value
    );
    if (e.target.name === 'setEmail')
    setEmail(
      e.target.value
    );
    if (e.target.name === 'setPhone')
    setPhone(
      e.target.value
    );
    if (e.target.name === 'setEduOrg')
    setEduOrg(
      e.target.value
    );
    if (e.target.name === 'setEduTitle')
    setEduTitle(
      e.target.value
    );
    if (e.target.name === 'setEduDescription')
    setEduDescription(
      e.target.value
    );  };

  function handleSubmit(event) {
    event.preventDefault()
    //setName(event.target.value)
    //setinputValue("")
    console.log(name, email, phone, eduOrg, eduTitle, eduDescription,educations,education)
  }

  function addEducation() {
    setEducation([idEdu, eduOrg, eduTitle, eduDescription])
    setEducations(oldArray => oldArray.concat([[idEdu, eduOrg, eduTitle, eduDescription]]))
    setEduOrg("")
    setEduTitle("")
    setEduDescription("")

    setIdEdu(prevCount => prevCount + 1)
  }

  function editEducationItem(element) {
    console.log(element.target.id)
  }

  // function addExperience() {
  //   setExperiences(oldArray => oldArray.concat([idExp, eduOrg, eduTitle, eduDescription]))
  //   setEduOrg('')
  //   setEduTitle('')
  //   setEduDescription('')

  //   setIdEdu(idExp + 1)
  // }

  // function validateEmail(email) {
  //   const emailRegex = /^([\w\.-])+(@+[a-z0-9]+\.com)(\.[a-z]+)?$/
  //   return emailRegex.test(email)
  // }
  
  return (
    <div className="App">
      <Information 
        name={name} 
        email={email} 
        phone={phone}
        // setName={setName} 
        // setEmail={setEmail} 
        // setPhone={setPhone} 
        handleChange={handleChange}
      />
      <Education
        handleChange={handleChange}
        addEducation={addEducation}
        eduOrg={eduOrg}
        eduTitle={eduTitle}
        eduDescription={eduDescription}
      />
      {educations.length !== 0 && educations.map(item => 
                                                  <div className="item-education">
                                                    <div>{item[1]} {item[2]} {item[3]}</div> 
                                                    <button id={item[0]} className="edit-education" onClick={editEducationItem}>Edit</button>
                                                  </div>)}
      <hr/>
      <Experience handleSubmit={handleSubmit}/>
      <Final name={name} email={email} phone={phone}/>
      <button className="submitButton" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
