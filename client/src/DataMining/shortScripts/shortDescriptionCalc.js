export const shortDescriptionCalc = (description) => {
    return description.split('.').splice(0, 2) + '...';
}

export const starCalculator = (rat) => {
    let res = []
    for (let i = 0; i < 5; i++) {
        switch(true) {
            case (rat - i) > 0.6 :
                res.push('star');
                break;
            case rat - i <= 0.6 :
                res.push('star_half');
                break;
            case rat - i <= 0 :
                res.push('star_border');
                break;
            default:
                break;
        }
    }
    return res.join(' ');
}

export const threePartDescription = (description) => {
    const desc = description.split('.')
    const quant = Math.floor(desc.length / 3)
    const res = [desc.splice(0, quant).join('. ') + '.', desc.splice(0, quant).join('. ') + '.', desc.splice(0).join('. ')]
    return res
}

