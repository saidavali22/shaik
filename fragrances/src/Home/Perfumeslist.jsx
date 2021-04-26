import { useEffect, useState } from "react";

const Perfumeslist=()=>{
    const [perfum , setperfum]=useState([]);
    useEffect(()=>{
        return(
            
            setperfum([
                {id:'1',product_img:'./static/product/product1.png' , product_name:"CHANCE " ,product_price:"100" ,product_weight:"8" },
                {id:'2',product_img:'./static/product/product2.png' , product_name:"Voyage" , product_price:"80" ,product_weight:"10"  },
                {id:'3',product_img:'./static/product/product3.png' , product_name:"Polo" ,product_price:"90" , product_weight:"12" },
                {id:'4',product_img:'./static/product/product4.png' , product_name:"Classic" , product_price:"110" , product_weight:"15"},
                {id:'5',product_img:'./static/product/product5.png' , product_name:"CWhite"  , product_price:"150" , product_weight:"18"}

            ])
        )
    },[])

    // useEffect(()=>{
    
    // fetch('http://127.0.0.1:8000/addproduct')
    // .then(response => response.json())
    // .then(data =>{ setperfum(data);console.log(data)});
  
    // },[])

 const data=perfum.map((item,index)=>{
     return(

        <div className="col-xl-2 col-md-4 py-4">
        <div className="rounded"> 
        <div  className="text-center  p-0   w-100" >
          <img src={perfum[index].product_img} className=" p-0 perfum_img w-100" style={{height:"280px"}}  alt="" />
        </div>
        <div className="text-warning">
           <h5 className="pt-2 text-white" ><b>{perfum[index].product_name}</b> <small className="ml-3">{perfum[index].product_weight} Ml</small></h5>
           <p><b>$ {perfum[index].product_price} /-</b></p>
        </div>
        </div>                 
        </div>
     )
 })

    return(
        <section className="py-5">
            <div className="col-xl-11 col-11 mx-auto">
               <div className="row m-0">
                  {data}
                </div>
               </div>
        </section>
    )
}

export default Perfumeslist;