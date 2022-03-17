// 4) START SERVER

const config = require("config");
const mongoose = require("mongoose");

const app = require('./app');

const PORT = config.get("PORT") || 5000;
const DB = config.get("DATABASE").replace('<PASSWORD>',
    config.get("DATABASE_PASSWORD"));

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => console.log('!!!!!!!!!!!!!!!!!! Db connection successful !!!!!!!!!!!!!!!!!!'));

app.listen(PORT, () => {
    console.log(`!!!!!!!!!!!!!!!!!!App running on port ${PORT}...!!!!!!!!!!!!!!!!!!`);
});