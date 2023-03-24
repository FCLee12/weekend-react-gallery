import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({list, render}) {
    console.log('GalleryList is running');

    return (
        <>
                {list.map((pic) => 
                (
                    <GalleryItem item={pic} render={render}/>
                ))}
        </>
    )
}

export default GalleryList;