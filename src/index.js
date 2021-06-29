const express = require('express');
require("./db/mongoose");
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');


const app = express();
const port = process.env.PORT;

// 
// Setting our middlewar
//
// app.use((req,res,next) => {
//     if (req.method === 'GET') {
//         res.send('GET REQUEST ARE DISABLE');
//     } else {
//         next();
//     }
// })

// app.use((req,res,next) => {
//     res.status(503).send('APP UNDER MAINTENANCE! PLZ VISIT SOMETIMES LATER');
// })

// const multer = require('multer');
// const upload = multer({
//     dest: 'images', //dest for destination
//     limits: {
//         fileSize: 2000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
//             return cb(new Error('Please upload a image only of format .png,.jpg,.jpeg'))
//         }

//         cb(undefined, true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cd(undefined, false)
//     }
// })

// app.post('/upload', upload.single('upload') ,(req,res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })






app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


//
// Without middleware: new request -> run route handler
// 
// With middleware:    new request -> do something -> run route handler
//


app.listen(port, () => {
    console.log(port);
})

//Json web token for validating user using sending some token 
// const jwt = require('jsonwebtoken');

// const myFuntion = async () => {
//     const token = jwt.sign({ _id: 'abcd123'},'thisismynewcourse', { expiresIn: '7 days'});
//     console.log(token);

//     const data = await jwt.verify(token, 'thisismynewcourse');
//     console.log(data)
// }

// myFuntion();

// const pet = {
//     name: "Hol",
//     password: "uewi33i4h33"
// }
// pet.toJSON = function () {
    
//     return {}
// }

// console.log(JSON.stringify(pet));





// const main = async () => {
//     // const task = await Task.findById('60d81fd4b8f04a54b0cf0fc7');
//     // await task.populate('owner').execPopulate();
//     // console.log(task);

//     const user = await User.findById('60d817e4c6f54b503c1c205c');
//     await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)

// }

// main();