//한국 수출입 은행 api를 가져와 웹 프로젝트 만들기
//uLNYwcIKVLrOxZY6CGfegNXDN62iEF5p

var today = new Date();

var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);

var dateString = year + '-' + month + '-' + day;

console.log(dateString);