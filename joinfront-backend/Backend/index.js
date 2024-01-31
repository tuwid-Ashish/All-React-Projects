import  express  from "express";
const app = express();
const port = process.env.port || 3000

app.get("/",(req,res,next)=>{
    // res.send("test the server")
    const testd = [  
        {name:"Shyam", email:"shyamjaiswal@gmail.com"},  
        {name:"Bob", email:"bob32@gmail.com"},  
        {name:"Jai", email:"jai87@gmail.com"}  
    ]
    res.send(testd)
})

app.listen(port,()=>{
    console.log(`app listening on http//localhost:${port}`);
})

