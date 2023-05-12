let diaSemana;

diaSemana = prompt("Informe um n° para saber a qual dia da semana ele se refere um n°", "1-7");

if (diaSemana==0) {
    document.write("Dia 0?? Sério mesmo, cara???")
    } 
if (diaSemana == 1) {
    document.write("Domingo");
} if (diaSemana == 2) {
    document.write("Segunda-feira");
} if (diaSemana == 3) {
    document.write("Terça-feira");
} if (diaSemana == 4) {
    document.write("Quarta-feira");
} if (diaSemana == 5) {
    document.write("Quinta-feira");
} if (diaSemana == 6) {
    document.write("Sexta-feira");
} if (diaSemana == 7) {
    document.write("Sábado");
} if (diaSemana >= 8) {
    document.write("Até ontem uma semana tinha 7 dias, amigão");
}