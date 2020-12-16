'use strict'
const express = require('express')
const volleyball = require('volleyball')
const path = require('path')

const app = express()

// logging middleware
app.use(volleyball)

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// static middleware
app.use(express.static(path.join(__dirname, '../public')))

 // include our routes!
 app.use('/api', require('./api'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}) // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
})

module.exports = app
