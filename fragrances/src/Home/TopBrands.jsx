import { useEffect, useState } from "react";

const TopBrands=()=>{
  const [brand , setbrand]=useState([]);
  useEffect(()=>{
    return(
       setbrand([
           {id:'1',brand_img_url:'https://nstylefragrances.com/wp-content/uploads/2020/12/brand-8.jpg'},
           {id:'2',brand_img_url:'https://nstylefragrances.com/wp-content/uploads/2020/12/brand-14.png'},
           {id:'2',brand_img_url:'https://nstylefragrances.com/wp-content/uploads/2020/12/brand-14.png'},
           {id:'2',brand_img_url:'https://nstylefragrances.com/wp-content/uploads/2020/12/brand-14.png'},
           {id:'2',brand_img_url:'https://nstylefragrances.com/wp-content/uploads/2020/12/brand-14.png'},
           {id:'2',brand_img_url:'https://nstylefragrances.com/wp-content/uploads/2020/12/brand-14.png'},
           {id:'2',brand_img_url:'https://nstylefragrances.com/wp-content/uploads/2020/12/brand-14.png'},
           {id:'2',brand_img_url:'https://nstylefragrances.com/wp-content/uploads/2020/12/brand-14.png'},
           {id:'2',brand_img_url:'https://nstylefragrances.com/wp-content/uploads/2020/12/brand-14.png'},

       ])  
    )
  },[]);

  const data=brand.map((item,index)=>{
      return(
        <li className="uk-panel" style={{width:"200px"}}>
            <img src={brand[index].brand_img_url} alt=""  style={{borderRadius:"50%"}} />        
        </li>
      )
  })
  return(
      <section className="py-4">
        
        <div className="text-center">
            <h2 className="font-weight-bold text-light">Top Brands</h2>
        </div>

        <div class="col-xl-9 col-md-8 mx-auto  uk-light" tabindex="-1" uk-slider="autoplay: true ; autoplay-interval:1000	">
            <ul class="uk-slider-items mx-auto top_brand uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m">
        {data}        

    </ul>

    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

</div>
      </section>
  )
}
export default TopBrands;