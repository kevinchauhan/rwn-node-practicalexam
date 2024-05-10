import express from "express";
import dbConnection from "./config/db.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import expressEjsLayouts from "express-ejs-layouts";
import userRouter from "./routes/userRouter.js";
import taskRouter from "./routes/taskRouter.js";

const app = express()
const PORT = 8000

// db connection
dbConnection()

// parse body
app.use(bodyParser.urlencoded({ extended: false }))
// cookie parser
app.use(cookieParser())


// view engine
app.set('view engine', 'ejs')
// set template
app.set('views', 'views')
// express layout
app.use(expressEjsLayouts)

// routes
app.get('/', (req, res) => {
    res.render('pages/index')
})
app.use('/user', userRouter)
app.use('/task', taskRouter)




app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})