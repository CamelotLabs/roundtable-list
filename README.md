# Camelot DEX - RoundTable protocols list

This GitHub repo contains the protocols list of Round Table members.

## Adding your protocol

To add your protocol to the Round Table list, you should create your entry and submit a PR with it. 

**1. Fork this repo**

**2. (Optional) Add your assets in src/assets/your_protocol/.**

*The URI logo path in "blockchain".json will need to be set as BASE_URL/assets/your_protocol/your_asset.svg (cf example-chain.json)*

**3. Add your protocol in the relevant "blockchain".json file in src/protocols/.**

**4. Provide the following required information for your protocol.**

- chainId (number)
- id (string): must be unique, will be used as a slug on https://app.camelot.exchange/protocols/id
- logo (string): url, small format square img, will be used in the project list, svg preferred
- cover (string): url, large format img, will be used on the main protocol page as a cover image, svg preferred
- tagline (string): one short sentence
- tags (array): up to 3
- description (string): up to 600 characters
- tokens (array): list of the addresses of all your token contracts. The first one will be considered as your "main" asset
- website (string): link to your app

**5. Provide the following optional links for your protocol.**

- twitter (string)
- discord (string)
- docs (string)
- medium (string)
- github (string)
- telegram (string)
- defillama (string)

### Disclaimer

Note filing an issue does not guarantee addition to the RoundTable list, 
and is reserved to already approved members only.
