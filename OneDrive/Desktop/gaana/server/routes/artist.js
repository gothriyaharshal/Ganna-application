const express = require('express')
const router = express.Router()
const db=require('../db')
const utils=require('../utils')
const multer = require('multer')

// we are using multer to upload a file
const upload=multer({ dest: 'uploads/'}) 
// here destination is given to 'uploads/' and by writing it folder uploads created in file automatically.  
// next time what will you upload in this file

router.post('/', upload.single('thumbnail'), (request, response)=> {
    const { firstname, lastname} = request.body

    // get the uploaded file name
    const filename= request.file.filename
    const query = `insert into  artist (firstname, lastname, thumbnail) values ('${firstname}', '${lastname}', '${filename}')`

    db.query(query, (error, artists) =>{
        response.send(utils.createResult(error, artists))
    })

})

router.get('/', (request, response) => {
    const query =`select * from artist`
    db.query(query, (error, artists)=>{
        response.send(utils.createResult(error, artists))
    })
})

module.exports = router