const sessions = require('../data/sessions');
const {DataSource} = require('apollo-datasource');

class SessionAPI extends DataSource {
    constructor() {
        super();
    }

    initialize(config) {

    }

    getSessions() {
        debugger;
        return sessions;
    }

}

module.exports = SessionAPI;
