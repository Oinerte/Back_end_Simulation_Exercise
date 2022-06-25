import { result } from "../src";

const validaArray = (arr) => {
    if (!Array.isArray(arr)){
        console.log('Resposta não é um array'); 
        return;
    } 
    if (arr.length === 0) {
        console.log('O array de resposta está vazio');
        return;
    }

    console.log('A disciplina escolhida foi: ', arr[0].disciplineName);
    console.log('-----------------------------------------------------');
    console.log(`O array possui ${arr.length} entradas`)
    console.log('-----------------------------------------------------');
    console.log('Os subtemas são :', arr.map(i => i.name));
    console.log('-----------------------------------------------------');
} 

validaArray(result);