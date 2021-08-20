const HdwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HdwalletProvider(
    'radio exercise patch debate advice result fade egg often food drum anger',
    'https://rinkeby.infura.io/v3/c32936b4e646416baf2b0b079ad15c3d'
);

const web3 = new Web3(provider);

const deploy = async () =>{
    
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy accounts', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hi there!']
        })
        .send({
            gas: '1000000',
            from: accounts[0],
            gasPrice: '40000000'
        });

    console.log('Contract deployed to', result.options.address);

};
deploy();



