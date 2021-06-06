function SubmitOnclick()  {
    var error_code = null;
    //입력정보체크 과정
    if(document.getElementById('disagree').checked == true){
        error_code = "disagree";
    } else if(!document.getElementById('product_code').value){
        error_code = "product_code";
    } else if(!document.getElementById('name').value){
        error_code = "name";
    } else if(!document.getElementById('phone_number').value){
        error_code = "phone_number";
    } else if(!document.getElementById('email').value){
        error_code = "email";
    } else if(!document.getElementById("description").value){
        error_code = "description";
    }

    switch(error_code){
        case "disagree":
            alert("'개인정보 수집∙이용'"+'에 동의를 하셔야 이용가능합니다.')
            break;
        case "product_code":
            alert("'제품코드'"+'가 비어있습니다.')
            break;
        case "name":
            alert('사용자정보 > '+"'이름'"+'이 비어있습니다.')
            break;
        case "phone_number":
            alert('사용자정보 > '+"'전화번호'"+'가 비어있습니다.')
            break;
        case "email":
            alert('사용자정보 > '+"'이메일'"+'이 비어있습니다.')
            break;
        case "description":
            alert('문의정보 > '+"'문의내용'"+'이 비어있습니다.')
            break;
        default:
            alert('정상 접수 되었습니다.')
            window.location.href = "./index.html";
    }
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var tag = getParameterByName('service');
setting();

function setting() {
    
    var as_Layout = document.getElementById('as_section');
    var faq_Layout = document.getElementById('faq_section');

    switch(tag) {
        case "as":
            as_Layout.style.display="block";
            faq_Layout.style.display="none";
            break;
        case "faq":
            as_Layout.style.display="none";
            faq_Layout.style.display="block";
            break;
    }
}