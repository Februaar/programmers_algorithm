function solution(numbers) {
    const average = numbers.reduce((a,b) => a + b, 0) / numbers.length;
    
    return average;
}