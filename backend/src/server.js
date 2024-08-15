// import cors from 'cors';
// import express from 'express';
// import { connectToDB , db} from "./db.js";
// import { error } from 'console';

// const app = express()
// app.use(cors())
// app.use(express.json())

// app.get('/', (req, res) => {
//     res.json("server is running successfully!");
// })

// app.post('/signup', async(req, res) => {
//     await db.collection("cred").findOne({Email:req.body.Email})
//     .then((result)=>{
//         if (result === null)
//         {
//             db.collection("cred").insertOne({Fname:req.body.Fname, Lname:req.body.Lname, Age:req.body.Age, Mnum: req.body.Mnum, Email: req.body.Email, Pwd:req.body.Pwd, Gen:req.body.Gen})
//             res.json({message:"account created", values:result})
//         }
//         else
//         {
//             res.json({error:"Email already in use"})
//         }
//     })
//     .catch((e)=>console.log(e))
// })



// app.post('/signin', async(req, res) => {
//     await db.collection("cred").findOne({Email:req.body.Email})
//     .then((result)=>{
//         if(result?.Pwd===req.body.Pwd){
//             res.json({message:"login sucess", values:result})
//         } else {
//             res.json({error:"Wrong credentials"})
//         }
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/userdata', async(req, res) => {
//     await db.collection("cred").find().toArray()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((e)=>console.log(e))
// })
// app.post('/status', async (req, res) => {
//     try {
//         const { Email, status } = req.body;
//         const result = await db.collection("cred").updateOne(
//             { Email },
//             { $set: { status } }
//         );

//         if (result.matchedCount > 0) {
//             res.status(200).json({ message: "Status updated", result });
//         } else {
//             res.status(404).json({ error: "User not found" });
//         }
//     } catch (e) {
//         console.error(e);
//         res.status(500).json({ error: "Internal server error" });
//     }
// });+

// // app.post('/status', async(req, res) => {
// //     await db.collection("cred").updateOne({Email:req.body.Email},{$set:{status:req.body.status}})
// //     .then((result)=>{
// //         res.send(result)
// //     })
// //     .catch((e)=>console.log(e))
// // })
// app.post('/landing', async(req, res) => {
//     await db.collection("sportsInd").find().toArray()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((e)=>console.log(e))
// })

// app.post('/resetpwd', async(req, res) => {
//     await db.collection("cred").findOne({Email:req.body.Email})
//     await db.collection("cred").updateOne({Email:req.body.Email}, {$set:{Pwd: req.body.Pwd}})
//     await db.collection("cred").findOne({Email:req.body.Email})
//     .then((result)=>{
//         if (result === null)
//         {

//             res.json({error:"No account with given email"})

//         }
//         else
//         {
//             db.collection("cred").updateOne({Email:req.body.Email}, {$set:{Pwd: req.body.Pwd}})
//             res.json({message:"Password updates", values:result})
//         }
//     })
//     .catch((e)=>console.log(e))

// })

// app.post('/deleteone', async(req, res) => {
//     await db.collection("cred").findOne({Email:req.body.Email})
//     .then((result)=>{
//         if (result === null)
//          {
//             res.json({error:"Oops"})
//          }
//          else{
//             db.collection("cred").deleteOne({Email:req.body.Email})
//             res.json({message:"Deleted"})
           
//          }
//     })
//     .catch((e)=>console.log(e))

// })

// app.post('/deletall', async(req, res) => {
//     await db.collection("cred").deleteMany()
//     .then((result)=>{
//         if (result === null)
//          {
//             res.json({message:"Deleted"})
            
//          }
//          else{
//             res.json({error:"Oops"})    
            
           
//          }
//     })
//     .catch((e)=>console.log(e))

// })

// connectToDB(() => {
//     app.listen(9000, () => {
//         console.log("server running at 9000");
//     })
// })
import cors from 'cors';
import express from 'express';
import { connectToDB, db } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json("Server is running successfully!");
});

// Signup route
app.post('/signup', async (req, res) => {
    try {
        const { Email, Fname, Lname, Age, Mnum, Pwd, Gen } = req.body;
        const existingUser = await db.collection("cred").findOne({ Email });

        if (!existingUser) {
            await db.collection("cred").insertOne({ Fname, Lname, Age, Mnum, Email, Pwd, Gen });
            res.status(201).json({ message: "Account created" });
        } else {
            res.status(400).json({ error: "Email already in use" });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Signin route
app.post('/signin', async (req, res) => {
    try {
        const { Email, Pwd } = req.body;
        const user = await db.collection("cred").findOne({ Email });

        if (user && user.Pwd === Pwd) {
            res.status(200).json({ message: "Login successful", values: user });
        } else {
            res.status(401).json({ error: "Wrong credentials" });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// User data route
app.post('/userdata', async (req, res) => {
    try {
        const users = await db.collection("cred").find().toArray();
        res.status(200).json(users);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Status update route
app.post('/status', async (req, res) => {
    try {
        const { Email, status } = req.body;
        const result = await db.collection("status").insertOne(
           req.body
        );

        if (result.matchedCount > 0) {
            res.status(200).json({ message: "Status updated", result });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Landing page route
app.post('/landing', async (req, res) => {
    try {
        const sports = await db.collection("sportsInd").find().toArray();
        res.status(200).json(sports);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Reset password route
app.post('/resetpwd', async (req, res) => {
    try {
        const { Email, Pwd } = req.body;
        const user = await db.collection("cred").findOne({ Email });

        if (user) {
            await db.collection("cred").updateOne({ Email }, { $set: { Pwd } });
            res.status(200).json({ message: "Password updated" });
        } else {
            res.status(404).json({ error: "No account with given email" });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete one route
app.post('/deleteone', async (req, res) => {
    try {
        const { Email } = req.body;
        const result = await db.collection("cred").deleteOne({ Email });

        if (result.deletedCount > 0) {
            res.status(200).json({ message: "Deleted" });
        } else {
            res.status(404).json({ error: "User not found" });
        }
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete all route
app.post('/deletall', async (req, res) => {
    try {
        const result = await db.collection("cred").deleteMany({});
        res.status(200).json({ message: "All records deleted", result });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Connect to the database and start the server
connectToDB(() => {
    app.listen(9000, () => {
        console.log("Server running on port 9000");
    });
});
