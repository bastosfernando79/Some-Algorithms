function binarySearch(arr, target) {
  // Começa no início do array e vai até o meio (isso na primeira interação)
  let left = 0;
  let right = arr.length - 1;

  // Esse laço fica verificando até achar o índice ou não encontrar no array
  while (left <= right) {
    // Pega a metade de cada iteração
    let mid = Math.floor((left + right) / 2);

    // Verifica se o mid vai para cima o para baixo
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // Caso em que o target não está no array
  return false;
}

const sortedArray = Array.from({ length: 10 }, (_, index) => index + 1);
const targetValue = 3;

const result = binarySearch(sortedArray, targetValue);

if (result !== false) {
  console.log(`O elemento ${targetValue} foi encontrado no índice ${result}.`);
} else {
  console.log(`O elemento ${targetValue} não foi encontrado.`);
}
