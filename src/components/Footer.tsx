import { useState } from 'react';
import '../styles/Footer.css';

function Footer(){
    const [year, setYear] = useState(new Date().getFullYear());

    return(
        <footer>
            <p>❤️ Made by Alex Stefano Falcon Flores</p>
            <p><a href="mailto:alexfalconflores@hotmail.com">✉️ : alexfalconflores@hotmail.com</a></p>
            <p id='copyright'>&copy; 2002-{year} Twitter Downloader. All rights reserved.</p>
        </footer>
    )
}

export default Footer;