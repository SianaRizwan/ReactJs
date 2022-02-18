import "./style.css"
function Nav(props) {
    return ( <div className="nav">
        <h1>Products</h1>
        <div>
            <a href="/" >Home</a>
            <a href="/About" >About</a>
            <a href="/Contact" >Contact</a>
        </div>

    </div> );
}

export default Nav;