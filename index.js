// i have changed app.js to index.js file

const express = require('express')
const app = express()
const path = require('path')
let ejs = require('ejs');


// const port = process.env.PORT || 3000
const port = process.env.PORT || 3000

require("./src/conn") // database Connection
const studentData = require("./src/models/model")

const static_path = path.join(__dirname, "./static")
const views_path = path.join(__dirname, "./views")

app.use(express.urlencoded({ extended: false }))
app.use("/static", express.static(static_path))
app.set('view engine', 'ejs')
app.set('views', views_path)


app.get("/", async (req, res) => {
    try {
        const result = await studentData.find()
        // console.log(result)
        res.status(201).render("index", { data : result })
    } catch (error) {
        res.status(400).send(error)
    }
})
app.post("/", async (req, res) => {
    try{
    const myData = new studentData(req.body)
    // console.log(myData)
    myData.save({writeConcern:{w:1}}).then(() => {
        res.status(200).redirect("/")
    })
        .catch((error) => {
            res.status(400).send(error)
        })
    }
   catch (error) {
        res.status(400).send(error)
    }
})
app.get("/edit/:id", async (req, res) => {
    try {
        const id = req.params.id
        // console.log(id)
        const result = await studentData.findById(id)
        // console.log(result)
        res.status(201).render("edit", {data : result})
    } catch (error) {
        res.status(400).send(error)
    }
})
app.post("/update/:id", async (req, res) => {
    try {
        const id = req.params.id
        const data = req.body
        const result = await studentData.findByIdAndUpdate(id, data,{writeConcern:{w:1}})
        // console.log(result)
        res.status(201).redirect("/")
    } catch (error) {
        res.status(400).send(error)
    }
})
app.get("/back", async (req, res)=>{
    try {
        res.status(201).redirect("/")
    } catch (error) {
        res.status(400).send(error)
    }
})
app.get("/delete/:id", async (req, res) => {
    try {
        const id = req.params.id
        const result = await studentData.findByIdAndDelete(id,{writeConcern:{w:1}})
        res.status(201).redirect("/")
    } catch (error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`Server listen at port ${port}`)
})