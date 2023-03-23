// const galleryItems = [
//     { id: 1, path: 'images/goat_small.jpg', description: 'Photo of a goat taken at Glacier National Park.', likes: 0 }
// ];

const pg = require("pg");

const pool = new pg.Pool ({
    database: "react_gallery",
    host: "localhost",
    port:5432
})

module.exports = pool;

// module.exports = galleryItems;