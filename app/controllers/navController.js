const fetch = require("node-fetch");

module.exports = {
    async getTrending (request, response)  {
        try {
            const url = 'https://api.coingecko.com/api/v3/search/trending'
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const coins = await res.json();
            response.render('trends', coins)
        } catch (err) {
            console.error(err)
        }
    },

    async allPlatforms (request, response) {
        try {
            const url = 'https://api.coingecko.com/api/v3/finance_platforms'
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const data = await res.json();
            response.render('platforms', {platforms: data});
        } catch (err) {
            console.error(err)
        }
    },
}