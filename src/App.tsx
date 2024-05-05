import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from "./component/Hello";
import MenuBar from "./component/MenuBar";

function App() {
    return (
        <div className="App">
            <MenuBar></MenuBar>
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
