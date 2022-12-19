import {Link} from "react-router-dom"


function LandingPageButton() {   
     return <Link to="/cus" class="nav-link">
        <a class="btn btn-primary" > 
            <span style={{"font-size": "24px"}}>
                Start here!
            </span>
        </a>
    </Link>
}


function LandingFrameMessage() {    const style = {
        margin: "auto",
        padding: "10% 35% 10% 15%",
        color: "white",
        
    }    
    
    
    return <div style={style} >
        
        <div style={{"font-size": "96px", "color":"red"}} >
            Welcome!!
        </div>
        
        <div style={{"font-size": "36px", "color":"black"}}>
            Need You Create Your Own Trip?
        </div>        <br />        <LandingPageButton />    </div>
}

function LandingFrame() {
    const style = {
        "background-image": `url("./images/img4.jpg")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        position: "absolute",
        height: "100%",
        width: "100%",
        
    }   
    
    return <div style={style}>
        <LandingFrameMessage />
    </div>
}

function Landing() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{color:"red"}}>LSR </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
            
          </div>
          <a class="btn btn-secondary" type="submit" justify-content-md-end href="/Log">Admin</a>
        </div>
      </nav>
    
    <div>
        <LandingFrame />
    </div>
    </div>
    )

    
}

export default Landing