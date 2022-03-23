export const shortDescriptionCalc = (description) => {
    return description.split('.').splice(0, 2) + '...';
}

export const starCalculator = (rat) => {
    let res = []
    for (let i = 0; i < 5; i++) {
        Math.floor(rat) >= i ? res.push('star') : res.push('star_border')
    }
    return res.join(' ');
}

export const threePartDescription = (description) => {
    let res = []
    let temp_str = ''
    const desc = description.split('.').map((str, index) => {
        if(index < desc.length/3){
            temp_str.join(str, ' ')
        } // TODO DODELAT!
    });


    return description.split('.')
}