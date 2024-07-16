import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export function SearchBar() {
    const [strSearch, setStrSearch] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <div className="container">
                <div className="input-group rounded gap-1">
                    <input type="search" className="form-control rounded" placeholder="Search"
                           value={strSearch}
                           onChange={
                               (event) => {
                                   setStrSearch(event.target.value)
                               }
                           }
                    />
                    <span className="input-group-text rounded border-0"
                          onClick={() => {
                              if (strSearch.trim() !== '') {
                                  navigate("/search/" + strSearch);
                              }
                          }}
                    >
                        <i className="fas fa-search"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}