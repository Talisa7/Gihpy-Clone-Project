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

                    <div className="head_wrap">

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

                    </div>
                    
                    <div className="head_men" id="head_menu">
                        <a href="" className="head_word"><i class="fas fa-ellipsis-v"></i></a>
                   
                        <div className="head_submenu">
                            <div className="sub_cat">
                                <p>Categories</p>
                                <p>GIPHY Studios</p>
                                <p>Animals</p>
                                <p>Actions</p>
                                <p>Anime</p>
                                <p>Cartoons</p>
                                <p>Emotions</p>
                                <p>Food/Drink</p>
                                <p>Gaming</p>
                                <p>Holidays/Greetings</p>
                                <p>Memes</p>
                                <p>Clips</p>
                            </div>
                            <div className="sub_stick">
                                <p>Stickers</p>
                                <p>Originals</p>
                                <p>Trending</p>
                                <p>Reactions</p>
                                <p>Packs</p>
                            </div>
                            <div className="sub_apps">
                                <p>APPS</p>
                                <p>GIPHY</p>
                                <p>GIPHY World</p>
                                <p>GIPHY Capture</p>
                            </div>
                            <div className="sub_about">
                                <p>About</p>
                                <p>Team</p>
                                <p>Engineering Blog</p>
                                <p>GIPHY Arts</p>
                                <p>Studios</p>
                                <p>Developers</p>                                
                                <p>Labs</p>                                
                                <p>FAQ</p>                          
                                <p>Support</p> 
                                <p>Jobs</p>
                                <p>DMCA</p>
                                <p>Guidlines</p>
                            </div>                  
                        </div>
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
                <input type="text" className="head_input"></input>
                <div ><button className="head_serbut"><i className="fas fa-search fa-2x"></i></button></div>
            </div>

        </div>
    )
}
