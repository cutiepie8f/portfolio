import '../style/homePage.css';

function Home() {
  return (
    <div className='cover'>
        <div className='navbar'>
            <div className='portfolio'>Portfolio</div>
            <div className='about'>About</div>
            <div className='skills'>Skills</div>
            <div className='project'>Project</div>
        </div>
        <div className='aboutDetails'>
            <h3 className='aboutTitle'>ABOUT</h3>
           <div className='name-heading'> I'm Jaya Khatke, an aspiring Full Stack Web Developer. </div>
           <div className='content'> An Open Source enthusiast and an Information Techology graduate from India.
            I am a Software engineer, specializing in web development.
            I love working on new and exciting technologies. I have a keen interest in Web Development and I am always looking for new opportunities to learn and grow.
           </div>

        </div>
        <div className='image'>
             <img  src='./images/image-2.png' width={"600px"}/>
             {/* <img  src='./images/image.jpg' width={"600px"}/> */}
        </div>
        <h3 className='skillTitle'>SKILLS</h3>
        <div style={{marginLeft : "109px"}}>
           <span className='skillImages'>
            <img src='./images/java.png' width={"70px"}/>
           </span>
           <span className='skillImages'>
            <img src='./images/html-logo.jpg' width={"100px"}/>
           </span>
           <span className='skillImages'>
            <img src='./images/css_img.jpg' width={"100px"}/>
           </span>
           <span className='skillImages'>
            <img src='./images/Bootstrap_logo.svg' width={"100px"}/>
           </span>
           <span className='skillImages' style={{marginTop: "41px", position: "absolute"}}>
            <img src='./images/js.webp' width={"100px"}/>
           </span>
           <span className='skillImages' style={{marginLeft:"131px"}}>
            <img src='./images/node.png' width={"150px"}/>
           </span>
           <span className='skillImages'>
            <img src='./images/express_img.png' width={"100px"}/>
           </span>
           <span className='skillImages'>
            <img src='./images/mongodb_img.avif' width={"200px"}/>
           </span>
           <span className='skillImages'>
            <img src='./images/Selenium_Logo.png' width={"100px"}/>
           </span>
        </div>

        <h3 className='education-title'>EDUCATION</h3>

        <div style={{margin: "0 0 4rem 7rem", color: "white"}}>
            <div className='degree'>Bachelor's Degree in Information & Technology</div>
            <div className='college'>Bansal Institute of Science & Technology</div>
            <div style={{marginBottom: "20px"}}>
                <span className='marksHeading'>CGPA - </span>
                <span className='marks'>8.88 </span>
            </div>
            <div className='year'>2017-2021</div>
        </div>

        <div style={{margin: "0 0 4rem 7rem", color: "white"}}>
            <div className='degree'>High School, Nalanda Public High Secondary School</div>
            <div className='college'>Scored 84% in PCM</div>
            <div className='year'>2017</div>
        </div>

        <div style={{margin: "0 0 4rem 7rem", color: "white"}}>
            <div className='degree'>Secondary School, Nalanda Public High Secondary School</div>
            <div className='college'>Scored 88.85%</div>
            <div className='year'>2015</div>
        </div>












    </div>
  );
}

export default Home;
