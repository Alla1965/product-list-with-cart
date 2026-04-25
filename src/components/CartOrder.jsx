export default function CardOrder(props) {
console.log(props);

  return (
    <section className="flex justify-between items-center font-semibold text-sm mt-4">
        <div className="flex flex-col gap-2 ">
            <p className="text-sm  text-rose-900">{props.name}</p>
             <div className="flex gap-2">
              <p className="text-red"> {props.quantity}×</p>
              <p className="font-normal text-rose-500"> @${props.price.toFixed(2)}</p>
              <p className=" text-rose-500">${(props.quantity * props.price).toFixed(2)}</p>
             </div>

        </div>
        <button onClick={() => props.onRemove(props.name)}
            className="flex items-center justify-center w-5 h-5 rounded-full
             border border-rose-400 text-rose-400 leading-none transition
             text-base hover:cursor-pointer
             hover:border-rose-900 hover:text-rose-900"
>×
        </button>       
    </section>
  )}