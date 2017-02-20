console.log('Starting Password Manager App ');

var storage = require('node-persist');
storage.initSync();

//storage.setItemSync('name', 'Amit');

var name = storage.getItemSync('name');
console.log('Save Name is : ' + name);