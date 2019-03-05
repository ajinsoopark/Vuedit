const { db } = require('../index');

const getAllSubvuedits = (req, res, next) => {
    db.any('SELECT id, name AS sub_name, COUNT AS sub_count FROM subvuedits AS s FULL JOIN (SELECT COUNT, sub_id FROM subvuedits AS s JOIN (SELECT count(*), sub_id FROM subscriptions GROUP BY sub_id) AS counts ON counts.sub_id = s.id) AS sub ON sub.sub_id = s.id')
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

    db.one('SELECT id, name AS sub_name, descriptions, COUNT AS sub_count FROM subvuedits AS s FULL JOIN (SELECT COUNT, sub_id FROM subvuedits AS s JOIN (SELECT count(*), sub_id FROM subscriptions GROUP BY sub_id) AS counts ON counts.sub_id = s.id) AS sub ON sub.sub_id = s.id WHERE id=$1', [subvueditId])
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