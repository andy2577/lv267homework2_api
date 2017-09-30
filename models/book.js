var mongoose = require('mongoose');

var bookSchema =  mongoose.Schema({
    student: {type: String},
    quote: {type: String}
});

module.exports = mongoose.model('Eneida', bookSchema);
