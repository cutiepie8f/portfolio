import '../style/homePage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

function Home() {
  return (
    <div className='cover'>
        {/************ * navbar *********************/}
        <div className='navbar'>
            <div className='portfolio'>Portfolio</div>
            <div className='about'>About</div>
            <div className='skills'>Skills</div>
            <div className='project'>Project</div>
        </div>

        {/* ********************about ******************/}
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

        {/******************** skills *******************/}
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
           <span className='skillImages' style={{marginTop: "15px", position: "absolute"}}>
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
         
         {/************ education ******************/}
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

        {/************************** certification ************************/}
        
        <h3 className="certification-title">CERTIFICATION</h3>
        <div className='certificate-heading'>Full Stack MERN Developer</div>
        <div style={{ marginBottom: "20px"}}>
            <span className='organisationName'>Edureka </span>
            <span className='programType'>- Internship program</span>
        </div>
        <div className='course-details'>Created Zomato clone and Netflix Video Streaming application. Implemented using MERN stack.
        Use frontend and backend files containing folder structure and API's.    
        </div>
        <div style={{margin:"1rem 0 0 0"}}>
            <span className='technology'>Technology used : </span>
            <span className='technology-name'>HTML, CSS, Bootstrap, JavaScript, Node.js, React.js, Express.js, MongoDB.</span>
        </div>  
        <div style={{margin:"1rem 0 0 7rem"}}>
            <span className='id'> Certificate ID :</span>
            <span className='id-number'>B8196GUFC </span>
        </div>

        
        
        <h3 className="certificate-heading">Frontend Development Certification</h3>
        <div style={{ marginBottom: "20px"}}>
            <span className='organisationName'>Edureka </span>
            <span className='programType'>- Internship program</span>
        </div>
        <div className='course-details'>Created Zomato and Netflix HomePage using frontend technologies.</div>
        <div style={{margin:"1rem 0 0 0"}}>
            <span className='technology'>Technology used : </span>
            <span className='technology-name'>HTML, CSS, Bootstrap </span>
        </div>  
        <div style={{margin:"1rem 0 0 7rem"}}>
            <span className='id'> Certificate ID :</span>
            <span className='id-number'>UQTUQLPQYL  </span>
        </div>
        

        <h3 className="certificate-heading"> JavaScript Certification</h3>
        <div style={{ marginBottom: "20px"}}>
            <span className='organisationName'>Edureka </span>
            <span className='programType'>- Internship program</span>
        </div>
        <div className='course-details'>Created Weather Application using JavaScript.</div>
        <div style={{margin:"1rem 0 0 0"}}>
            <span className='technology'>Technology used : </span>
            <span className='technology-name'>HTML, CSS, Bootstrap, JavaScript</span>
        </div> 
        <div style={{margin:"1rem 0 0 7rem"}}>
            <span className='id'> Certificate ID :</span>
            <span className='id-number'>S946B2QY8  </span>
        </div>


        <h3 className="certificate-heading"> Backend Development Certification</h3>
        <div style={{ marginBottom: "20px"}}>
            <span className='organisationName'>Edureka </span>
            <span className='programType'>- Internship program</span>
        </div>
        <div className='course-details'>Created Zomato clone and Netflix Video Streaming application server using backend technologies.</div>
        <div style={{margin:"1rem 0 0 0"}}>
            <span className='technology'>Technology used : </span>
            <span className='technology-name'>Node.js, Express,js, Mongoose, MongoDB</span>
        </div>  
        <div style={{margin:"1rem 0 0 7rem"}}>
            <span className='id'> Certificate ID :</span>
            <span className='id-number'>UPJVKQC8YK  </span>
        </div>


        <h3 className="certificate-heading"> React.js Certification</h3>
        <div style={{ marginBottom: "20px"}}>
            <span className='organisationName'>Edureka </span>
            <span className='programType'>- Internship program</span>
        </div>
        <div className='course-details'>Created Zomato clone and Netflix Video Streaming application (client part) using React.js.</div>
        <div style={{margin:"1rem 0 0 0"}}>
            <span className='technology'>Technology used : </span>
            <span className='technology-name'>React.js</span>
        </div> 
        <div style={{margin:"1rem 0 0 7rem"}}>
            <span className='id'> Certificate ID :</span>
            <span className='id-number'>UVCGR3NDYB  </span>
        </div>

        <h3 className="certificate-heading"> Selenium Automation Training Certification</h3>
        <div style={{ marginBottom: "20px"}}>
            <span className='organisationName'>Intellipaat -</span>
            <span className='programType'> Training</span>
        </div>
        <div className='course-details'>Created test scripts to test the functionalities of the web applications like, Amazon, Flipkart, MakeMyTrip etc., using java and selenium.</div>
        <div style={{margin:"1rem 0 0 0"}}>
            <span className='technology'>Technology used : </span>
            <span className='technology-name'>Selenium, Java, Maven, Testng, Junit, Cucumber BDD framework.</span>
        </div> 
        <div style={{margin:"1rem 0 0 7rem"}}>
            <span className='id'> Certificate ID :</span>
            <span className='id-number'>31679-6037-226129 </span>
        </div>



        {/* **************Projects **********************/}

        <h3 className='projects-title'>Projects</h3>
        <div className='project-heading'>Edureka Internship Project</div>
        <div className='project-box'>
            <div className='content-box'>
                <div className='content-heading'>Zomato Clone Application</div>
                <div style={{display : "inline-block"}}>
                    <div className='content-details'>Designed and Developed Zomato Clone application using MERN stack. 
                    It has got look and feel of Zomato with all the features like authentication with google, dynamic cart,
                    payment gateway through razorpay and much more.</div>
                   </div>
                   <div>
                        <span className='skill-part'>React.js</span>
                        <span className='skill-part'>Node.js</span>
                        <span className='skill-part'>Express.js</span>
                        <span className='skill-part'>MongoDB</span>
                    </div>
                </div>
                <div style={{display:"inline-block", margin: "2rem 2rem 2rem 39rem", zIndex: "0", position: "relative"}}>
                <Swiper 
                        slidesPerView={1}
                        spaceBetween={0}
                        modules={[Navigation]}
                        navigation
                        className="mySwiperpart projectcarousel-1"
                    >
                        <SwiperSlide>
                                <div >
                                     <img src="./images/zomato-1.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/zomato-2.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/zomato-3.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/zomato-4.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/zomato-5.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/zomato-6.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>          
                </Swiper>
                </div>
        </div>


        <div className='project-heading' style={{marginTop: "105px"}}>Edureka Internship Project</div>
        <div className='project-box'>
            <div className='content-box'>
                <div className='content-heading'>Netflix Clone Application</div>
                <div style={{display : "inline-block"}}>
                    <div className='content-details'>Designed and Developed Netflix Clone application using MERN stack. 
                    It has got look and feel of Netflix with  the features like search the most popular movies, movie details, movie trailer and much more.</div>
                   </div>
                   <div>
                        <span className='skill-part'>React.js</span>
                        <span className='skill-part'>Node.js</span>
                        <span className='skill-part'>Express.js</span>
                        <span className='skill-part'>MongoDB</span>
                    </div>
                </div>
                
                <div style={{display:"inline-block",  margin: "2rem 2rem 2rem 39rem", zIndex: "0", position: "relative"}}>
                <Swiper 
                        slidesPerView={1}
                        spaceBetween={0}
                        modules={[Navigation]}
                        navigation
                        className="mySwiperpart projectcarousel-2"
                    >
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-1.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-2.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-3.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-4.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-5.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-6.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-7.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-8.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-9.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                        <SwiperSlide>
                                <div >
                                     <img src="./images/netflix-10.png" class="d-block w-100 page_img" alt="..." />
                                </div>
                        </SwiperSlide>
                            
                </Swiper>
                </div>
        </div>


        <div className='project-heading' style={{marginTop: "105px"}}>Edureka Internship Project</div>
        <div className='project-box'>
            <div className='content-box'>
                <div className='content-heading'>Weather Application</div>
                <div style={{display : "inline-block"}}>
                    <div className='content-details'>Designed and Developed Weather application using frontend techologies. 
                    It has search the city and find the weather status of that city.</div>
                   </div>
                   <div>
                        <span className='skill-part'>HTML</span>
                        <span className='skill-part'>CSS</span>
                        <span className='skill-part'>Bootstrap</span>
                        <span className='skill-part'>JavaScript</span>
                    </div>
                </div>
                
                <div style={{display:"inline-block",  margin: "7rem 0 7rem 39rem", zIndex: "0", position: "relative"}}>
                  <img src='./images/weatherapp.png' height={"300rem"}/>
                </div>
        </div>

        <h3 className='achievemets-title'>ACHIEVEMENTS</h3>
        <div>
        <div className='main-title'>First Position(Gold Medalist) - B.Tech </div>
        <div className='collegeName-title'>Bansal Institute of Science & Technology </div>
        <div className='sub-title'>Got the first position in third, sixth and eight semester of B.Tech</div>
        </div>


        <div style={{marginTop:"60px"}}>
            <div className='main-title'>First Prize - Quiz Competition </div>
            <div className='collegeName-title'>Bansal Institute of Science & Technology </div>
            <div className='sub-title'>Got the first Prize in the quiz Competition of Bansalotsav.</div>
        </div>

        <hr className='line'/>
        <div style={{margin: "1rem 0 8rem 7rem"}}>
            <span className='connect'>Let's Connect - </span>
            <span className='linkedin'>
                <a href='https://www.linkedin.com/in/jaya-khatke-aa13271a8'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                </a>
            </span>
            <span className='gmail'>
                    <img src='./images/gmail.png' width={"20px"}/>
            </span>
            <span className='gmail-text'>jayabistit19@gmail.com</span>
        </div>













    </div>
  );
}

export default Home;
