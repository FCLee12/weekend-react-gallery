import { useState } from "react";
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({list}) {
    console.log('GalleryList is running');

    return (
        <>
                {list.map((pic) => 
                (
                    <GalleryItem item={pic} />
                ))}
        </>
    )
}

export default GalleryList;