var agora = new Date()
var hr = agora.getHours()

console.log(`Agora sao exatamente ${hr} horas`)

if (hr < 12){
    console.log('Bom dia')
    
} else if(hr <= 18){
    console.log('Boa Tarde')
} else{
    console.log('Boa Noite')
}


