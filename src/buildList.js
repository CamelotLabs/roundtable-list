require('dotenv').config()
const arbitrumNova = require("./protocols/arbitrum-nova.json");
const arbitrumOne = require("./protocols/arbitrum-one.json");

const BASE_URL = process.env.BASE_URL || "https://roundtable-list.camelot.exchange"

module.exports = function buildList() {
    const protocols = [...arbitrumNova, ...arbitrumOne]
    const processedProtocols = JSON.parse(JSON.stringify(protocols).replace(/BASE_URL/g, BASE_URL))

    return {
        name: "Camelot RoundTable",
        timestamp: new Date().toISOString(),
        protocols: processedProtocols
            // sort them by symbol for easy readability
            .sort((p1, p2) => {
                if (p1.chainId === p2.chainId) {
                    return p1.name.toLowerCase() < p2.name.toLowerCase() ? -1 : 1;
                }
                return p1.chainId < p2.chainId ? -1 : 1;
            }),
    };
};