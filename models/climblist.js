const mongoose = require('../db/db')
const { Schema, model } = require('mongoose')
const users = require('./user')

const ClimbListSchema = new Schema(
    {
        name: String,
        description: String,
    },
    { timestamps: true }
)

const ClimbListItem = model('ClimbListItem', ClimbListSchema)

module.exports = ClimbListItem