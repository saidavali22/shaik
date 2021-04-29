import { useState } from "react"

const PerfumesBrand=()=>{
 const [ferfumbrand]=useState([
   {id:1,img_url:"./static/topbrands/ferfumbrand1.jpg"},
   {id:2,img_url:"./static/topbrands/ferfumbrand2.jpg"},
   {id:3,img_url:"./static/topbrands/ferfumbrand3.jpg"},
   {id:4,img_url:"./static/topbrands/ferfumbrand4.jpg"}
 ])

 const data=ferfumbrand.map((item,index)=>{
   return(
    <div className="col-xl-6 col-md-6">
    <div className="py-3">
        <img className="rounded" src={ferfumbrand[index].img_url} alt="fragrance explore and do technologies pvt ltd" />
    </div>
  </div>
   )
 })
    return(
       <section>
   <div className="col-xl-8 mx-auto my-5">
      <div className="row m-0">
         {data}
      </div>
   </div>
</section>

    )
}

export default PerfumesBrand