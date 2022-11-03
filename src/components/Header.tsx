import banner from '../assets/img/svg/banner.svg';
import logo from '../assets/img/svg/logo.svg';
import country from '../assets/img/svg/country.svg';

import '../styles/Header.css';

function Header() {
    return (
        <nav>
            <picture>
                <source media='(max-width: 820px)' srcSet={logo} type="image/svg+xml"/>
                <img src={banner} alt="banner" />
            </picture>
            <img src={country} alt="country" />
        </nav>
    )

}

export default Header;