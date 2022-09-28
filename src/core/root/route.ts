import Routes from '../../routes/index.route';
export = (app: any) => {
    app.use('/api/v1', Routes);
}