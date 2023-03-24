import { useState } from "react";
import axios from 'axios'
import './GalleryItem.css'

function GalleryItem({item, render}) {
    // console.log('GalleryItem is running');

    // state to track likes
    const [likeCounter, setLikeCounter] = useState(0);

    // state to track pic vs description
    const [picVis, setPicVis] = useState(true);

    // function that swaps the boolean value for rendering
    function toggleVis() {
        // console.log('picture was clicked', picVis);
        setPicVis(!picVis);
    }

    // Client-Side PUT
    const addLike = (id) => {
        axios({
        method: 'PUT',
        url: `/gallery/like/${id}`
        }).then((response) => {
        console.log('Like added', response);
        render();
        }).catch((error) => {
        console.log('Error changing likeCounter:', error);
        })
    }

    return (
        <>
            <div key={item.id} className="galleryItemDiv">
                {picVis ? 
                    <img src={item.path} onClick={toggleVis} /> :
                    <div onClick={toggleVis}>{item.description}</div>
                }
                <button onClick={() => addLike(item.id)}>Likes {item.likes}</button>
                {item.likes === 0 ?
                    <p>No people like this 😭</p> :
                    <p>{item.likes} people like this!</p>
                }
            </div>
        </>
    )
}

export default GalleryItem