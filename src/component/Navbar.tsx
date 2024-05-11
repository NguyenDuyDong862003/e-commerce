import './Navbar.css';

function Navbar(props: any) {
    return (
        <div className="header">
            <div className="logo">Logo</div>
            <div className="searchBar">
                <input placeholder="Search"/>
                <div className="btnSearch">O</div>
            </div>
            <div className="card">Card</div>
        </div>
    )
}

export default Navbar;