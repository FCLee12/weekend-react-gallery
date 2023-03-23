import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  const [galleryList, setGalleryList] = useState([]);

  function getGallery() {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      console.log('this is response.data', response.data);
      // setGalleryList sets state galleryList equal to response.data
      setGalleryList(response.data);
    }).catch((err) => {
      console.log('GET failed, error:', err);
    })
  }

  // initial populating the DOM
  useEffect( () => {
    getGallery();
  }, [])

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList list={galleryList} />
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
