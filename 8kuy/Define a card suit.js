function defineSuit(card) {
    const cardArr = card.split(/(?=[♠♣♦♥])/);

    for(let i = 0; i < cardArr.length; i++) {
        if(cardArr[i] === '♣') return 'clubs'
        if(cardArr[i] === '♦') return 'diamonds'
        if(cardArr[i] === '♥') return 'hearts'
        if(cardArr[i] === '♠') return 'spades'

    }
}

console.log(defineSuit('Q♠'))
console.log(defineSuit('Q♣'))
console.log(defineSuit('Q♦'))
console.log(defineSuit('Q♥'))