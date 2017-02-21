console.log('Starting Password Manager App ');

var storage = require('node-persist');
storage.initSync(); // create * name , username, password

// // storage.setItemSync('accounts', [{
// //     username: 'Amit Biswas',
// //     balance: 0
// // }]);

// var accounts = storage.getItemSync('accounts');

// //push on a new account
// //save using setItemSync
// accounts.push({
//     username: 'Jen',
//     balance: 75
// });

// storage.setItemSync('accounts', accounts);
// console.log(accounts);
//****************************/
// account.name Facebook 
//account.username  User 123!
//account.password Password123!

function createAccount(account) {
    var accounts = storage.getItemSync('accounts');
    //if accounts is undefined (use typeof)
    //set accounts=[]
    //push on new accounts and return account 
    if (typeof accounts === 'undefined') {
        accounts = [];
    }
    accounts.push(account);
    storage.setItemSync('accounts', accounts);
    return account;
}

function getAccount(accountName) {
    //create a variable call account
    //use getItemSync for load item whatever account is exist
    //use loop for iterare over array reaturn matching account
    //else undefined 
    var accounts = storage.getItemSync('accounts');
    var matchedAccount;

    accounts.forEach(function(account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }


    });

    return matchedAccount;
}

// createAccount({
//     name: 'Snap',
//     username: 'jem@snap.com',
//     password: 'Password12'

// });

var snapAccount = getAccount('Snap');
console.log(snapAccount);