import home from './Assets/home.png';
import location from './Assets/location.png';
import burgericon from './Assets/burgericon.png'

function NavBar(){


    return(
        <div className="nav-bar">
            <img className="home" src={home} alt="home icon"/>
            <img className="burger" src={burgericon} alt="burger icon"/>
            <img className="location" src={location} alt="location pin"/>
        </div>
    )
}

export default NavBar;
