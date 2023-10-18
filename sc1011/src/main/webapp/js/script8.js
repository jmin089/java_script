/**
 * 
 */
//입력 2개
var input = 0;
var weight = 0;

input = Number(prompt("키를 입력하세요.","0"));
weight = Number(prompt("몸무게를 입력하세요.","0"));

var height = input/100;
var result = weight / (height*height);

document.write("비만도는?"+result+"<br>");

if(result>=25){
	document.write("결과 : ",result, "<br>당신은 비만입니다..살을빼세요!!","<br>")
}else if(result>=23){
	document.write("결과 : ",result, "<br>당신은 과체중입니다..!!","<br>")
}else if(result>=18.5){
	document.write("결과 : ",result, "<br>당신은 정상입니다..!!","<br>")
}else{
	document.write("결과 : ",result, "<br>당신은 저체중입니다..!!","<br>")
}
