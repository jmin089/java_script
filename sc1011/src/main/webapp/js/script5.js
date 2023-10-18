/**
 * 두수를 입력하여 첫번째 숫자부터 두번째 숫자까지의 합
 * 2,7 -> 2+3+4+5+6+7
 */
var a = Number(prompt("1번째 숫자를 입력하세요.","0"));
var b = Number(prompt("2번째 숫자를 입력하세요.","0"));

var sum = 0;
for(var i=a;i<=b;i++){
	sum = sum+i;  //sum+= i;
}
document.write("<h1> 1번째 입력한 숫자 : "+ a +"</h1>")
document.write("<h1> 2번째 입력한 숫자 : "+b +"</h1>")
document.write("합 : "+sum, "<br>")