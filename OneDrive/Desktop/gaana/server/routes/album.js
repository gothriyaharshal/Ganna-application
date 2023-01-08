const express = require('express')
const router = express.Router()
const db =require('../db')
const utils=require('../utils')
const multer = require('multer')
const upload = multer({dest:'uploads/'})

router.get('/', (request, response) => {
    const query =   `select album.*, artist.firstname as Firstname, artist.lastname as Lastname from album, artist where album.artistId=artist.id `
    
    db.query(query, (error, albums) =>{
        response.send(utils.createResult(error, albums))
    })
})

router.post('/', upload.single('thumbnail'), (request, response) =>{
    const {title, artistId, duration } = request.body

    const filename=request.file.filename

    const query = `insert into album(title, artistId, thumbnail, duration) values ('${title}', '${artistId}', '${filename}', '${duration}')`
    db.query(query, (error, albums)=> {
        response.send(utils.createResult(error, albums))
    })
})

router.get('/songs/:id', (request, response) => {
    const {id} = request.params
    const query=`select song.id, song.title, album.title as Album, artist.firstname as firstname,
    artist.lastname as lastname, song.duration
    from song, album, artist where song.albumId=${id} and album.artistId = artist.id`
    db.query(query, (error, album) =>{
        response.send(utils.createResult(error, album))
    })
})
module.exports = router