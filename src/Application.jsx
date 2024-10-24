import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './Application.css'

const Application = () => {

    const [file, setFile] = useState()
    const [coverLetter, setCoverLetter] = useState()

    function handleResumeUpload (event) {
        setFile(event.target.files[0])
    }

    return (
    <div className="page">
        Name: <input className="name input1" placeholder='Full Name...'></input>
        Email: <input className="email input1" placeholder='Email...'></input>
        Phone Number <input className="phone input1" placeholder='Format: 1-123-456-789'></input>
        Linkedin <input className="linkedin input1"></input>
        Github <input className="github"></input>
        Resume
        <label for="file-upload" class="custom-file-upload">
            Custom Upload
        </label>
        <input 
            type="file" 
            id="file-upload"
            className="file-input input1" 
            onChange={(e) => handleResumeUpload(e.target.files[0])} 
        />
        Cover Letter <input className="github"></input>
    </div>
    )
}

export default Application;