import arrow from './Assets/leftarrow.svg';
import circle from './Assets/circle.svg';

// Component for use to switch between wind map and conditions
function ArrowDots(){
    return(
        <div className="dots-and-arrows-container">
            <img className="arrow left-arrow" src={arrow}/>
            <img className="dots" src={circle} />
            <img className="dots" src={circle} />
            <img className="dots" src={circle} />
            <img className="arrow right-arrow" src={arrow}/>
        </div>
    )
}

export default ArrowDots;