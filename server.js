const express=require("express");
const app=express();
const routes=require("./routes");
const exphbs  = require('express-handlebars');
const hbs=exphbs.create();
app.engine('handlebars',hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('public'))
const port =process.env.PORT || 4000


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",routes);


app.listen(port,()=>{

    console.log(`Server Listening on Port ${port}`);
})