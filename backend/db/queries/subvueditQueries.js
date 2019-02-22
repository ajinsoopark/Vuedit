const { db } = require('../index');

const getAllSubvuedits = (req, res, next) => {
    db.any('SELECT * FROM subvuedits')
    .then(subvuedits => {
        res.status(200)
        .json({
            status: 'Success',
            data: subvuedits,
            message: 'Received all subvuedits'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

const getSingleSubvuedit = (req, res, next) => {
    let subvueditId = parseInt(req.params.id);

    db.one('SELECT * FROM subvuedits WHERE id=$1', [subvueditId])
    .then(subvuedit => {
        res.status(200)
        .json({
            status: 'Success',
            data: subvuedit,
            message: `Received Subvuedit(${subvueditId})`
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

const createSubvuedit = (req, res, next) => {
    db.none('INSERT INTO subvuedits (name, descriptions) VALUES (${name}, ${descriptions})', req.body)
    .then(() => {
        res.status(200)
        .json({
            status: 'Success',
            message: 'Created subvuedit'
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            status: 'Failed',
            message: err
        })
    });
};

module.exports = {
    getAllSubvuedits,
    getSingleSubvuedit,
    createSubvuedit
}