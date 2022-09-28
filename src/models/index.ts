"use strict";
import { Sequelize } from 'sequelize';

const DATABASE: any = process.env.SQL_DATEBASE;
const USER: any = process.env.SQL_USER;
const PASSWORD: any = process.env.SQL_PASSWORD;
const HOST: any = process.env.SQL_HOST;
const PORT: any = process.env.SQL_PORT;
var sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    port: PORT,
    pool: {
        max: 25,
        min: 0,
        idle: 10000
    },
    logging: true,
    define: {
        timestamps: false,
    }
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    // sequelize.sync();
}).catch(async (err: { message: string | string[]; }) => {
    console.log('Unable to connect to the database:', err.message);
    if (err.message.includes('Unknown database')) {
        var createSequelize = new Sequelize("", USER, PASSWORD, {
            host: HOST,
            dialect: 'mysql',
            port: PORT,
            pool: {
                max: 25,
                min: 0,
                idle: 10000
            },
            logging: true,
            define: {
                timestamps: false,
            }
        });
        
        await createSequelize.query(`CREATE DATABASE IF NOT EXISTS \`${DATABASE}\`;`);
        await sequelize.sync();
        console.log("####################Table Imported#########################")
    }
});


var db: any = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export = db;