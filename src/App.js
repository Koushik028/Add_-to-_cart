import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card';
import Cart from './Cart';
import { useState } from 'react';


function App() {
  const [products,setProducts] = useState([
  {
    Id : 1,
    Name : "iphone",
    Price : 47900,
    Image : "https://img6.gadgetsnow.com/gd/images/products/additional/large/G76862_View_1/mobiles/smartphones/apple-iphone-xr-64gb-white-3gb-ram-.jpg"
  },

  {
    Id : 2,
    Name : "iwatch ultra",
    Price : 90000,
    Image :"https://img6.gadgetsnow.com/gd/images/products/additional/large/G392636_View_1/accessories/smart-watches/apple-watch-ultra-gps-cellular-49-mm-retina-oled-display-orange-alpine-loop-large-smart-watch.jpg/270/200"
  },
  {
    Id : 3,
    Name : "iPad",
    Price : 30000,
    Image :"https://img4.gadgetsnow.com/gd/images/products/additional/large/G353349_View_1/mobiles/tablets/apple-ipad-air-2022-5th-gen-10-9-inches-wi-fi-only-with-apple-m1-chip-space-grey-64gb-8gb-ram-.jpg/270/200"
  },
  {
    Id : 4,
    Name : "iphone 11",
    Price : 45000,
    Image :"https://img5.gadgetsnow.com/gd/images/products/additional/large/G121370_View_2/mobiles/smartphones/apple-iphone-11-64-gb-white-4-gb-ram-.jpg/270/200"
  },
  {
    Id : 5,
    Name : "iphone 12",
    Price : 60000,
    Image :"https://img2.gadgetsnow.com/gd/images/products/additional/large/G349926_View_1/mobiles/refurbished-mobiles/refurbished-apple-iphone-12-red-64gb-4gb-ram-.jpg/270/200"
  },
  {
    Id : 6,
    Name : "iphone 13",
    Price : 70000,
    Image :"https://img1.gadgetsnow.com/gd/images/products/additional/large/G206586_View_1/mobiles/smartphones/apple-iphone-13-128-gb-midnight-4-gb-ram-.jpg/270/200"
  }
])
 
  const [cartItems,setCartItems] = useState([])

  let addToCart = (product) => {
   setCartItems([...cartItems,product])

  }

let removeFromCart = (product) => {
  const indexVal = cartItems.findIndex(obj => obj.Id === product.Id);
  cartItems.splice(indexVal,1);
  setCartItems([...cartItems])

}

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
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
                
                </div>
            </div>
        </nav>
      
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Shop in style</h1>
                    <p class="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

    <div className='content'>
    <div className='container_box'> 
     <div className='row '>
      <div className='col-lg-12'>
        <div className='row'>
          {
            products.map((product) => {
              return <Card product={product} addToCart={addToCart} cartItems={cartItems}/>
            })
          }
    
         
      
        </div>
        </div>
      
      </div>
     
      <div className='col-lg-4'>
        <h3>Cart</h3>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>

      </div>

    </div>
    </div> 
   
    
    </>
  );
}

export default App;
