function Card({product,addToCart,cartItems}){
    return <div className='col-lg-4 border mt-2 p-2'>
    <div className='row'>
      <div className='col-lg-12'>
      <img className='image-fluid' src={product.Image}/>

        </div>
        <div className='col-lg-12'>
          <h3>{product.Name}</h3>
          <h6>Price {product.Price}</h6>
          <button disabled={cartItems.some(obj => obj.Id === product.Id)} onClick={() => {
            addToCart(product)
          }} className='btn btn-sm btn-primary'>
           {
            cartItems.some(obj => obj.Id === product.Id) ? 'Added to cart' : 'Add to cart'
           }
          </button>
      </div>
    </div>

  </div> 

}
export default Card