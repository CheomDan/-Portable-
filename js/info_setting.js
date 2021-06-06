//초기 리스트 정리(스마트폰,테블릿,노트북 브랜드x)
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var tag = getParameterByName('info_item');

dispaly();

function dispaly() {
    var info = document.getElementById('company_info');
    var history = document.getElementById('company_history');
    var CEO = document.getElementById('company_CEO');
    switch (tag){
        case "info":
            info.style.display="block";
            history.style.display="none";
            CEO.style.display="none";
            break;
        case "history":
            info.style.display="none";
            history.style.display="block";
            CEO.style.display="none";
            break;
        case "CEO":
            info.style.display="none";
            history.style.display="none";
            CEO.style.display="block";
            break;
    }
}