export function CartItem(props) {
    const { item, increment,deleteItem}= props
    console.log(item);
    return (
        <div className="w-1/2 h-7 flex justify-between items-center">
            <span>{props.item.name}</span>
            <span className="bg-yellow-300 w-7 h-7 text-center">{props.item.count}</span>
            <button onClick={()=>increment(item)}  className="bg-blue-600 w-5 h-5 rounded-md flex justify-center items-center">+</button>
            <button onClick={()=>deleteItem(item)} className="text-red-600"><i class="fa-solid fa-trash"></i></button>
        </div>
    )
}