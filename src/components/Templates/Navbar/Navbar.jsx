import {
    Navbar,
    Navbar_container,
    Navbar_container_invetory,
    Navbar_container_image,
    Navbar_container_links,
    link,
    image_logo,
    menu_mobile
} from './Navbar.module.scss'
import { Link } from 'react-router-dom';
import imageLogo from '../../../utils/images/valorant-logo-removebg-preview.png'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { CgMenu } from 'react-icons/cg'
import { AiOutlineClose } from 'react-icons/ai'


function NavbarComponent() {

    const stateFavorites = useSelector(rootReducer => rootReducer.favoriteReducer)
    const [menuMobile, setMenuMobile] = useState(true);

    const handleMenu = () => {
        setMenuMobile(prevMenu => !prevMenu)
    }

    return (
        <div className={Navbar}>
            <nav className={Navbar_container}>
                <div className={Navbar_container_image}>
                   <Link to="/"> <img src={imageLogo} alt="logo" className={image_logo} /> </Link> 
                </div>

                {!menuMobile && (
                    <CgMenu onClick={handleMenu} className={menu_mobile} />
                )}

                {menuMobile && (
                    <>
                        <AiOutlineClose onClick={handleMenu} className={menu_mobile} />

                        <div className={Navbar_container_links}>
                            <Link className={link} to="/agents"> Agentes </Link>
                            <Link className={link} to="/ranks"> Patentes </Link>
                            <Link className={link} to="/maps"> Mapas  </Link>
                            <Link className={link} to="/weapons"> Arsenal </Link>
                            <Link className={link} to="/gamemode"> Modos de Jogo </Link>
                        </div>
                    </>

                )}

                <div className={Navbar_container_invetory}>
                    <Link className={link} to="/favorites"> Favoritos ( {stateFavorites.count} ) </Link>
                </div>

            </nav>
        </div>
    );
}

export default NavbarComponent;