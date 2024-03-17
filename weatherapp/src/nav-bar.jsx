import homeIcon from './Assets/home.png';
import location from './Assets/location.png';
import burgerIcon from './Assets/burgericon.png'

function NavBar(){


    return( 
        <div className="nav-bar">
            <img className="home" src={homeIcon} alt="home icon"/>
            <img className="burger" src={burgerIcon} alt="burger icon"/>
            <img className="location" src={location} alt="location pin"/>
        </div>
    )
}

export default NavBar;