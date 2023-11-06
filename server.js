//mongodb
require('./config/db');

const app = require('express')();
const port = 3000;

const userRouter = require('./api/User');

//For accepting post form data
const bodyPraser = require('express').json;
app.use(bodyPraser());

app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})