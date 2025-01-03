// OOP : Nesne Tabanlı rogramlama 
// Object

// let soru = {
//     soruMetni : "Hangisi js paket kargosucudur",
//     cevapSec:{
//         a:"Node",
//         b:"Type",
//         c:"Npm"
//     },
//     dogruC: "c",
//     cevabiK : function(cevap){
//         return cevap === this.dogruC
//     }
// }
// let soru2 = {
//     soruMetni : "Hangisi .net paket kargosucudur",
//     cevapSec:{
//         a:"Node",
//         b:"nuget",
//         c:"Npm"
//     },
//     dogruC: "b",
//     cevabiK : function(cevap){
//         return cevap === this.dogruC
//     }
// }
// Sınıf , Constructor => nesne * 30

function Soru(soruMetni,cevapSec,dogruC){
    this.soruMetni = soruMetni;
    this.cevapSec = cevapSec;
    this.dogruC = dogruC ;
    this.cevabiK = function(cevap){
        return cevap === this.dogruC

    }
    console.log(this)
}
let soru1 = new Soru( "Hangisi js paket kargosucudur",{a:"Node", b:"Type", c:"Npm"},"c");

let sorular = [
    new Soru( "Hangisi js paket kargosucudur",{a:"Node", b:"Type", c:"Npm"},"c"),
    new Soru( "Hangisi py paket kargosucudur",{a:"Node", b:"pip", c:"Npm"},"b")
]
console.log(soru1.soruMetni)
console.log(soru1.dogruC)
console.log(soru1.cevabiK('c'))
console.log(soru2.cevabiK('c'))
console.log(soru3.cevabiK('c'))