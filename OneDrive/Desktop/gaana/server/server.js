const express = require('express')
const cors=require('cors')
const bodyParser = require('body-parser')

const app = express()

// cors(cross-origin resource sharing) means access these express APIs outside the localhost
// cors is used to give access of our application to external world
app.use(cors('*'))

// body-parser 
app.use(bodyParser.json())


// routers
const routerUser=require('./routes/user')
const routerAlbum=require('./routes/album')
const routerArtist=require('./routes/artist')
const routerSong=require('./routes/song')
 
//static routing to make our upload files available to end user without any particular routing method
app.use(express.static('uploads'))
// any file in upload directory doesn't require any route
// express will simply return any file from upload directory 

// add the routes
app.use('/user', routerUser)
app.use('/album', routerAlbum)
app.use('/artist', routerArtist)
app.use('/song', routerSong)


// listen on port 3000 and can be accessible by 0.0.0.0(it means can be accessible by any ip address)
app.listen(5000, '0.0.0.0', () => {
    console.log('server started on port 5000')
})