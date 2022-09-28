import BodyParser from 'body-parser';

module.exports = (app: any) => {
    app.use(BodyParser.json())
    app.use(BodyParser.urlencoded({ extended: true }))
}