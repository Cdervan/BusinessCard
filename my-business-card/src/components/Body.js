import React from "react"

export default function Body() {
    return (
        <main>
            <div className="body-head">
                <h1 className="name">Chris Dervan</h1>
                <h2 className="job">Software Engineer</h2>
                <small className="website">Chrisdervan.website</small>
            </div>
            
            <div className="buttons">
                <button>Email</button>
                <button>LinkedIn</button>
            </div>
            
            <div className="descriptions">
                <h2>About</h2>
                <p>I am a software engineer with particular interests in automation, blockchains, and security. I enjoy learning about new technology and like making pros and cons lists to decide which software would be most beneficial to learn and use.</p>
                
                <h2>Interests</h2>
                <p>Casual anime enjoyer, coffee connoisseur, gamer, aspiring cook, long-term investing, Osu, pork soda, gremlins, taco trucks, and bars.</p>
            </div>
        </main>
    )
}