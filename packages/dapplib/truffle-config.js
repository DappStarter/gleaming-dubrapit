require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remain modify give narrow foster split'; 
let testAccounts = [
"0x6153e6bbab4de68a1abae2cae95874d9ea9d60c02adee953f87a483e81b1e078",
"0x3521f291d32dc6752e841c7e30070c04bac1592821cd63ebade4979e9eb4ea32",
"0x58fa6b93ca4eced375aad2fabc30af1a85d066ddf9b2f05964d235c4f07fa39a",
"0x5f582fad49227d8141de6a96e2bb651d1d9712a10ef84434e8528af45703671d",
"0x1d159d54b119bdd2a16bf2ae4edb9902f0fc2243f1f980c95a6e50ba415b2299",
"0x8cd8b1a572bc612fe6a4e6fdb1fc5d0e4fe357db5f354b9970b75f83beced84c",
"0x3e96bfd3b9ad2520f3aec460c2cde884322f21ec432da6f6f2a5287a2babb035",
"0xbd58f191df931ece1db4d4d1705239697151a21cc903ad7f65eaf5c73c6b9b74",
"0xa703849ea8f5dc10189ef7adcd29d434a8d2e476e3ee3a65625e6b2604c7ff0f",
"0x40d1fa3e9a1b6917a2834006730364f0a1b47bd10f3e079f4a80debcd2a3b8fa"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
