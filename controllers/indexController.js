var Eneida = require('../models/book');

module.exports = {
    //Shows all the quotes
    displayAll: (req, res, next) => {
        Eneida.find((err, dbres) => {
            if (err) return err;
            res.send(dbres);
        });
    },
    // Shows One quote requested by ID
    displaySelected: (req, res, next) => {
        Eneida.findById(req.params.id, (err, dbres) => {
            if (err) return err;
            res.send(dbres);
        });
    },
    // Seve new Quote 
    seveQuote: (req, res, next) => {
        let new_quote = new Eneida({ student: req.body.student, quote: req.body.quote });
        new_quote.save(function (err) {
            if (err) return handleError(err);
            // saved!
            Eneida.find((err, dbres) => {
                if (err) return err;
                res.send(dbres);
            });
        });
    },
    updateQuote: (req, res, next) => {
        // expects to have an "id" & "quote" in your body request
        Eneida.findByIdAndUpdate(req.body.id, { 'quote': req.body.quote }, function (err, ignore_res) {
            if (err) return handleError(err);
            //render page
            Eneida.find((err, dbres) => {
                if (err) return err;
                res.send(dbres);
            });
        })
    },
    deleteQuote: (req, res, next) => {
        console.log(req.body);
        // Delete model instance from DB
        Eneida.findByIdAndRemove(req.body.id, function (err, ignore_res) {
            if (err) return handleError(err);
            // console.log('deleted');
            //render page
            Eneida.find((err, dbres) => {
                if (err) return err;
                res.send(dbres);
            });
        });
    }
}