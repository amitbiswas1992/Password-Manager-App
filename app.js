console.log('Starting Password Manager App ');

var storage = require('node-persist');
storage.initSync();

// storage.setItemSync('accounts', [{
//     username: 'Amit Biswas',
//     balance: 0
// }]);

var accounts = storage.getItemSync('accounts');

//push on a new account
//save using setItemSync

console.log(accounts);