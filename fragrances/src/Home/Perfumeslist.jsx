import { useEffect, useState } from "react";

const Perfumeslist=()=>{
    const [perfum , setperfum]=useState([]);
    useEffect(()=>{
        return(
            
            setperfum([
                {id:'1',product_img:'https://nstylefragrances.com/wp-content/uploads/2020/07/298.jpg' , product_name:"CHANCE EAU TENDRE Eau de Toilette" },
                {id:'2',product_img:'https://nstylefragrances.com/wp-content/uploads/2020/07/291.jpg' , product_name:"Voyage d’Hermès Deodorant Spray" },
                {id:'3',product_img:'https://nstylefragrances.com/wp-content/uploads/2020/07/290.jpg' , product_name:"Polo Black Deodorant" },
                {id:'4',product_img:'https://nstylefragrances.com/wp-content/uploads/2020/07/289.jpg' , product_name:"Classic – Shower Fresh Deodorant" },
                {id:'5',product_img:'https://nstylefragrances.com/wp-content/uploads/2020/07/288.jpg' , product_name:"CWhite Suede All Over Body Spray" },
                {id:'6',product_img:'https://nstylefragrances.com/wp-content/uploads/2020/07/287.jpg' , product_name:"Colonia Alcohol-Free Deodorant" },

            ])
        )
    },[])

    useEffect(()=>{
    
    fetch('http://127.0.0.1:8000/addproduct')
    .then(response => response.json())
    .then(data =>{ setperfum(data);console.log(data)});
  
    },[])

 const data=perfum.map((item,index)=>{
     return(

        <div className="col-xl-2 col-md-4 py-4">
        <div className="rounded"> 
        <div  className="text-center   w-100" >
          <img src={perfum[index].product_img} className="w-100 perfum_img" alt="" />
        </div>
        <div className="text-warning">
           <h5 className="pt-2 text-white" ><b>{perfum[index].product_name}</b></h5>
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