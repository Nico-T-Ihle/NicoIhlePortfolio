import react from "react";
import '../HomePage/Home.css';
import Typical from 'react-typical'

import Iphone_datein from '/dev/ReactWeb/fetch/src/Images/dateien.jpg';
import Iphone_apfel from '/dev/ReactWeb/fetch/src/Images/apfel(1).png';
import Iphone_Browser from '/dev/ReactWeb/fetch/src/Images/safari.png';
import Spacemann from '/dev/ReactWeb/fetch/src/Images/spaceman.png';

function Home() {
  return (
    <div className="Home_container">
    <div className="Block_container">
        <div className="NI" >
        <div className="NI_Home_ONE">
            <h2 >Hello,</h2>
        </div>
        <div>
            <h2  className="Text_color1" >I'm Nico Ihle</h2>
        </div>
        <div>
            <h3 >Web/App-developer.</h3>
            <Typical className="Animations_Text" steps={['Freelancer for,', 1000, 'Onepagers', 500]}  loop={Infinity} />
        </div>
        </div>
        <div>
        <div class="container">
          <div class="iphonex">
            <div class="iphonex__case">
              <div class="iphonex__top">
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
                  {/* <a  ><Link  to={"/Karlsruhe"}> <img className='Iphone_Folder_Image' src={Iphone_FolderImage} />  </Link> */}
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
      <div className="Home_container2">
        <div className="NI_About_me_Container">
        <div className="NI_About_me_Text" >
          <div className="NI_About_me_Text_Container_Box" >
            <div>
            <div className="NI_About_me_Text_Box">
              <h2 className="NI_About_me_Text_Box_Header" >About</h2>
              <div className="NI_About_me_Text_Box_content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
          </div>
            </div>
            <div>
            <div className="NI_About_me_Text_Box">
              <h2 className="NI_About_me_Text_Box_Header" >Goals</h2>
              <div className="NI_About_me_Text_Box_content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
          </div>
            </div>
          </div>
        </div>
        <div>
        <img className="SpacemanMove" src={Spacemann} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
