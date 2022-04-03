import React from "react"
import twitterIcon from "../images/Twitter-Icon.png"
import FacebookIcon from "../images/Facebook-Icon.png"
import InstagramIcon from "../images/Instagram-Icon.png"
import GithubIcon from "../images/GitHub-Icon.png"

export default function App() {
    return (
        <footer>
            <div className="icon-footers">
                <img className="twitter-icon" src={twitterIcon} alt="Twitter icon"/>
                <img className="facebook-icon" src={FacebookIcon} alt="Facebook icon"/>
                <img className="instagram-icon" src={InstagramIcon} alt="Instagram icon"/>
                <img className="gitHub-icon" src={GithubIcon} alt="Github icon"/>
            </div>
        </footer>
    )
}