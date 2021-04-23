function Header(){
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
	<li className="nav-item"><a className="nav-link" href="#"> Home </a></li>
	<li className="nav-item"><a className="nav-link" href="#"> About </a></li>
    {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Shop
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
	<li className="nav-item dropdown">
		<a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Shop  </a>
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
	<li className="nav-item"><a className="nav-link" href="#">Contact </a></li>
	<li className="nav-item"><a className="nav-link" href="#">Wishlist </a></li>
	<li className="nav-item"><a className="nav-link" href="#">Checkout</a></li>
	<li className="nav-item"><a className="nav-link" href="#"> Order-tracking</a></li>
	<li className="nav-item"><a className="nav-link" href="#"> Log-in</a></li>
	<li className="nav-item  cart" ><a className="nav-link" href="cart.html"> Cart<span> 0</span></a></li>

</ul>



  </div> 
</nav>
</div>



     </div>
 )
}
export default Header;