const fetch = require("node-fetch");
const createDOMPurify  = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

module.exports = {
    async allCoinsWithAPI (_, response) { 
        try {
            const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const data = await res.json();
            response.render('allcoins', {coins: data})
        } catch (err) {
            console.error(err)
        } 
    },

    async allCoinsTable (_, response)  {
        try {
            const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false'
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const data = await res.json();
            response.render('allcoins-table', {coins: data})
        } catch (err) {
            console.error(err)
        } 
    },
    
    async getCoin (request, response) {
        const coinId = request.params.id;
        try {
            const url = `https://api.coingecko.com/api/v3/coins/${coinId}`
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const data = await res.json();
           
            const cleanDescription = DOMPurify.sanitize(data.description.en, {FORBID_TAGS: ['a']});
    
            response.render('coin', {coin: data, description: cleanDescription})
        } catch (err) {
            console.error(err)
        }
    },

};