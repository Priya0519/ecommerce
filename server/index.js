
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

// SETTINGS
app.set('port', process.env.PORT || 3000);

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// ROUTES
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/clients', require('./routes/clients.routes'));
app.use('/api/suppliers', require('./routes/suppliers.routes'));

// STARTING SERVER
app.listen(app.get('port'), (error) => {
    if (error)
    {
        console.log('Error on server: ',err);
    } 
    else {
        console.log('Server on port', app.get('port'));
    }
});

/** here ends thE file
* server/index
**/
