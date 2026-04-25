import CartOrder from './CartOrder.jsx'
import OrderModal from './OrderModal.jsx'
import { useState } from 'react';

export default function YouCard(props) {
const [isModalOpen, setIsModalOpen] = useState(false)
console.log(props.setIsModalOpen)
    const cartItems = props.products.filter((item) => item.quantity > 0);
console.log(cartItems);

    const orderTotal = cartItems.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0);
console.log(orderTotal);

  return (
    <div className="flex flex-col justify-start gap-6 p-6 text-2xl
     bg-white text-red xxl:flex-1 min-w-0"> 

     <p className="">Your Cart ({props.totalItems})</p>

    {props.totalItems === 0 ? (
     <div className="flex flex-col justify-center items-center gap-4 p-6">
        <img src="/images/illustration-empty-cart.svg" alt="" />
        <p className="text-sm text-rose-500 font-semibold">Your added items will appear here</p>
     </div>
   ) : (
  <div>
   
{cartItems.map((item, index) => (
   <div className='flex flex-col gap-4'>
            <CartOrder
             key={index}
             name={item.name}
             price={item.price}
             quantity={item.quantity}
              onRemove={props.onRemove}
             />
       <hr />
      </div> 
         )) }
        
    <div className='flex justify-between text-rose-900 py-6'>
        <p className='font-normal text-sm'>Order Total</p>
        <p className='text-2xl'>${orderTotal.toFixed(2)}</p>
    </div>  

    <div className='flex justify-center gap-2 py-4 bg-rose-50 text-sm text-rose-900 mb-6'>
        <img src="/images/icon-carbon-neutral.svg" alt="Image carbon neutral" />
        <p className='font-normal'>This is a <span className='font-semibold'>carbon-neutral</span> delivery</p>
    </div>

    <button onClick={() => setIsModalOpen(true)}
            className='bg-red w-full text-white font-semibold 
                       text-base rounded-full py-4'>
                        Confirm Order
              
    </button>
         {isModalOpen && (
            <OrderModal onClose={() =>  setIsModalOpen(false)}
                        onResetOrder={props.onResetOrder}
                        cartItems={cartItems} 
                        orderTotal={orderTotal}
                        />
)} 

   </div>

    )}
  
     
    </div>
  )}