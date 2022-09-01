const express=require('express');
const app = express();
const homePage=require('./routes/pageRoutes')

/* ----------------------------server init-------------------------- */
const dotenv=require('dotenv');
dotenv.config()
const port=process.env.SERVER_PORT || 3001;
const localhost=process.env.localServer

/*---------------------------------------------------*/

app.use(homePage)
/*----------------------server didn't connect-----------------------------*/
app.use((req, res, next)=>{
res.status(404).send(`This url is ${localhost} incorrect please try again new path`)
})
/*------------------------server running port------------------------------*/
app.listen(port,(req, res) =>{
    console.log(`server is listening on server ${localhost}:${port}`)
})