function solution(array, height) {
    const answer = array.filter((item) => item > height);
    
    return answer.length;
}