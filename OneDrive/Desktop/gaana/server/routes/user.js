const express = require('express')
const router = express.Router()
const db = require('../db')
const utils = require('../utils')
const cryptoJs=require('crypto-js')

router.post('/signup', (request, response) => {
    const { firstname, lastname, email, password } = request.body

    // encrpyt password using crypto-js md5 algorithm, otherwise it will save as it in our db and its against security.
   // and here the password encrypted using MD5 is reversible, means once it is encrypted, it cannot be decrypted again. so while validating further in other methods, we first encrypted the input and then do validation. 
    const encryptedPassword = cryptoJs.MD5(password)
    
    const query = `insert into user (firstname, lastname, email, password)
    values ('${firstname}', '${lastname}', '${email}', '${encryptedPassword}')`
   
    db.query(query, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})

router.post('/signin', (request, response) => {
    const{email, password} = request.body

    // encrypt the password
    const encryptedPassword=cryptoJs.MD5(password)

    const query = `select id, firstname, lastname, email, isActive from user where email = '${email}' and password = '${encryptedPassword}'`

    db.query(query, (error, users) => {
        if(error){
            response.send(utils.createError(error))
        } else {
            if(users.length==0){
                response.send(utils.createError('invalid user or password'))
            }else{
                response.send(utils.createResult(error, users[0]))
            }
        }
})
})

router.get('/profile/:id', (request, response)=>{
    const{id}=request.params

    const query=`select id, firstname, lastname, email, isActive from user where id = '${id}' `

    db.query(query, (error, users) =>{
        if(error){
            response.send(utils.createError(error))
        }else{
            if(users.length==0){
                response.send(utils.createError('profile not found'))
            }else{
                response.send(utils.createResult(error, users[0]))
            }
        }
    })
})

router.delete('/:id', (request, response) => {
    const{id}=request.params

    const query = `delete from user where id = '${id}'`

    db.query(query, (error, result) => {
        response.send(utils.createResult(error, result))
    })
})
 
module.exports = router 