module.exports = {
    ...require('./people.route'),
    ...require('./login.route')
}

// module.exports.people = require('./people.route');
// module.exports.login = require('./login.route');
