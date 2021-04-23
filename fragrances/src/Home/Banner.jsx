import React, { useEffect, useState } from 'react';
import $ from 'jquery'
const Banner=()=>{
    const [imgdata , setimgdata ]=useState([]);
    useEffect(()=>{
        setimgdata([
            {id:1,img_url:"./static/banner/banner1.png"},
           
        ])
    },[])
    
    
    $("body").click(function(){
        var x = document.getElementById("myAudio"); 
        x.play();
      });

    const data=imgdata.map((a,i)=>{
        return(
            <li key={i} className="uk-panel"><img src={imgdata[i].img_url} alt="explore and do technologes"  /></li>
         )
    })
 
    return(
        // banner section start
        <section>
        <div>

        <div className="uk-position-relative w-100 uk-visible-toggle uk-light" tabindex="-1" uk-slider="autoplay: true">
    <ul  className="uk-slider-items uk-child-width-1-1 w-100">
        <li  style={{maxHeight:"450px"}}>
        <video width="100%" loop autoPlay muted>      
            <source src="./static/bg-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </li>
        
        {data}</ul>
     <a className="uk-position-center-left ml-5" href="#" uk-slidenav-previous uk-slider-item="previous" ><i className="fas fa-arrow-left"></i></a>
     
     <a className="uk-position-center-right mr-5" href="#" uk-slidenav-next uk-slider-item="next"><i className="fas fa-arrow-right"></i></a>
   
   
    <div>
        <audio id="myAudio"  src="./static/click.mp3"/>
    </div>

</div>

        </div>
        </section>
        // banner section end
    )
}

export default Banner;
