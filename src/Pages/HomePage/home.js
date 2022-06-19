import react from "react";
import '../HomePage/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Spline from '@splinetool/react-spline';
import Typical from 'react-typical'
import { Link } from 'react-router-dom';

import Iphone_datein from '/dev/ReactWeb/fetch/src/Images/github-zeichen.png';
import Iphone_apfel from '/dev/ReactWeb/fetch/src/Images/apfel(1).png';
import Iphone_Browser from '/dev/ReactWeb/fetch/src/Images/safari.png';
import Spacemann from '/dev/ReactWeb/fetch/src/Images/spaceman.png';
import reactLogo from '../HomePage/react-logo.svg';
import brackets from '../HomePage/brackets.svg';
import digital from '../HomePage/digital-marketing.svg';
import me from '../HomePage/IMG_0126.png';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Pagination, Parallax, Navigation, Mousewheel } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/navigation/navigation.min.css';

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
        <div className="NI" >
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
            <Typical className="Animations_Text" steps={['Freelancer for,', 1000, 'Apps', 1000, 'Websites', 1000,]} loop={Infinity} />
          </div>
        </div>
        <div >

          <div class="container">
            <div class="iphone-x">
              <i>Speaker</i>
              <b>Camera</b>
              <s><Clock date={new Date()} /></s>
              <span>
                <a href="https://github.com/Nico-T-Ihle/React-Native-Photo-Edit-App" target={"_blank"} > 
                  <img className='Iphone_Aktion_Image' src={Iphone_datein} />
                  </a>
                </span>
            </div>
          </div>
        </div>
      </div>
      {/* Aboute me  */}
      <div className="AboutME" >
        <div class="AboutMEInhalt">
          <div>
            <h2 class="numbered-heading">About Me</h2>
          </div>
          <div class="section group">
            <div class="col span_1_of_2">
              <div>
                <h2 class="Header_About_me">Hi, I'm Nico. Nice to meet you. </h2>
                <p class="Text_Inhalt_Aboutme">Since beginnig my journey as a Developer i created some nice Projekts.
                  You can look on them on my Github. I have a serious passion for UI effects,
                  animations and creating intuitive, dynamic user experiences.
                  At the time i m learing Java and Swift.
                  If your intressed on building something amazing then contact me.
                </p>
                <div>
                  <p class="Text_Inhalt_Aboutme">
                    <a href="#" class="animated-button1">
                      <span></span><span></span><span></span><span></span>.Contact-me()</a>
                  </p>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in-down" class="col span_1_of_2 aos-init aos-animate">

              <div>
                <img class="Me_Home" src="/NicoIhlePortfolio/static/media/IMG_0126.9306a74b.png" />
              </div>

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
            <h5>React Native</h5>
            <p>The reason why i love to create apps is the possibility you have when you open a app. And i think a app open something you didnt know beforehand.</p>
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
            <p> I identify love to explore new things that blows my mind so that i can read everything to be my best to understand and develop new things. </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

