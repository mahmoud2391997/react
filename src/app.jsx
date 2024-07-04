import { Cart } from "./components/cart";
import {useState} from "react";
import { ResetButton } from "./components/resetButton";
import {NavBar} from './components/navBar.jsx'


export function App() {

const [items,setItems] = useState([{name:"burger",count:0},{name:"water",count:0},{name:"fries",count:0},{name:"pizza",count:0}]);
function increment(item) {
 const newArr = [...items];
   let index = newArr.findIndex((ele)=>ele.name === item.name);
   (newArr[index].count) += 1;
 setItems(newArr)
}

  function deleteItem(item) {
  let newArr = [...items];
  newArr = newArr.filter((ele)=>ele.name !== item.name);
  setItems(newArr)
  
}
function handleReset(items) {
  let newArr = [...items];
  newArr.forEach(ele=>{
    ele.count = 0
  });
  setItems(newArr)
}
  return (<>
  <NavBar num={items.length}/>
<Cart items={items} handleIncrement={increment}  handleDelete={deleteItem}  />
 {items.length > 0 ?  <ResetButton items={items} handleReset={handleReset}/> : <h2>No Items In The Cart!</h2>}
  </>

  )
}
