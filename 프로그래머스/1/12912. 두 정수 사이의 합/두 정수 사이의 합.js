function solution(a, b) {
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    
    return Array.from({length: end - start + 1}, (_, i) => start + i).reduce((sum, curr) => sum + curr, 0);
}