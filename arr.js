function random(){
  var arr = ['Aidana', 'Bekbolat', 'Mariya', 'Aleksandr', 'Diana'];
const winner = arr[Math.floor(Math.random() * arr.length)]+" is going to buy lunch today.";
document.getElementById("result").innerHTML = winner;
}