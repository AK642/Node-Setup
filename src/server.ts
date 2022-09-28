import env from 'dotenv';
env.config();
import express from 'express';
const app = express();

//Load Default Root and port redirections of the project
import corelibs from "./core";
corelibs.forEach((lib: String) => {
    require(`./core/root/${lib}`)(app);
});
