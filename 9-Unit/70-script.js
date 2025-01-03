
function Soru(soruMetni,cevapSec,dogruC){
    this.soruMetni = soruMetni;
    this.cevapSec = cevapSec;
    this.dogruC = dogruC ;
    console.log(this)
}
Soru.prototype.cevabiK = function(cevap){
    return cevap === this.dogruC
}

let soru1 = new Soru( "Hangisi js paket kargosucudur",{a:"Node", b:"Type", c:"Npm"},"c");


console.log(soru1.cevabiK('c'))
