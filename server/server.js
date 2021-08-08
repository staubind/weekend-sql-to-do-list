const express = require('express');
const taskRouter = require('./routes/taskRoutes.js')
const app = express();

// tell app how to parse data
app.use(express.urlencoded({extended: true}))
// tell app where to find static files
app.use(express.static('server/public'));
// tell app what router to use
app.use('/task', taskRouter);
// tell app which port to listen to

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);