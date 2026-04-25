import data from "./data.json"
import { useState } from "react";
import './App.css'
import GalleryDessert from './components/GalleryDessert'
import YourCard from './components/YourCard'

function App() {
  
const [products, setProducts] = useState(
  data.map((item) => ({
    ...item,
    quantity: 0,
  }))
);

const totalItems = products.reduce((sum, item) => sum + item.quantity, 0);


const  handleAddToCart=(name)=>{
   setProducts(
    products.map((item) =>
      item.name === name
        ? { ...item, quantity: 1 }
        : item
    )
  );
  
  }
const  handleDecrease=(name)=>{
  setProducts(
    products.map((item) =>
      item.name === name
        ? { ...item, quantity: item.quantity-1 }
        : item
    )
  );

}

const  handleIncrease=(name)=>{
  setProducts(
    products.map((item) =>
      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
  }

  function handleRemoveItem(name) {
  setProducts(
    products.map((item) =>
      item.name === name
        ? { ...item, quantity: 0 }
        : item
    )
  );
}

const handleResetOrder = () => {
  setProducts(
    products.map(item => ({ ...item, quantity: 0 }))
  )
}
 
  return (
  <main className='flex flex-col w-full p-6 gap-8 md:p-10 bg-rose-50
                 xxl:px-28  xxl:py-[88px] xxl:flex-row xxl:items-start'>

            <GalleryDessert products={products}
                            handleAddToCart={handleAddToCart}
                            handleDecrease={handleDecrease}
                            handleIncrease={handleIncrease}
                             />
            <YourCard totalItems={totalItems}
                      products={products} 
                      onRemove={handleRemoveItem}
                      onResetOrder={handleResetOrder}
                     
                      />

  </main>
    
  )
}

export default App
