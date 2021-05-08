const express = require("express");
const app = express();
const port = 8080;
const cors = require('cors');

//Documentation
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//CORS
app.use(cors())

//Models
const Sandbox = require("./model/sandbox");
const Feeding = require("./model/category");
const User = require("./model/user");

//Controllers
const sandboxController = require("./controller/sandboxController");
const userController = require("./controller/userController");
const categoryController = require("./controller/categoryController");
const threadController = require("./controller/threadController");
const commentController = require("./controller/commentController");
const likeController = require("./controller/likeController");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const passport = require("./passport/setup");
app.use(passport.initialize());

const sandboxMiddleware = require('./middleware/sandboxMiddleware');

const mongoose = require("mongoose");
const connectionString = "mongodb+srv://dbUser:bsBpxUNm9XH30jFn@cluster0.dfdti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
//const connectionString = "mongodb://localhost:27017/forum?readPreference=primary&ssl=false";
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.redirect('/docs') );

//Sandbox
app.post("/sandbox", sandboxController.post);

//User
// app.post("/sandbox/:sandboxName/user", sandboxMiddleware, userController.post);

//Category
app.post("/sandbox/:sandboxName/category", sandboxMiddleware, categoryController.post);
app.get("/sandbox/:sandboxName/category", sandboxMiddleware, categoryController.get);
app.delete("/category/:categoryId", categoryController.delete)

//Thread
app.post("/category/:categoryId/thread", threadController.post);
app.get("/category/:categoryId/thread", threadController.get);


//Likes on threads
app.post("/thread/:threadId/like", likeController.postForThread);

//Comment
app.post("/thread/:threadId/comment", commentController.post);
app.get("/thread/:threadId/comment", commentController.get);

//Likes on comments
app.post("/comment/:commentId/like", likeController.postForComment);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});