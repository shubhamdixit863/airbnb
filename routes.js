var express = require('express');
var router = express.Router();

router.get("/",(req,res)=>{
    res.render("home")
})


router.get("/rooms",(req,res)=>{
    res.render("roomlisting")
})

router.get("/login",(req,res)=>{
    res.render("login")
})

router.get("/registration",(req,res)=>{
    res.render("registration")
})


router.post("/registration",(req,res)=>{

    const email=req.body.email;
    const password=req.body.password;
  
    const firstname=req.body.firstname;
    const lastname=req.body.lastname;

    if(email.length>0 && password.length>0 && firstname.length>0 && lastname.length>0)
    {

        let regex=/[A-Za-z0-9]{6,12}$/
        
        if(regex.test(password))
        {
            // redirect to dashboard
            res.render("dashboard",{username:firstname})
        }
        else{
            res.render("registration",{message:"Password must be alpha numeric and must contain 6 to 12 characters"})
        }

        
    }
    else{
        res.render("registration",{message:"All Fields Are required"})
    }
 
})


router.post("/login",(req,res)=>{

    let username=req.body.username;
    let password=req.body.password;
    if(username.length>0 && password.length>0)
    {
        
        res.render("login",{message:"Login Success"})
    }
else{
  
    res.render("login",{message:"Username And Password Are Required"})
}
   
  
})





module.exports = router;