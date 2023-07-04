import {
    Navbar,
    Navbar_container,
    Navbar_container_invetory,
    Navbar_container_image,
    Navbar_container_links,
    link,
    image_logo,
    menu_mobile,
    responsive_navbar
} from './Navbar.module.scss'
import { Link } from 'react-router-dom';
import imageLogo from '../../../utils/images/valorant-logo-removebg-preview.png'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg'
import { AiOutlineClose, AiOutlineStar } from 'react-icons/ai'


function NavbarComponent() {

    const stateFavorites = useSelector(rootReducer => rootReducer.favoriteReducer)
    const [menuMobile, setMenuMobile] = useState(false);

    const showNavbar = () => {
        setMenuMobile(prevMenu => !prevMenu)
    }


    return (
        <div className={Navbar}>
            <nav className={Navbar_container}>
                <div className={Navbar_container_image}>
                    <Link to="/"> <img src={imageLogo} alt="logo" className={image_logo} /> </Link>
                </div>


                        {!menuMobile && (
                                   <CgMenu onClick={showNavbar} className={menu_mobile} />
                        )}
                     

                        {menuMobile && (
                            <AiOutlineClose onClick={showNavbar} className={menu_mobile} />
                        )}

                        <> 

                                <div className={
                                    menuMobile ? `${responsive_navbar}`  :  `${Navbar_container_links}` 
                                }>
                                <Link className={link} to="/agents"> Agentes </Link>
                                <Link className={link} to="/ranks"> Patentes </Link>
                                <Link className={link} to="/weapons"> Arsenal </Link>
                                <Link className={link} to="/maps"> Mapas  </Link>
                                <Link className={link} to="/gamemode"> Modos de Jogo </Link>
                                </div>
 
                        </>

                <div className={Navbar_container_invetory}>
                    <Link className={link} to="/favorites"> <AiOutlineStar/> ( {stateFavorites.count} ) </Link>
                </div>

            </nav>
        </div>
    );
}

export default NavbarComponent;