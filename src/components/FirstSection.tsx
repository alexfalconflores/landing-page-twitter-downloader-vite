
import MicrosoftStore from '../assets/img/svg/microsoft-store.svg';
import AppleStore from '../assets/img/svg/app-store.svg';
import GooglePlay from '../assets/img/svg/google-play.svg';
import Capture1Webp from '../assets/img/webp/capture1.webp';
import Capture1Png from '../assets/img/png/capture1.png';
import Wallpaper720 from '../assets/img/png/wallpaper-720.png';

import '../styles/FirstSection.css';

function FirstSection(){
    return(
        <section className='first-section'>
            <div className='left-section'>
                <h1>Twitter Downloader</h1>
                <h2 className='description'>Descarga Imágenes, Videos y gif fácilmente</h2>
                <div className='buttons-store'>
                    <img src={MicrosoftStore} alt="Microsoft Store"/>
                    <img src={AppleStore} alt="Apple Store"/>
                    <img src={GooglePlay} alt="Google Play"/>
                </div>
            </div>
            <picture>
                <source media="(max-width: 633px)" srcSet={Wallpaper720}/>
                <source srcSet={Capture1Webp} type="image/webp"/>
                <img src={Capture1Png} alt="Twitter Downloader"/>
            </picture>
            {/* <img src={Wallpaper720} alt="" /> */}
        </section>
    )
}

export default FirstSection;