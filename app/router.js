const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');
const searchController = require('./controllers/searchController');
const navController = require('./controllers/navController');

router.get('/', mainController.allCoinsWithAPI);
router.get('/coin/:id', mainController.getCoin);
router.get('/table', mainController.allCoinsTable);

router.get('/search', searchController.searchedCoin);

router.get('/trends', navController.getTrending);
router.get('/platforms', navController.allPlatforms);

router.use((_, response) => {
    response.status(404).render('notfound');
});

module.exports = router;