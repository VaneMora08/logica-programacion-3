function calculateFactorial() {
    const input = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    
    // Convertir la entrada a número
    const number = Number(input);
    
    // Verificar si la entrada es un número válido
    if (isNaN(number) || !Number.isInteger(number) || number < 0) {
        resultElement.textContent = "Por favor, introduce un número entero positivo.";
        return;
    }
    
    // Calcular el factorial
    const factorial = (num) => {
        if (num === 0 || num === 1) {
            return 1;
        }
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    
    // Mostrar el resultado
    const factorialResult = factorial(number);
    resultElement.textContent = `El factorial de ${number} es ${factorialResult}.`;
}
