// OOP : Nesne Tabanlı rogramlama 
// Object

let soru = {
    soruMetni : "Hangisi js paket kargosucudur",
    cevapSec:{
        a:"Node",
        b:"Type",
        c:"Npm"
    },
    dogruC: "c",
    cevabiK : function(cevap){
        return cevap === this.dogruC
    }
}
let soru2 = {
    soruMetni : "Hangisi .net paket kargosucudur",
    cevapSec:{
        a:"Node",
        b:"nuget",
        c:"Npm"
    },
    dogruC: "b",
    cevabiK : function(cevap){
        return cevap === this.dogruC
    }
}
console.log(soru.soruMetni);
console.log(soru.cevabiK('c'))
console.log(soru2.soruMetni);
console.log(soru2.cevabiK('c'))