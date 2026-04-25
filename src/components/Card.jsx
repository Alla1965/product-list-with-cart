export default function Card(props) {

  return (
    
       <div className="flex flex-col gap-[38px] z-10 text-rose-900 font-semibold">

      <div className="relative ">  
          <picture className="z-10">
            <source media="(min-width: 1440px)" srcSet={props.image.desktop} />
            <source media="(min-width: 768px)" srcSet={props.image.tablet} />
            <img src={props.image.mobile} alt={props.name} />
          </picture>
          
          
          {props.quantity === 0  ?(
          <button  onClick={() => props.handleAddToCart(props.name)} 
                    className="flex absolute left-1/2 -translate-x-1/2 gap-2 text-sm items-center justify-center
                              bg-white py-3 px-[27.5px] -bottom-[22px] rounded-full 
                              border border-rose-400 z-20 whitespace-nowrap">

            <img 
             src="public/images/icon-add-to-cart.svg" 
             alt="Image cart" />

            Add to Cart
          </button>
          ):(
            <div className="absolute left-1/2 -translate-x-1/2 w-40 -bottom-[22px] 
                            rounded-full flex justify-between p-3 bg-red text-white">

              <button className="flex items-center justify-center w-5 h-5 
                                 rounded-full border-2 border-white 
                                 text-sm leading-none transition
                                  hover:bg-white hover:text-red hover:cursor-pointer"
                      onClick={() => props.handleDecrease(props.name)}> −
               </button>  

              <p>{props.quantity}</p>

              <button className="flex items-center justify-center w-5 h-5 
                                 rounded-full border-2 border-white transition
                                 text-sm leading-none
                                  hover:bg-white hover:text-red hover:cursor-pointer"
                      onClick={() => props.handleIncrease(props.name)}> +
               </button>   
            </div>
          )}


      </div>

      <div className="gap-1">
         <p className="text-rose-500 text-sm font-normal">{props.category} </p>
         <p className=" text-base ">{props.name} </p>
         <p className="text-red text-base ">${props.price.toFixed(2)} </p>
      </div>

      </div>
      
  )
  
}