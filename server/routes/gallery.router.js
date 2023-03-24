const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// original Base Mode
// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); 
// END PUT Route



// PUT
router.put('/like/:id', (req, res) => {
    const idToChange = req.params.id;
    console.log( 'Id of galleryItem to add like:', idToChange );

    const sqlText = `UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;`;

    pool.query(sqlText, [idToChange])
    .then((result) => {
        console.log('Success! Like added for id:', idToChange);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error with adding like for id:', idToChange);
        res.sendStatus(500);
    })
    
});

// GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// });
// END GET Route

// Stretch GET Route
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "gallery" ORDER BY "id" ASC;';
    console.log("Submitting Query to DB:", queryText);
  
    pool.query(queryText)
      .then((result) => {
        console.log('All my result info:', result);
        res.send(result.rows);
      })
      .catch((err) => {
        console.log(`Error making query ${queryText}`, err)
        res.sendStatus(500);
      });
})

module.exports = router;