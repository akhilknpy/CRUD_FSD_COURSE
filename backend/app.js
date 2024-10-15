const express = require('express');
const cors=require('cors')

const app = express();
app.use(cors())

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

require('dotenv').config()
const PORT=process.env.PORT

//DB Connection
require('./db/connection')


//Router path
const courseRoute = require('./routers/admin')
app.use('/',courseRoute)


// Server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
