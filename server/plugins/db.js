module.exports = app => {
    const mongoose = require('mongoose')

    mongoose.connect('mongodb://localhost:27017/test-moba', {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false
    })

    require('require-all')(__dirname + '/../models')
}