const AboutUs=()=>{
    return(
        <section className="py-5">
            {/* <div className="row m-0">
                <div className="col-xl-7  bg-danger">
                    <div>
                        <div className="row m-0">
                             <div className="col-7 bg-dark" style={{borderRadius:"50%",left:"100px",zIndex:"10"}}>
                                   <img src="./static/aboutus/feg1.png" className="w-75 p-0" style={{top:"-100px"  ,position:"relative"}}   />
                             </div>

                             <div className="col-5 bg-light" style={{borderRadius:"50%",maxHeight:"500px"}}>
                             <img src="./static/aboutus/feg2.png" className="w-75 p-0" style={{top:"-100px"  ,position:"relative" , left:"-50px",zIndex:"20"}}   />
                             </div>
                        </div>
                    </div>
                </div> 
                <div className="col-xl-5 col-md-6 bg-light">
                  ss
                  </div> 
            </div> */}


            <div className="row m-0">
              
                    <div className="col-xl-12 p-0">
                        <div className="row m-0">

                <div className="col-xl-5 px-5  about-bg">
                    <div className="p-0 text-right" style={{display:"table-cell" , width:"35%"}}>
                    <img src="./static/aboutus/feg1.png" className="p-0 ml-auto wow animate__animated animate__bounceInUp " style={{ bottom:"120px" , position:"relative" , animationDelay:"0.5s"}} />
                    </div>

                    <div className="p-0  text-right" style={{display:"table-cell" ,width:"30%"}}>
                    <img src="./static/aboutus/feg2.png" className="p-0  wow animate__animated  animate__zoomInUp" style={{ bottom:"120px" , position:"relative" , animationDelay:"0.5s"}} />
                    </div>

                </div> 
                <div className="col-xl-5 px-5 col-md-6  pt-xl-5 mt-xl-5 pl-xl-5">
                        <div>
                            <h1 className="wow animate__animated animate__backInDown pl-xl-5 about-font" style={{color:"#F0E68C"}}><b>
                                <i>
                            Love is a perfume you cannot pour onto others without getting a few drops on yourself.
                            </i></b></h1>
                           
                        </div>
                  </div> 
            </div>
            </div>
                    
                </div>
        </section>
    )
}

export default AboutUs