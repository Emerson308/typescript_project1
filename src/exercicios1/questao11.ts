

function combine(input1: boolean|number, input2: boolean|number): boolean|number {
    
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
      } else if (typeof input1 === 'boolean' && typeof input2 === 'boolean') {
        return input1 && input2; // Ou input1 || input2, dependendo da lógica desejada
      } else if (typeof input1 === 'boolean') {
        return input1;
      } else {
        return input2;
      }
}