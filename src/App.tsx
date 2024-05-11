import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import Navbar1 from "./component/Navbar1";
import Navbar from "./component/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar1></Navbar1>
            {/*<Navbar></Navbar>*/}
            <h1>Web Thương mại điện tử - Front end - Project cuối kỳ</h1>
            <Hello
                name="Nguyễn Duy Đông"
                mssv="21130318"
            />
            <Hello
                name="Nguyễn Quốc Khánh"
                mssv="21130397"
            />
            <Hello
                name="Đinh Quang Linh"
                mssv="21130421"
            />
        </div>
    );
}

export default App;
