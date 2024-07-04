export function ResetButton(props) {
  const  {items,handleReset} = props;
    return <button className="h-15 w-25 bg-yellow-400 rounded-md" onClick={()=>handleReset(items)}>RESET ALL COUNTS</button>
}