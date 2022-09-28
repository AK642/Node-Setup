module.exports = (app: any) => {
    const port = process.env.PORT || 3000;
    app.listen(port, function () {
        console.log(`Server Running on port : ${port}`);
    })
}