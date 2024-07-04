import { CartItem } from "./cart_item";

export function Cart(props) {
    
    const {items, handleIncrement , handleDelete} = props;
    console.log(items);
    return items.map((item)=>{
        console.log(item);
            return <CartItem  item={item} increment = {handleIncrement} deleteItem={handleDelete} key={item.name}/>
        }     )
}