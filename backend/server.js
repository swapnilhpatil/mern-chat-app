const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res)=> {
   res.send("Hello World!");
});

app.get("/api/chat", ()=>{
   //get all chat data
});

app.get("/api/chat/:id", (req, res)=>{
    //get specific chat data using id
});
app.post("api/chat", (req, res) => {
  // create new chat
});
app.put("/api/chat/:id",(req,res)=> {
   //update chat using id
});

app.delete("/api/chat/:id",(req,res)=>{
    //delete cha using id
});

app.listen(PORT, ()=>{
    console.log(`App listing on port: ${PORT}`);
});
