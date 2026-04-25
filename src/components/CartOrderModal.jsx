export default function CardOrderModal(props) {
  return (
    <section className="flex justify-between items-center font-semibold text-sm ">

        <div className="flex gap-4">

          <img className="w-12 h-12 font-semibold"
               src={props.image} alt="" />

            <div className="flex flex-col gap-2 text-sm ">
               <p className="text-rose-900">{props.name}</p>


             <div className="flex gap-2">
                 <p className="text-red"> {props.quantity}×</p>
                 <p className="font-normal text-rose-500"> @${props.price.toFixed(2)}</p>
             </div>

            </div>
            
           
        </div>
            <p className=" text-rose-900 text-base">${(props.quantity * props.price).toFixed(2)}</p>     
    </section>
  )
}