const fetch = require("node-fetch");

module.exports = {
    async searchedCoin (request, response) {
        const searchQuery = request.query.search.trim();
        try {
            const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false';
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Error, request failed');
            };
            const coins = await res.json();

            const filteredCrypto = coins.filter((coin) =>
                coin.name.toLowerCase().includes(searchQuery.toLowerCase()));

            if (filteredCrypto.length === 0) {
                response.status(404).render('notfound');
            } else response.render('search', {coins: filteredCrypto, searchQuery});

        } catch (err) {
            console.error(err)
        }
    },
};