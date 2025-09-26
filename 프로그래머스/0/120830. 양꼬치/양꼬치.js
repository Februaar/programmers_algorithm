function solution(n, k) {
    const lambStick = 12000;
    const drink = 2000;
    const freeDrinks = Math.floor(n / 10);
    
    const totalCost = lambStick * n + (k - freeDrinks) * drink;
    
    return totalCost;
}