
var mongoose = require('mongoose');

var dbURI = "mongodb+srv://muhammetcan:Fenerbahce.01@mekanbul.8p0dk4y.mongodb.net/?retryWrites=true&w=majority";
require("./mekansema");
mongoose.connect(dbURI);
mongoose.connection.on("connected", function() {
    console.log(db.dbURI + " adresindeki veritabanına bağlanıldı!\n");

} );
mongoose.connection.on("error", function () {
    console.log("Bağlantı hatası\n");
});

mongoose.connection.on("disconnected", function() {
    console.log("Bağlantı Kesildi!\n");
});

function kapat(msg, callback) {
    mongoose.connection.close(function () {
        console.log(msg);
        callback();
    });
}

process.on("SIGINT",function() {
    kapat("Uygulama kapatıldı!", function() {
        process.exit(0);
    });
});