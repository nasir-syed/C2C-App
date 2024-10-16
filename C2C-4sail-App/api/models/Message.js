const mongoose = require("mongoose")
const {Schema} = mongoose

const MessageSchema = new Schema({
    sender: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    recipient: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    text: String,
}, {timestamps: true})


const MessageModel = mongoose.model('Message', MessageSchema)

module.exports = MessageModel;