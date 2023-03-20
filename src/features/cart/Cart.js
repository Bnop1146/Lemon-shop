import React from 'react'
import { Link } from 'react-router-dom'
import './cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, clearCart, decreaseCart, removeFromCart } from './cartSlice'


function Cart() {
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    }


    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart({ id: cartItem.idDrink }));
    };


    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }

    
    const handleClearCart = () => {
        dispatch(clearCart());
    }
  
    return (
      <div className="">
        <h1 className='font-bold flex flex-wrap justify-center mt-24 mb-16 text-6xl '>Shopping cart</h1>
        {cart.cartItems.length === 0 ? (
          <div className="flex justify-center mt-32">
          <Link to="/" className='block text-white text-center bg-primary-secondary rounded hover:bg-primary-darktext '>
            <div className=' p-10 rounded-lg' >
              <h1 className='text-white text-center font-bold text-3xl mb-4'>Your cart is empty</h1>
              <span className='text-white text-center font-bold text-2xl mb-4'>Start shopping</span>
            </div>
          </Link>
          </div>
        ) : (

          <div>
            <div className="flex flex-wrap justify-center mx-auto px-96 xxl:px-96 py-2.5">
              {cart.cartItems?.map(cartItem => (
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-12" key={cartItem.idDrink}>
                  <div className="bg-primary-secondary p-4 rounded-lg shadow-md h-full">
                    <div className='flex justify-between mb-4'>
                      <h1 className='font-bold text-3xl '>{cartItem.strDrink}</h1>
                      <div className=" font-bold text-2xl">
                        {parseInt(cartItem.idDrink.substring(0, 2))} $ usd
                      </div>
                    </div>
                    <img src={cartItem.strDrinkThumb} alt={cartItem.strDrink} className="p-2 rounded" />
                    <div className="flex justify-between items-center mt-4 mb-4 py-2 px-4  bg-primary-darktext rounded text-3xl text-white">
                      <button className='bg-primary-darktext  px-4 font-bold  ' onClick={() => handleDecreaseCart(cartItem)}>-</button> 
                      <div className="font-bold  underline-offset-4 ">{cartItem.cartQuantity}</div>
                      <button className='bg-primary-darktext  px-4  font-bold  ' onClick={() =>handleIncreaseCart(cartItem)}>+</button>
                    </div>
                    <div className='flex justify-between items-center p-2  '>
                      <span className='font-bold mr-2'>Total for item
                      <div className="font-bold underline text-lg mr-36 ">
                        {parseInt(cartItem.idDrink.substring(0, 2)) * cartItem.cartQuantity} $
                      </div>
                      </span>
                      <button className='bg-red-500 text-white p-4 rounded font-extrabold ' onClick={() => handleRemoveFromCart(cartItem)}> Remove all items </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
  
            <div className='bg-white m-32 px-32 py-10 rounded-lg '>
                <div className='text-2xl font-bold  flex justify-start items-center'>
                  <span className='mr-4 font-black flex flex-wrap' >Total cost </span>
                    <span className='font-semibold text-2xl underline'>
                      {cart.cartItems.reduce(
                        (total, cartItem) =>
                          total +
                          parseFloat(cartItem.idDrink.substring(0, 2)) *
                          cartItem.cartQuantity,
                        0).toFixed(0)} $ usd
                    </span>
                </div>
                
              
              <div className='flex items-center justify-end mt-4 font-bold text-xl'>
                <div className=' mr-2 '>
                  <button className='bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-md' onClick={() => handleClearCart()} > Remove all</button>
                </div>

                
                <div className="bg-primary-darktext  text-white py-4 px-6 rounded-md ">
                  <Link to="/"><span>← Continue to fill up</span></Link>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
  



export default Cart