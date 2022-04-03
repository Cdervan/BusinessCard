import React from "react"
import profpic from '../images/nakedMime.jpg'
import emailIcon from '../images/Email-icon.png'
import linkedinIcon from '../images/Linkedin-icon.jpg'


export default function Body() {
    return (
        <div className="page">
            <header>
                <img className="profpic" src={profpic} alt="This is a picture of me"></img>
            </header>
            <main className="main-text">
                <div className="body-head">
                    <h1 className="name">Chris Dervan</h1>
                    <h2 className="job">Software Engineer</h2>
                    <small className="website">Chrisdervan.website</small>
                </div>

                <div className="buttons">
                    <button className="email-button">
                        <img src={emailIcon} alt="Email icon"/>
                        <p className="button-text">Email</p>
                    </button>
                    <button className="linkedin-button">
                        <img src={linkedinIcon} alt="LinkedIn icon"/>
                        LinkedIn
                    </button>
                </div>

                <div className="descriptions">
                    <h2>About</h2>
                    <p>I am a software engineer with particular interests in automation, blockchains, and security. I enjoy learning about new technology and like making pros and cons lists to decide which software would be most beneficial to learn and use.</p>

                    <h2>Interests</h2>
                    <p>Pokemon, anime, coffee, gaming, chef, investing, Osu, pork soda, gremlins, taco trucks, and bars.</p>
                </div>
            </main>
        </div>
    )
}