import { useState } from "react";

function GalleryItem({item}) {
    console.log('GalleryItem is running');

    // state to track likes
    const [likeCounter, setLikeCounter] = useState(0);

    // state to track pic vs description
    const [picVis, setPicVis] = useState(true);

    // function that swaps the boolean value for rendering
    function toggleVis() {
        // console.log('picture was clicked', picVis);
        setPicVis(!picVis);
    }

    return (
        <>
                <div key={item.id}>
                    {picVis ? 
                        <img src={item.path} onClick={toggleVis} /> :
                        <div onClick={toggleVis}>{item.description}</div>
                    }
                    <button>Likes {item.likes}</button>
                </div>
        </>
    )
}

export default GalleryItem