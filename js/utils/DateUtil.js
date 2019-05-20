/*格式化日期 */
Date.prototype.Format = function(fmt) {
	var split = {
		"d+": this.getDate(),
		"E+": this.getDay(),
		"M+": this.getMonth() + 1,
		"y+": this.getFullYear(),
		"H+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"S+": this.getMilliseconds()
	};
	if(/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for(var key in split) {
		if(new RegExp("(" + key + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (split[key]) : (("00" + split[key]).substr(("" + split[key]).length)));
		}
	}
	return fmt;
}

/*number天后的日期*/
Date.prototype.dayAfterNum = function(number) {
	this.setDate(this.getDate() + number)
	return this.toDateString(); //把 Date 对象的日期部分转换为字符串。
}

/*测试*/
Date.prototype.test = function() {
	var dayOfMonth = this.getDate();
	var dayOfWeek = this.getDay();
	var month = this.getMonth() + 1;
	var year = this.getFullYear();
	var hours = this.getHours();
	var minutes = this.getMinutes();
	var seconds = this.getSeconds();
	var milliseconds = this.getMilliseconds();
	var longTime = this.getTime(); //返回 1970 年 1 月 1 日至今的毫秒数。
	console.log(year + "年" + month + "月" + dayOfMonth + "日" + hours + "时" + minutes + "分" + seconds + "秒" + milliseconds + "''" + "星期" + dayOfWeek)
	debugger;
	return "test";
}