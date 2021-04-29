import { useEffect, useState } from "react";
const Perfumeslist=()=>{
    const [perfum , setperfum]=useState([]);
    const [filterbrand , setfilterbrand]=useState({ categorys:["dd","Dd"] , brands:[] })   
    const [brand]=useState([
        {id:1,brand_name:"addies" , value:"addies"},
        {id:2,brand_name:"dolce  gabbana" , value:"dolce gabbana"},
        {id:3,brand_name:"diesel" , value:"diesel"},
        {id:4,brand_name:"ferrari" , value:"ferrari"},
        {id:5,brand_name:"giorgio armani" , value:"giorgio armani"},
        {id:6,brand_name:"gucci" , value:"gucci"},
        {id:6,brand_name:"boss" , value:"boss"},
        {id:7,brand_name:"lactose" , value:"bactose"}
      ]); 

       const [category]=useState([{ id:1, category_name:"Mens" },{ id:2, category_name:"Womens" },{ id:3, category_name:"Kid's" },{ id:4, category_name:"Luxury" }])
    useEffect(()=>{
        return(
            
            setperfum([
                {id:'1',product_img:'./static/product/product1.png' , product_name:"addies" ,product_price:"0" ,product_weight:"50" },

                {id:'6',product_img:'./static/product/product6.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"},
              
                {id:'11',product_img:'./static/product/product11.png' , product_name:"ferrari"  , product_price:"0" , product_weight:"100"},
                {id:'12',product_img:'./static/product/product12.png' , product_name:"gucci"  , product_price:"0" , product_weight:"100"},
                {id:'13',product_img:'./static/product/product13.png' , product_name:"dolce"  , product_price:"0" , product_weight:"100"},
               
                {id:'15',product_img:'./static/product/product15.png' , product_name:"addies"  , product_price:"0" , product_weight:"100"}

            ])
        )
    },[])

    // useEffect(()=>{
    
    // fetch('http://127.0.0.1:8000/addproduct')
    // .then(response => response.json())
    // .then(data =>{ setperfum(data);console.log(data)});
  
    // },[])
    console.log(filterbrand['categorys'])
    const getfilterdata=(event)=>{
       
        setfilterbrand({...filterbrand, 
                    categorys:[
                        ...filterbrand['categorys'],
                        "saidavali"]
                })
         console.log(filterbrand)
        }
    const branddata=brand.map((item , index)=>{
        return(
           <li className="text-capitalize" key={index}>
             <input className="brands" type="checkbox" value={brand[index].brand_name}  onChange={getfilterdata} />   {brand[index].brand_name}
           </li>
        )
      })
      
    const categorydata=category.map((item , index)=>{
        return(
            <li className="text-capitalize" key={index}>
            <input className="categorys" type="checkbox" value={category[index].category_name}  onChange={getfilterdata}  />   {category[index].category_name}
          </li>
          )
    })

 const data=perfum.map((item,index)=>{
     return(

        <div className="col-xl-2 col-md-4 py-4">
        <div className="rounded"> 
        <div  className="text-center p-0 w-100 img_container_blog" >
          <img src={perfum[index].product_img} className="p-0 perfum_img w-100" style={{height:"280px"}}  alt="" />
         
           <div className="sub_conatiner mx-auto mb-4">
             <p className="w-100 product_price"><b>RS 0/-</b></p>
             <button className="btn w-100 view_product"><b>View Product </b></button>
             
           </div>
       
        </div>
       
        
        <div className="text-center text-capitalize">
           <h5 className="pt-2 text-capitalize"><b>{perfum[index].product_name}</b></h5>
          
        </div>
        </div>                 
        </div>
     )
 })

    return(
      <div style={{position:"relative"}}>
        <section className="pt-5 our_product_container effect-cls">
            <div className="row m-0">
                <div className="col-xl-2  pl-5 pr-4 filter_container">
            
                       <p className="p-0 brand_name py-2" >Brand's</p>
                         <ul className=" w-100 m-0 p-0"> 
                         
                            <li>
                            {branddata}
                            </li>
                        </ul>

                                    
            <p className="p-0 brand_name pt-4" >Category's</p>
              <ul className=" w-100 m-0 p-0"> 
              
                 <li>
                 {categorydata}
                 </li>
             </ul>

             <p  className="p-0 brand_name pt-4">weight</p>
                        <ul className=" w-100 m-0 p-0">
                            <li className="text-capitalize"><input className="mt-2" type="checkbox" value="50 Ml" /> 50 Ml  </li>
                            <li className="text-capitalize"><input className="mt-2" type="checkbox" value="100 Ml" /> 100 Ml </li>
                       </ul>
            
                </div>
                    <div className="col-xl-10  ml-auto">
               <div className="row m-0">
                  {data}
                </div>
               </div>
             </div>
        </section>
        </div>
    )
}

export default Perfumeslist;