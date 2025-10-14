function solution(my_string, n) {
  var answer = "";

  for (let i = 0; i < my_string.length; i++) {
    var currentChar = my_string[i];
    answer += currentChar.repeat(n);
  }

  return answer;
}