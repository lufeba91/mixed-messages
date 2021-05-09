//Returns the index of the topics to choose from. 0 Famous, 1 little prince, 2 motivaitonals
const pickTopic =() => {
    const i =Math.floor(Math.random()*3);
    return i;
};

//Returns an index of the phrase to be chosen
const pickPhrase= (array) => {
    const i = Math.floor(Math.random()*array.length);
    return i;
};

//Loading the phrases
let phrases =[['No hay que ir para atrás ni para darse impulso',
'No hay caminos para la paz; la paz es el camino', 'Haz el amor y no la guerra'],
['Al primer amor se le quiere más, al resto se le quiere mejor',
'Caminando en línea recta no puede uno llegar muy lejos',
'Es muy triste olvidar a un amigo. No todos han tenido un amigo'],
['Cada día es una nueva oportunidad para cambiar tu vida',
'Ningún mar en calma hizo experto a un marinero', 'Existe el mañana por alguna razón']];
let answer=[];
for (let i =0 ; i < 10; i++){ 
    let topic =pickTopic();
    let phrase = phrases[topic][pickPhrase(phrases[topic])].split(' ');
    answer.push(phrase[Math.floor(Math.random()*phrase.length)]);
};    
console.log(answer);