function solution(my_string, letter) {
  var answer = my_string
    .split("")
    .filter((a) => a !== letter)
    .join("");

  return answer;
}