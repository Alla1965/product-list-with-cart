// import data from "../data.json"
import Card from './Card'

export default function GalleryDessert({ products, handleAddToCart, handleDecrease, handleIncrease }) {
  return (
    <div className="flex flex-col min-w-0 gap-8 xxl:flex-[2]">
        <h1 className="text-[40px] leading-[1.2] text-rose-900 gap-8">
        Desserts</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
         {products.map((item, index) => (
            <Card
             key={index}
             name={item.name}
             category={item.category}
             price={item.price}
             image={item.image} 
             quantity={item.quantity}
             handleAddToCart={handleAddToCart}
             handleDecrease={handleDecrease}
             handleIncrease={handleIncrease}
             />
      
         )) }
        </div>

    </div> 
        ) ; 
    }
   
   

