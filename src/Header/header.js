import React from 'react'
import "./header.css"
import Logo from "./giphylogo.png"

export default function header() {
    return (
        <div className="head_container">
            <div className="head_box">
                    <div>
                        <img src={Logo} className="head_logo"/>
                    </div>
                    <div className="head_bar">
                    <div className="head_bord">
                        <a href="" className="head_word"> Reactions </a>
                    </div>
                    <div className="head_bord">
                        <a href="" className="head_word">Entertainment</a>
                    </div>
                    <div className="head_bord">
                    <a href="" className="head_word">Sports </a>
                    </div>
                    <div className="head_bord">
                    <a href="" className="head_word">Stickers </a>
                    </div>
                    <div className="head_bord">
                    <a href="" className="head_word">Artists</a> 
                    </div>
                    <div className="head_men">
                        <a href="" className="head_word"><i class="fas fa-ellipsis-v"></i></a>
                    </div>

                    </div>
                    <div className="head_ucbox">
                    <a href="" className="head_upcr">Upload</a>
                    </div>
                    <div className="head_ucbox">
                    <a href="" className="head_upcr">Create</a>
                    </div>
                    <div>
                    <button className="head_log"><a href="" className="head_word"><span className="head_user"><i className="fas fa-user"></i></span>
                        Log in</a></button>
                    </div>
            </div>
            <div className="head_search">
                <input type="text"></input>
            </div>

        </div>
    )
}
