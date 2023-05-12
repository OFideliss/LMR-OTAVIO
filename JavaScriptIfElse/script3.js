let diaSemana;

diaSemana = prompt("Informe um n° para saber a qual dia da semana ele se refere", "1-7");

if (diaSemana==0) {
    document.write("Dia 0?? Sério mesmo, cara???")
    } else if(diaSemana==1) {
        document.write("Domingo");
    } else if(diaSemana==2) {
        document.write("Segunda-feira");
    } else if(diaSemana==3) {
        document.write("Terça-feira");
    } else if(diaSemana==4) {
        document.write("Quarta-feira");
    } else if(diaSemana==5) {
        document.write("Quinta-feira");
    } else if(diaSemana==6) {
        document.write("Sexta-feira");
    } else if(diaSemana==7) {
        document.write("Sábado");
    } else {
        document.write("Até ontem uma semana tinha 7 dias, amigão");
    }
