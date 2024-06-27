let nivel;

function CalcularPartidas(QtdVitorias, QtdDerrotas) {
   return QtdVitorias - QtdDerrotas;
}

let saldoVitorias = CalcularPartidas(1000, 900);

if (saldoVitorias < 10) {
   nivel = "Ferro";
   console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel)

} else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
   nivel = "Bronze"
   console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel)

} else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
   nivel = "Prata"
   console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel)

} else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
   nivel = "Ouro"
   console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel)
} else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
   nivel = "Diamante"
   console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel)

} else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
   nivel = "Lendário"
   console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel)

} else if (saldoVitorias >= 101) {
   nivel = "Imortal"
   console.log("O Herói tem saldo de " + saldoVitorias + " está no nível " + nivel)

}




