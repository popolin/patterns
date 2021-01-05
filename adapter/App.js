const Db = require('./Db');
const { join } = require('path');

// Arquivo de database
const dbFile = join('dbs.json');

// LowDB
// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');
// const adapter = new FileSync(dbFile);
// const dbs = low(adapter);

// LokiDB
const Loki = require('lokijs');
const LokiAdapter = require('./LokiAdapter');
const ldb = new Loki(dbFile)
const lokiAdapter = new LokiAdapter(ldb);

// Instância do módulo DB
const db = new Db(lokiAdapter);

db.init('users');
db.add({
    collection: 'users',
    data: {
        name: 'John Doe',
        age: 32
    }
})