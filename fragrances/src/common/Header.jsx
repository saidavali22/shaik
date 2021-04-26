import { useState } from "react";
function Header(){
const [brand , setbrand]=useState([
  {id:1,brand_name:"addies" , value:"addies"},
  {id:2,brand_name:"Dolce  Gabbana" , value:"dolce_gabbana"},
  {id:3,brand_name:"Diesel" , value:"diesel"},
  {id:4,brand_name:"Ferrari" , value:"ferrari"},
  {id:5,brand_name:"Giorgio-armani" , value:"giorgio_armani"},
  {id:6,brand_name:"Gucci" , value:"gucci"},
  {id:6,brand_name:"Boss" , value:"boss"},
  {id:7,brand_name:"Lactose" , value:"bactose"}
]); 
 
const branddata=brand.map((item , index)=>{
  return(
     <li>Adidas</li>
  )
})
 return(
     <div className="bg-dark text-white">
       
<div className="container-fluid">
<div className="mx-auto text-center">		
		<a href="#">
			<img src="./static/Logo/new_logo.png" className="p-0"  alt="Instyle Fragrances" style={{width:"250px",height:"170px"}} />
		</a>
	</div>
<nav class="navbar navbar-header navbar-expand-lg navbar-dark ">

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

<ul className="navbar-nav mx-auto">
	<li className="nav-item nav-link"> Home  </li>
	<li className="nav-item nav-link"> About </li>

	<li className="nav-item dropdown">
		<div className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Shop  </div>
	    <div className="dropdown-menu dropdown-large">
           	<div className="row m-0" style={{width:"500px"}}>
                <div class="col-md-6">
                    	<h6 className="title">By Brands</h6>
                        <ul className="list-unstyled">

                            <li><a href="#">Adidas</a></li>
                            <li><a href="#">Dolce  Gabbana</a></li>
                            <li><a href="#">Diesel</a></li>
                            <li><a href="#">Ferrari</a></li>
                            <li><a href="#">Giorgio-armani</a></li>
							<li><a href="#">Gucci</a></li>
							<li><a href="#">Boss</a></li>
							<li><a href="#">Lactose</a></li>
                        </ul>
                </div>
                <div className="col-md-6">
                    <h6 className="title">CATEGORY</h6>
                        <ul className="list-unstyled">
                      
                            <li><a href="#">Mens</a></li>
                            <li><a href="#">Womens</a></li>
                            <li><a href="#">Luxury</a></li>
                            <li><a href="#">Kids</a></li>
                           
                        </ul>
                </div>
            </div>
        </div> 
	</li>


	<li className="nav-item dropdown">
		<div className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Filter  </div>
	    <div className="dropdown-menu dropdown-large " style={{width:"800px",left:"-250px"}}>
           	<div className="row m-0">
                <div class="col-md-3">
                    	<h6 className="title">By Brands</h6>
                        <ul className="list-unstyled">
                           {branddata}
                            <li>Dolce  Gabbana</li>
                            <li>Diesel</li>
                            <li>Ferrari</li>
                            <li>Giorgio-armani</li>
						              	<li>Gucci</li>
						              	<li>Boss</li>
						              	<li>Lactose</li>
                        </ul>
                </div>
                <div className="col-md-3">
                    <h6 className="title">CATEGORY</h6>
                        <ul className="list-unstyled">
                      
                            <li>Mens</li>
                            <li>Womens</li>
                            <li>Luxury</li>
                            <li>Kids</li>
                           
                        </ul>
                </div>
                <div className="col-md-3">
                    <h6 className="title">Price</h6>
                        <ul className="list-unstyled">
                      
                            <li>Low to High</li>
                            <li>High to Low</li>
                           
                        </ul>
                </div>
                <div className="col-md-3">
                    <h6 className="title">weight</h6>
                        <ul className="list-unstyled">
                      
                            <li>10 Ml to 40 Ml</li>
                            <li>21 Ml to 30 Ml</li>
                            <li>31 Ml to 40 Ml</li>
                            <li>41 Ml to 50 Ml</li>
                           
                        </ul>
                </div>
            </div>
        </div> 
	</li>

	<li className="nav-item  cart" ><a className="nav-link" href="cart.html"> Cart<span> 0</span></a></li>


</ul>



  </div> 
</nav>
</div>



     </div>
 )
}
export default Header;