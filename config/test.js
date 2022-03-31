const arr = [1,2,3, [4,5,6, [7,8,9]]]
const arr1 = ['a', 'b', ['c', 'd', ['e', 'f']]]

const arr_flat = arr.flat( 6)

console.log(arr_flat)

let res = []

const flat = (arr) => {
    arr.map(item => {
        typeof item !== 'object' ? res.push(item) : flat(item)
    })
    return res
}

console.log(flat(arr1))