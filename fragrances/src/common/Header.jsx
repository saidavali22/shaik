
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
	<li className="nav-item nav-link"> Home  </li>
	<li className="nav-item nav-link"> About </li>
    <li className="nav-item dropdown">
		<div className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"> Filter  </div>
	    <div className="dropdown-menu dropdown-large " style={{width:"800px",left:"-250px"}}>
           	<div className="row m-0">
                <div class="col-md-3">
                    	<h6 className="title">By Brands</h6>
                        <ul className="list-unstyled">
                          
                        </ul>
                </div>
                <div className="col-md-3">
                    <h6 className="title">CATEGORY</h6>
                        <ul className="list-unstyled">
                        
                        </ul>
                </div>
                <div className="col-md-3">
                    <h6 className="title">Price</h6>
                        <ul className="list-unstyled">
                            <li className="text-capitalize"><input className="mt-2" type="checkbox" value="Low to High" />  Low to High </li>
                            <li className="text-capitalize"><input className="mt-2" type="checkbox" value="High to Low" /> High to Low </li>
                        </ul>
                </div>
                <div className="col-md-3">
                    <h6 className="title">weight</h6>
                        <ul className="list-unstyled">
                            <li className="text-capitalize"><input className="mt-2" type="checkbox" value="50 Ml" /> 50 Ml  </li>
                            <li className="text-capitalize"><input className="mt-2" type="checkbox" value="100 Ml" /> 100 Ml </li>
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