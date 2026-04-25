import CartOrderModal from './CartOrderModal.jsx'
export default function OrderModal({ cartItems, orderTotal, onClose, onResetOrder }) {


    return(

    <div className="fixed inset-0 bg-black/50 z-50 flex pt-24 justify-center
                     md:items-center  "> 
       
          <div className="bg-white rounded-t-[12px]xl p-6 w-full flex flex-col gap-6
                          md:pb-10 md:px-10 md:w-[688px] md:rounded-xl xxl:w-[592px] "> 
             <div>
                <img className="w-12 h-12 mb-6"
                               src="/images/icon-order-confirmed.svg" 
                               alt="Confirmed image" />
                  <h2 className="text-rose-900 text-[40px]">Order Confirmed</h2>   
                  <p className="text-rose-500 text-base font-normal">We hope you enjoy your food! </p>          
             </div>


  
  <div className='bg-rose-50 p-6'>
   
{cartItems.map((item, index) => (
   <div className='flex flex-col gap-4'>
            <CartOrderModal
             key={index}
             name={item.name}
             price={item.price}
             image={item.image.thumbnail}
             quantity={item.quantity}
            
             />
       <hr className='m-4 w-full text-red-100'/>
      </div> 
         )) }
        
    <div className='flex justify-between text-rose-900 py-6'>
        <p className='font-normal text-sm'>Order Total</p>
        <p className='text-2xl'>${orderTotal.toFixed(2)}</p>
    </div>  

   </div>

             <button className="w-full flex justify-center py-4 font-semibold
                                text-white bg-red text-base rounded-full"
                    onClick={() => {
                     onResetOrder()
                     onClose()
                   }}>  Start New Order
             </button>
    
         </div>
        
    </div>
    


    )
}