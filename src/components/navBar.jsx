export function NavBar(props) {
    return (
        <nav className=" vw-100 h-20 flex justify-between bg-slate-500 items-center">
            <div className=" text-3xl">ITI Resturant</div>
            <div className="text-3xl mr-10 relative"><i class="fa-solid fa-cart-shopping"></i>{props.num > 0 ? <span className="w-5 h-5 flex justify-center items-center rounded-md absolute right-0 top-0 bg-sky-500 text-sm">{props.num}</span> : false}</div>
        </nav>
    )
}