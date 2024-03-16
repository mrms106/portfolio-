//dotenv is package which accesse credentials from .env for upload image
if(process.env.NODE_ENV !="production"){
    require('dotenv').config();
    
    }

const express=require("express");
const app=express();
const path=require("path");
const nodemailer=require("nodemailer");
const methodOverride=require("method-override");


app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));




app.get("/",(req,res)=>{
    res.render("index.ejs");
})
//mail send
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.mail, // Enter your email address
        pass: process.env.pass // Enter your email password (or use app password)
    }
});

app.post("/",async(req,res)=>{
    const form = req.body.contact;
    try {
        
        const mailOptions = {
            from: process.env.mail, // Sender's email address
            to: process.env.mail2, // Receiver's email address (hotel owner)
            subject: 'New contact Us form from portfolio',
            text: `A new form from portfolio:\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`,        };
        await transporter.sendMail(mailOptions); 
        
        res.redirect("/");
    } catch (err) {
        console.log(err)
        res.send("error")
    }
})


app.listen("8080",()=>{
    console.log("running on port 8080");
})