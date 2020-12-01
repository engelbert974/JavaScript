var nome = 'Paiva';

if (nome === 'Engelbert') {
    console.log('Legal! Seu nome é este mesmo');
} else if (nome === 'Paiva') {
    console.log('Tudo bem! Você tambem serve');
}else {
    console.log('Wue pena! Seu nome não é Engelbert');
}

switch(nome) {
    case 'Engelbert':
        console.log('Legal! Você é o Engelbert mesmo');
    break;
    case 'Paiva':
        console.log('Ah! Você tambem serve!');
    break;
    default:
        console.log('Que pena! Você não é quem eu estou procurando');
    break;
}