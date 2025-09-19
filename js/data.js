// criando nova instancia de data
// o Date() é uma função construtora 
// essa função, cria uma forma de lidar com datas
const data = new Date();
console.log(data);

// acessando partes espicificas da data

// ano
const ano = data.getFullYear();
console.log("ano");

// mês 
const mes = data.getMonth();
console.log("mes");

// dia da semana - Ele devolve a posição do dia na semana que está no array
const dia = data.getDay();
console.log("Dia");

// dia completo
const diaCompleto = data.getDate();
console.log("diaCompleto");

// horas
const horas = data.getHours();
console.log("horas");

// minutos 
const minutos = data.getMinutes();
console.log("minutos");

// segundos
const segundos = data.getSeconds();
console.log("segundos");

document.body.innerText = `Hoje é ${diaCompleto}/${mes + 1}/${ano} | ${horas}:${minutos}:${segundos}`;


// criando dias especificos
const dataEspecifica = new Date(2023, 8, 2, 10, 30, 20);
                              //ano, mês, dia, hora, minuto, segundos.
console.log(dataEspecifica);


// PADRÃO iso 8601 - ideal para lidar com fuso horarios

// definindo valores 
console.log(data.setHours(20));
console.log(data.setMinutes(45));