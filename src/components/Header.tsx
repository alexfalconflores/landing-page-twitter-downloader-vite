import banner from '../assets/img/svg/banner.svg';
import country from '../assets/img/svg/country.svg';

import '../styles/Header.css';

function Header() {
    return (
        <nav>
            <img src={banner} alt="banner" />
            <img src={country} alt="country" />
        </nav>
    )

}

export default Header;