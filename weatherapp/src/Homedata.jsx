import { Background } from "./search";

export function HomeData() {
    return (
      <div className="home-container">
        <div className="home-content">
          {/* Eight boxes */}
          <div className="longbox"></div>
          <div className="longbox"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
    );
  }


export function HomePage(){
    return(
        <div>
            <Background/>
            <HomeData/>
        </div>
    )
}