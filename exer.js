function welcome() {
	var name = prompt("你是哪个宝宝呀？（提示：请输入名字）");

	if (name =="倪琛豪") {
		alert ("宝宝你好～");
    	return date();
		} else if (name=="倪可悠") {
	   	return	alert ("你不是"+ name + "! 我才是悠悠宝宝~");
	  	} else {
		return alert("我不认识你哦！");   		
		};
	}

function date() {
	var day = prompt("今天是倪琛豪宝宝生日吗？（提示：是 or 否）");

	if (day=="是") {
		alert ("宝宝生日快乐哦～")；
	} else {
		alert ("不管哪天我都爱你哦！")；
	}；
}

