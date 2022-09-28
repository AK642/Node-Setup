import { Joi, celebrate, errors } from "celebrate";
module.exports = (app: any) => {
    app.use(errors());
}