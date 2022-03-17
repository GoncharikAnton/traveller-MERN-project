const fs = require('fs');


const users = JSON.parse(
    fs.readFileSync(`${__dirname}/../dev-data/data/users.json`
    ));

exports.getAllUsers = (req, res) => {
    users.length > 0 ?
        res.status(200).json({
            status: 'success',
            timeOfRequest: req.requestTime,
            userQuantity: users.length,
            users
        }) :
        res.status(404).json({status: 'fail', message: 'Not found this tour'});
};
exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this route not yet defined'
    })
};
exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this route not yet defined'
    })
};
exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this route not yet defined'
    })
};

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'this route not yet defined'
    })
};