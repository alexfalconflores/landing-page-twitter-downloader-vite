import MicrosoftStoreSVG from '../assets/img/svg/microsoft-store/microsoft-store';
import AppStoreSVG from '../assets/img/svg/app-store/app-store';
import GooglePlaySVG from '../assets/img/svg/google-play/google-play';

import Capture1Webp from '../assets/img/webp/capture1.webp';
import Capture1Png from '../assets/img/png/capture1.png';

import Image1633Png from '../assets/img/png/image1-633px.png';
import Image1633Webp from '../assets/img/webp/image1-633px.webp';
import Image1820Png from '../assets/img/png/image1-820px.png';
import Image1820Webp from '../assets/img/webp/image1-820px.webp';
import Image11024Png from '../assets/img/png/image1-1024px.png';
import Image11024Webp from '../assets/img/webp/image1-1024px.webp';
import Image11600Png from '../assets/img/png/image1-1600px.png';
import Image11600Webp from '../assets/img/webp/image1-1600px.webp';
import Image11920Png from '../assets/img/png/image1-1920px.png';
import Image11920Webp from '../assets/img/webp/image1-1920px.webp';

import '../styles/FirstSection.css';

function FirstSection(){
    return(
        <section className='first-section'>
            <div className='left-section'>
                <h1>Twitter Downloader</h1>
                <h2 className='description'>Descarga Imágenes, Videos y gif fácilmente</h2>
                <div className='stores'>
                    <MicrosoftStoreSVG/>
                    <AppStoreSVG/>
                    <GooglePlaySVG/>
                </div>
            </div>
            <picture>
                {/* <source media="(max-width: 633px)" srcSet={Image1633Webp} type="image/webp"/>
                <source media="(max-width: 633px)" srcSet={Image1633Png} type="image/png"/> */}
                <source media="(max-width: 820px)" srcSet={Image1820Webp} type="image/webp"/>
                <source media="(max-width: 820px)" srcSet={Image1820Png} type="image/png"/>
                <source media="(max-width: 1024px)" srcSet={Image11024Webp} type="image/webp"/>
                <source media="(max-width: 1024px)" srcSet={Image11024Png} type="image/png"/>
                <source media="(max-width: 1600px)" srcSet={Image11600Webp} type="image/webp"/>
                <source media="(max-width: 1600px)" srcSet={Image11600Png} type="image/png"/>
                <source media="(max-width: 1920px)" srcSet={Image11920Webp} type="image/webp"/>
                <source media="(max-width: 1920px)" srcSet={Image11920Png} type="image/png"/>
                <source srcSet={Capture1Webp} type="image/webp"/>
                <img src={Capture1Png} alt="Twitter Downloader"/>
            </picture>
            {/* <img src={Wallpaper720} alt="" /> */}
        </section>
    )
}

export default FirstSection;