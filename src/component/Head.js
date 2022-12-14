import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
function Head() {
    const[add,setadd]=useState(0)
    const[show,setshow]=useState(true)
    
    const[show1,setshow1]=useState(true)
    
    const[show2,setshow2]=useState(true)
    
    const[show3,setshow3]=useState(true)
  return <>
  <Nav add={add}/>
     <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>
       
        <section className="py-5">
<div className="container px-4 px-lg-5 mt-5">
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        <div className="col mb-5">
            <div className="card h-100">
               
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
               
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">Fancy Product</h5>
                        
                        $40.00 - $80.00
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                   {show? <div className="text-center"><button className="btn btn-outline-dark mt-auto" 
                   onClick={()=>
                    {setadd(add+1)
                        setshow(!show)}
                }>View options</button></div>
                   :<div className="text-center"><button className="btn btn-outline-dark mt-auto"
                    onClick={()=>
                        {setadd(add-1)
                            setshow(!show)
                    }}>hide options</button></div>}
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
                
                <div className="badge bg-dark text-white position-absolute" style={{"top":"0.5rem", "right":"0.5rem"}}>Sale</div>
              
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
              
                <div className="card-body p-4">
                    <div className="text-center">
                       
                        <h5 className="fw-bolder">Special Item</h5>
                        
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {/* <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div> */}
  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

                        </div>
                       
                        <span className="text-muted text-decoration-line-through">$20.00</span>
                        $18.00
                    </div>
                </div>
               
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                {show1? <div className="text-center"><button className="btn btn-outline-dark mt-auto" 
                   onClick={()=>
                    {setadd(add+1)
                        setshow1(!show1)}
                }>View options</button></div>
                   :<div className="text-center"><button className="btn btn-outline-dark mt-auto"
                    onClick={()=>
                        {setadd(add-1)
                            setshow1(!show1)
                    }}>hide options</button></div>}
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
               
                <div className="badge bg-dark text-white position-absolute" style={{"top":"0.5rem", "right":"0.5rem"}}>Sale</div>
               
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                
                <div className="card-body p-4">
                    <div className="text-center">
                      
                        <h5 className="fw-bolder">Sale Item</h5>
                        
                        <span className="text-muted text-decoration-line-through">$50.00</span>
                        $25.00
                    </div>
                </div>
               
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                {show3? <div className="text-center"><button className="btn btn-outline-dark mt-auto" 
                   onClick={()=>
                    {setadd(add+1)
                        setshow3(!show3)}
                }>View options</button></div>
                   :<div className="text-center"><button className="btn btn-outline-dark mt-auto"
                    onClick={()=>
                        {setadd(add-1)
                            setshow3(!show3)
                    }}>hide options</button></div>}
                </div>
            </div>
        </div>
        <div className="col mb-5">
            <div className="card h-100">
              
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                
                <div className="card-body p-4">
                    <div className="text-center">
                        
                        <h5 className="fw-bolder">Popular Item</h5>
                 
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {/* <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div> */}
                             <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </div>
                        {/* <!-- Product price--> */}
                        $40.00
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                {show2? <div className="text-center"><button className="btn btn-outline-dark mt-auto" 
                   onClick={()=>
                    {setadd(add+1)
                        setshow2(!show2)}
                }>View options</button></div>
                   :<div className="text-center"><button className="btn btn-outline-dark mt-auto"
                    onClick={()=>
                        {setadd(add-1)
                            setshow2(!show2)
                    }}>hide options</button></div>}
                </div>
            </div>
        </div>
      
    </div>
</div>
</section>
  </>
}
function Nav({add}) {
    return<>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container px-4 px-lg-5">
                  <a class="navbar-brand" href="#!">Start Bootstrap</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                          <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!">Home</a></li>
                          <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                          <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <li><a class="dropdown-item" href="#!">All Products</a></li>
                                  <li><hr class="dropdown-divider" /></li>
                                  <li><a class="dropdown-item" href="#!">Popular Items</a></li>
                                  <li><a class="dropdown-item" href="#!">New Arrivals</a></li>
                              </ul>
                          </li>
                      </ul>
                      <form class="d-flex">
                          <button class="btn btn-outline-dark" type="submit">
                              <i class="bi-cart-fill me-1"></i>
                              Cart
                              <span class="badge bg-dark text-white ms-1 rounded-pill">{add}</span>
                          </button>
                      </form>
                  </div>
              </div>
          </nav>
    </>
  }

 


export default Head