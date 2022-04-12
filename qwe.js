const text = "-[--(++[+)---]-"

function verify(text){
    console.log(text.search(/\)|]|</g))
    console.log(text.search(/\(|\[|>/g))
    return text.substring(text.search(/\)|]|</g) + 1, text.search(/\(|\[|>/g) )
}

console.log(verify(text))