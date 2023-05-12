let HT; // horas trabalhadas
let VH; // valor hora
let PD; // percentual de desconto
let TD; // total de desconto
let SB; // salário bruto
let SL; // salário líquido

HT = prompt('Digite as Horas Trabalhadas:', 'Informe aqui:');
VH = prompt('Entre com o valor da hora:', 'Informe aqui:');
PD = prompt('Informe o Percentual de desconto:', 'em porcentagem');
SB = parseInt(HT) * parseFloat(VH); //parseInt converte variavel para int
TD = parseFloat(PD) * SB / 100;  // parseFloat converte variavel para float
SL = SB - TD;

document.write('Salário = ', SL);