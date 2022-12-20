const express = require("express");
const mysql = require("mysql")
const cors = require("cors");

const app = express();
port = 8000;

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: "reacttesting",
    host: "localhost",
    database: "test",
    password: "toor"
})

app.post('/register', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    // db.query("SELECT * FROM student", (err, result)=>{
    //     console.log(err)
    //     console.log(result)
    // })

    db.query("INSERT INTO student(username, password) VALUES (?,?)", [username, password], (err, result)=>{
        console.log(err)
    })
})

app.post('/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    // db.query("SELECT * FROM student", (err, result)=>{
    //     console.log(err)
    //     console.log(result)
    // })

    db.query("SELECT * FROM student WHERE username=? AND password=?", [username, password], (err, result)=>{
        if(err){
            res.send({err: err})
        }

        if(result.length > 0){
            res.send(result);
        }else{
            res.send({message: "Wrong Username and Password"})
        }
    })
})



// app.get("/", (req, res)=>{
//     res.send("Hello NF i can here you")
// })


app.listen(port, ()=>{
    console.log("Listening...")
})

