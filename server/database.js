
const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/app-commerce';

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(db => console.log(`${URI} is connected`))
    .catch( err => console.log(`Error en Mongo: ${err}`));

module.exports = mongoose;




/**here ends the file
* server/database
**/
