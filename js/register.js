//checkBox Setting
function check(name) {
    if(document.getElementById(name).getAttribute('src') == "./img/check_off.png") {
        document.getElementById(name).src = './img/check_on.png';
    } else if(document.getElementById(name).getAttribute('src') == "./img/check_on.png") {
        document.getElementById(name).src = './img/check_off.png';
    }
}
//동의 후 next 클릭시
var oneLayout = document.getElementById('oneLayout');
var twoLayout = document.getElementById('twoLayout');
function next() {
    oneLayout.style.display="none";
    twoLayout.style.display="block";
}