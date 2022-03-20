import react from "react";
import '../HomePage/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Typical from 'react-typical'

import Iphone_datein from '/dev/ReactWeb/fetch/src/Images/dateien.jpg';
import Iphone_apfel from '/dev/ReactWeb/fetch/src/Images/apfel(1).png';
import Iphone_Browser from '/dev/ReactWeb/fetch/src/Images/safari.png';
import Spacemann from '/dev/ReactWeb/fetch/src/Images/spaceman.png';
import reactLogo from '../HomePage/react-logo.svg';
import brackets from '../HomePage/brackets.svg';
import digital from '../HomePage/digital-marketing.svg';
import me from '../HomePage/NicoEmoji.jpg'

import Footer from "../footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


function Clock(props) {
  return (
    <div> 
      <p> {props.date.toLocaleTimeString()}</p>
    </div>  
  );
}

AOS.init();

function Home() {
  return (
    <div className="Home_container">
    <div className="Block_container">
        <div  className="NI" >
        <div className="NI_Home_ONE">
            <h2 id="start_text" >Hello,</h2>
        </div>
        <div>
            <h2 id="start_text" className="Text_color1" >I'm Nico Ihle</h2>
        </div>
        <div>
            <h3 >Web/App-developer.</h3>
            <section>
              <span className="stars" ></span>
              <span className="stars"></span>
              <span className="stars" ></span>
              <span className="stars" ></span>
              <span className="stars" ></span>
              <span className="stars" ></span>
              <span className="stars"></span>
              <span className="stars"></span>
            </section>
            <Typical className="Animations_Text" steps={['Freelancer for,', 1000, 'Software', 1000, 'Websites', 500, ]}  loop={Infinity} />
        </div>
        </div>

        <div >  
        <div class="container">
          <div class="iphonex">
            <div class="iphonex__case">
              <div class="iphonex__top">
              <div className="iphonex__time"><Clock date={new Date()} /></div>   
                <div class="iphonex__time">10:30</div>
                <i class="fa fa-wifi iphonex__wifi"></i>
                <i class="fa fa-battery-quarter iphonex__battery"></i>
              </div>
              <div class="iphonex__notch">
                <div class="iphonex__speaker"></div>
                <div class="iphonex__camera"></div>
              </div>
              <div class="iphonex__screen">
                  <div className='Bottom_Apps_Images' >
                  <img className='Iphone_Aktion_Image'src={Iphone_datein} />

                  <img className='Iphone_Apple_Image'src={Iphone_apfel} />
                  <img className='Iphone_Apple_Safari'src={Iphone_Browser} />
                  </div>
              </div>
            </div>
            <div class="iphonex__power"></div>
            <div class="iphonex__volume iphonex__volume--up"></div>
            <div class="iphonex__volume iphonex__volume--down"></div>
          </div>
        </div>
      </div>
    </div>
      {/* Aboute me  */}
      <div className="AboutME" >
        <div className="AboutMEInhalt" >
          <div>
          <h2 class="numbered-heading">About Me</h2>
          </div>
          <div class="section group">
        <div class="col span_1_of_2">
         <div>
         <h2 className='Header_About_me' >Hi, I'm Nico. Nice to meet you. </h2>
             <p className='Text_Inhalt_Aboutme'>Since beginnig my journey as a Developer i created some nice Projekts.
               <br></br>You can look on them on my Github. I have a serious passion for UI effects,
              <br></br> animations and creating intuitive, dynamic user experiences.
              <br></br>If your intressed on building something amazing then contact me.
              <br></br>If your intressed on building something amazing then contact me.
              <br></br>If your intressed on building something amazing then contact me.
              </p>
              <div>
                <p className='Text_Inhalt_Aboutme'>
                  <a href="#" class="animated-button1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    .Contact-me()
                  </a>
                </p>
              </div>
         </div>
        </div>
        <div data-aos="zoom-in-down" class="col span_1_of_2">
            <img className='Nico_image_Aboutme' src={me} />
        </div>
      </div>
        </div> 
      </div>
    
      <div className="Home_container3">
        <div className="services-card-wrapper">
      <div class="services-card interface aos-init aos-animate" data-aos="fade-up" data-aos-delay="200"> 
      <div> 
      <img src={reactLogo} alt="" /> 
        </div> 
        <h5>React Projects</h5> 
        <p> I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth. </p>
         </div> 
           
          <div class="services-card development aos-init aos-animate" data-aos="fade-up" data-aos-delay="400"> 
         <div> 
           <img src={brackets} alt="" /> 
           </div>
            <h5>Website Development</h5> 
            <p> I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts. </p> 
            </div> 
             <div class="services-card marketing aos-init aos-animate" data-aos="fade-up" data-aos-delay="600"> 
            <div>
              <img src={digital} alt="" /> 
              </div> 
              <h5>Learning</h5> 
              <p> I identify and evaluates new digital technologies and use web analytics tools to measure site traffic to better optimize marketing campaigns. </p> 
        </div> 
        </div>
    </div>
      <Footer/>
    </div>
  );
}

export default Home;

