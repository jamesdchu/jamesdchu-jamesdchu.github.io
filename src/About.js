import React from "react";


const About = () => {
    return (
        <>
            <body>
                <div id="aboutMe" class="mx-auto container">
                    <h2>About Me</h2>
                    <p class="lead">Hi, I’m James!</p>
                    {/* <img src='/images/JamesParker11:27:2020.JPG'/> */}
                        <p>I’m a Chinese-American freshman
                        who grew up in New York City studying computer
            science at the University of Michigan. </p>
                        <h4>Fun Facts!</h4>
                        <ol>
                            <li>My favorite quarantine drink is oatmilk!</li>
                            <li>I played on my high school's varsity bowling and cricket teams.</li>
                            <li>In my freetime, I love to crack open a new book. My favorite book is
                    the Last Lecture by Randy Pausch. I highly recommend checking it out!</li>
                            <li>I enjoy hiking - last year, I went on an overnight hiking trip on the Appalachian Trail.</li>
                        </ol>
                </div>
                    <div id="Contact" class="container">
                        <h4>Contact</h4>
                        <p>My preferred gender pronouns are he/him/his. You can
                contact me through email at <a href="mailto:jameschu@umich.edu">jameschu@umich.edu</a>. </p>
                    </div>
                    <div id="mediaList" class="container">
                        <h3>Some of my Recent and Favorite Reads!</h3>
                        <ul>
                            <li>The Little Book of Common Sense Investing by John C. Bogle</li>
                            <li>The Last Lecture by Randy Pausch</li>
                            <li>The Namesake by Jhumpa Lahiri</li>
                            <li></li>
                        </ul>
                    </div>
                    <div id="mediaList" class="container">
                        <h3>What I'm Reading Next</h3>
                        <ul>
                            <li>The Intelligent Investor by Benjamin Graham</li>
                            <li>Exhalation by Ted Chiang</li>
                            <li>Bad Blood: Secrets and Lies in a Silicon Valley by John Carreyrou</li>
                            <li>The Inugami Curse by Seishi Yokomizo</li>
                            <li>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future by Ashlee Vance</li>
                        </ul>
                    </div>
                <div>
                    <h5>Resume</h5>
                    <h5>GitHub</h5>
                </div>
            </body>
        </>
    )
}


export default About;