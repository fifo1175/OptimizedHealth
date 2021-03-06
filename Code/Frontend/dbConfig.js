require('dotenv').config();

const {Pool} = require("pg");

const isProduction = process.env.NODE_ENV ==='production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
//port is 5433
const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString
});

module.exports = {pool};

//the USER is optimizedhealth
//the database name is nodelogin
//the table in the database is called 'users'