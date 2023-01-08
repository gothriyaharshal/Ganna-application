const express = require('express')
const router = express.Router()
const db=require('../db')
const utils=require('../utils')
const multer=require('multer')

const upload=multer ({dest:'uploads/'})

router.get('/', (request, response) => {
    const query=`select song.id, song.title, song.thumbnail, album.title as Album, artist.firstname as firstname,
    artist.lastname as lastname, song.duration
    from song, album, artist where song.albumId=album.id and album.artistId = artist.id`
    db.query(query, (error, songs) =>{
        response.send(utils.createResult(error, songs))
    })
})

router.post('/', upload.single('thumbnail'), (request, response) => {
    const {title, artistId, albumId, duration} = request.body
    
    // get the uploaded filename
    const filename= request.file.filename

    const query =`insert into song(title, artistId, albumId, thumbnail, duration) values ('${title}', '${artistId}', '${albumId}', '${filename}' , '${duration}')`
    db.query(query, (error, songs) => {
        response.send(utils.createResult(error, songs))
    })

})


module.exports = router