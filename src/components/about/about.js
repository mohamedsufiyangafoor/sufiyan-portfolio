import React from 'react'
import Socialcontact from '../common/social-contact/socialcontact'
import './about.css'

function about() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello There, &#128075; I am <br /><span className="imp"> Mohamed Sufiyan Gafoor</span><br /> I am a Full Stack Developer
                    <div className="download1">
                        <a download href={require("../../image/resume.pdf").default} >
                            <i class ="fi-rr-cloud-download download-icon" />  Download Resume</a>
                    </div>
                </div>
                <div className="about-photo">
                    <img src ={require('../../image/Developeractivity-bro.png').default} alt={"mainsvg"} className="picture"></img>
                </div>
            </div>
            <Socialcontact />
        </div>
    )
}

export default about
