const mongoose = require('mongoose');

const db = 'NewslettersPlugin';
const dbUr1 = `mongodb+srv://Anvesha:9984893704@cluster0.msfhrds.mongodb.net/${db}?retryWrites=true&w=majority`

// Asynchronous Function - returns Promise
// then enter
mongoose.connect(dbUr1)

.then((result) => {
    console.log('database connected');
    
})
.catch((err) => {
    console.log(err);
});
// Asynchronous(simultaniousley) Vs Synchronous(one by one)
module.exports = mongoose;