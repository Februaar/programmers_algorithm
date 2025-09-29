function solution(sides) {
    sides.sort((a, b) => b - a);
    
    const longestSide = sides[0];
    const otherSideSum = sides[1] + sides[2];
    
    return longestSide < otherSideSum ? 1 : 2;
}