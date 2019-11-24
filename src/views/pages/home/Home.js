import React from 'react';
import store from "../../../mock/store";
import Photos from "../../components/Photos";
import SearchBar from "../../components/SearchBar";

function Home(){
    return (
        <div className="Home">
            <div className="main-visual">
                <div className="main-txt">
                    <p className="t1">Unsplash</p>
                    <p className="t2">The internet’s source of freely usable images.</p>
                    <p className="t2">Powered by creators everywhere.</p>
                    <SearchBar/>
                    <p className="sub">
                        <span className="bold">Trending: </span>
                        flower, wallpapers, backgrounds, happy, love
                    </p>
                </div>
                <div className="bottom-txt">
                    <div>Photo of the Day <span>by</span>Martin Schmidli</div>
                    <div><span>Read more about the</span>Unsplash License</div>
                    <div>
                        <img src="https://cdn4.buysellads.net/uu/7/41629/1545953812-1543526594-transparent_squarespace.png" alt=""/>
                        <p>Create your website today</p>
                    </div>
                </div>
            </div>
            <Photos photos={store.state.photos}/>
        </div>
    )
}

export default Home;