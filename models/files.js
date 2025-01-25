const { Schema, Model } = require('mongoose');

const filesSchema = new Schema({
    image: {
        type: String,
        require: true
    }

}, { timestamps: true });

const Files = Model('Files', filesSchema);

module.exports = Files;