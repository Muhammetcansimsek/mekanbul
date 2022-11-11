var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa',
     { 
    "baslik": 'Anasayfa',
     "sayfaBaslik":{
        "siteAd":"MekanBul",
        "slogan":"Civardaki Mekanlari Keşfet!"
     },
     "mekanlar":[
        {

            "ad":"Starbucks",
            "puan":"3",
            "adres":"Centrum Garden AVM",
            "imkanlar":["Kahve","Çay","Kek"],
            "mesafe":"10km"




        },
        {

            "ad":"Barida Kafe",
            "puan":"4",
            "adres":"Sdü Batı Kampüsü",
            "imkanlar":["Kahve","Çay","Kek"],
            "mesafe":"1km"


        }



     ]

    
    
    });
};

const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi',
    { "baslik": 'Mekan Bilgisi',
    "mekanBaslik":"Starbucksaaa",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"3",
        "adres":"Centrum Garden",
        "saatler":[
            {
            "günler":"Pazartesi-Cuma",
            "acilis":"9:00-22:00",
            "kapali":"false"

            },
            {
                "günler":"Cumartesi-Pazar",
                "acilis":"8:00-22:00",
                "kapali":"false"
    
            },
            
        ],
        "imkanlar":["Kahve","Çay","Kek"],
        "Koordinatlar":{
            "enlem":"37.7",
            "boylam":"30.5"
        },
        "yorumlar":[
            {
                "yorumYapan":"Asım Sinan Yüksel",
                "yorumMetni":"Berbat",
                "tarih":"20 EKim 2022",
                "puan":"1"
            }
        ]

    }

});
};

const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
};

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}