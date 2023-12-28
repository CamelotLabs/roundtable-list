const packageJson = require('../package.json');
const schema = require('../src/roundtablelist.schema.json');
const { expect } = require('chai');
const { getAddress } = require('@ethersproject/address');
const Ajv = require('ajv');
const buildList = require('../src/buildList');

const ajv = new Ajv({ allErrors: true, format: 'full' });
const validator = ajv.compile(schema);
let protocolsList;

before(async function () {
  protocolsList = await buildList();
});

describe('buildList', () => {

  it('schema is valid', () => {
    expect(validator(protocolsList)).to.equal(true);
  });

  it('contains no duplicate ids', () => {
    const map = {};
    for (let protocol of protocolsList.protocols) {
      const key = `${protocol.chainId}-${protocol.id.toLowerCase()}`;
      expect(typeof map[key])
          .to.equal('undefined', `duplicate name: ${protocol.id}`);
      map[key] = true;
    }
  })

  it('contains no duplicate names', () => {
    const map = {};
    for (let protocol of protocolsList.protocols) {
      const key = `${protocol.chainId}-${protocol.name.toLowerCase()}`;
      expect(typeof map[key])
          .to.equal('undefined', `duplicate name: ${protocol.name}`);
      map[key] = true;
    }
  })

  it('all addresses are valid and checksummed', () => {
    for (let protocol of protocolsList.protocols) {
      for (let tokenAddress of protocol.tokens) {
        expect(getAddress(tokenAddress)).to.eq(tokenAddress);
      }
    }
  });
});