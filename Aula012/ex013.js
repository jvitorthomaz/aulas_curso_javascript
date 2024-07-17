var agora = new Date()
var diaSem = agora.getDay()
//funcao que pega o dia do sistema pega em formato de numero. Sendo 0 = domingo e 6 = sabado
switch (diaSem) {
    case 0:
        console.log('Domingo')
        break;

    case 1:
        console.log('Segunda')
        break;

    case 2: 
        console.log('Terca')
        break;

    case 3:
        console.log('Quarta')
        break;

    case 4: 
        console.log('Quinta')
        break;
        
    case 5:
        console.log('Sexta')    
        break;

    case 6:
        console.log('sabado')
        break;    

    default:
        console.log('[Erro - Dia invalido!')
        break;
}