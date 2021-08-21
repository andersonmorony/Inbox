const HDwalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode} = require('./compile');

const provider = new HDwalletProvider(
    'radio exercise patch debate advice result fade egg often food drum anger',
    'https://ropsten.infura.io/v3/9d5a912049a54e91bbf6885f372b03a0'
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
            gasPrice: '5000000000'
        });

    console.log('Contract deployed to', result.options.address);

};
deploy();
