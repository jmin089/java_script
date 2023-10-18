/**
 * 
 */
var b = Number(prompt("숫자를 입력하세요.","0"));

var sum = 0;
for(var i=0;i<=b;i++){
	sum = sum+i;  //sum+= i;
}
document.write("1부터 "+b+"까지 합 : "+sum, "<br>")