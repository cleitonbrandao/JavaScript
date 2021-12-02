//solução mais simples
function verificarPalindromo(string) {
    if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo(null));

//solução 2, complicadinha

function verificarPalindromoDois(string) {
    if (!string) return "string inexistente";
        for (let i = 0; i < string.length / 2; i++) {
            if(string[i] !== string[string.length -1 -i]){
            return false;
        }
    }
    return true;
}

console.log(verificarPalindromoDois("abba"));

function substituirPares(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            console.log("você já é zero!")
            } else if (array[i] % 2 === 0) {
                console.log(`Substituindo ${array[i]} por 0...`);
                array[i] = 0;    
            }
    }
    return array;
}
let arr = [1, 3, 4, 6, 80, 33, 23, 90];
substituirPares(arr);