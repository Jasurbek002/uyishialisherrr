const EURO_dan_UZS = 10354.03;
const USD_dan_UZS = 9433.34;

var balanceUZS = Number(prompt("Alisher qancha pulingiz bor? (so'm)" ,0));

var uchishpuli = 250;
var mexmonxonapuli =500;
var sayoxatpuli = 120;

if (balanceUZS >=(uchishpuli+mexmonxonapuli)* EURO_dan_UZS + sayoxatpuli * USD_dan_UZS){
    console.log("Oq yo'l")
}else{
    console.log("ozgina sabir qil...")
}