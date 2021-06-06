function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var tag = getParameterByName('product');
setting();

function now_buyOnClick() {
    //사용할 객체 선언
    var color_selection = document.getElementById("color_selection");
    var memory_selection = document.getElementById("memory_selection");
    var colorData = color_selection.options[color_selection.selectedIndex].value;
    var memoryData = memory_selection.options[memory_selection.selectedIndex].value;
    var quantityData = document.getElementById('quantity_selection').value;

    //form입력
    $('input[name=product-name]').attr('value',document.getElementById('product_name').innerText);
    $('input[name=product-color]').attr('value',colorData);
    $('input[name=product-memory]').attr('value',memoryData);
    $('input[name=product-quantity]').attr('value',quantityData);

    var order_form = document.order_form;
    order_form.submit();
}

var quantity = document.getElementById('quantity_selection');
var saleprice = document.getElementById('saleprice');
var price = saleprice.innerText.replace(/,/gi,"");
price = price.replace("원","");

function quantityUp_Btn() {
    //수량 증가 버튼
    quantity.value = parseInt(quantity.value) +1;
    saleprice.innerText = price*quantity.value;
    saleprice.innerText = saleprice.innerText.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')+"원";
}
function quantityDown_Btn() {
    //수량 감소 버튼
    if(quantity.value != 0){
        quantity.value = parseInt(quantity.value) -1;
        saleprice.innerText = price*quantity.value;
        saleprice.innerText = saleprice.innerText.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')+"원";
    } else {
        alert("최소단위는 0개입니다!")
    }
}



function setting() {
    var product_name = document.getElementById('product_name');
    var product_code = document.getElementById('product_code');
    var saleprice = document.getElementById('saleprice');
    var price = document.getElementById('price');
    var product_img = document.getElementById('product_img');
    var main_img = document.getElementById('main_img');

    switch(tag) {
        //폰 시리즈
        case "galaxy_s21":
            product_name.innerText="갤럭시 S21 Ultra 5G 자급제";
            product_code.innerText="SM-G998NZKEKOO";
            saleprice.innerText="1,452,000원";
            price.innerText="";
            product_img.src="./img/smartphone/galaxy_s21.jpg";
            main_img.src="./img/smartphone/info/galaxy_s21_info.jpg";
            break;
        case "galaxy_note20":
            product_name.innerText="갤럭시 노트20 Ultra 5G 자급제";
            product_code.innerText="SM-N986NZNEKOO";
            saleprice.innerText="1,452,000원";
            price.innerText="";
            product_img.src="./img/smartphone/galaxy_note20.png";
            main_img.src="./img/smartphone/info/galaxy_note20_info.jpg";
            break;
        case "galaxy_fold2":
            product_name.innerText="갤럭시 Z 폴드2 5G 자급제";
            product_code.innerText="SM-F916NZNAKOO";
            saleprice.innerText="1,892,000원";
            price.innerText="";
            product_img.src="./img/smartphone/galaxy_fold2.png";
            main_img.src="./img/smartphone/info/galaxy_fold2_info.jpg";
            break;
        case "galaxy_zfilp2":
            product_name.innerText="갤럭시 Z 플립 5G 자급제";
            product_code.innerText="SM-F707NZNAKOO";
            saleprice.innerText="1,349,700원";
            price.innerText="1,496,000원";
            product_img.src="./img/smartphone/galaxy_zfilp2.png";
            main_img.src="./img/smartphone/info/galaxy_zfilp_info.jpg";
            break;
        case "apple_iphone12_mini":
            product_name.innerText="iPhone 12 mini";
            product_code.innerText="";
            saleprice.innerText="950,000원~";
            price.innerText="";
            product_img.src="./img/smartphone/iphone12mini.png";
            main_img.src="./img/smartphone/info/iphone12_mini_info.jpg";
            break;
        case "apple_iphone12":
            product_name.innerText="iPhone 12";
            product_code.innerText="";
            saleprice.innerText="1,300,000원~";
            price.innerText="";
            product_img.src="./img/smartphone/iphone12.png";
            main_img.src="./img/smartphone/info/iphone12_info.jpg";
            break;
        case "apple_iphone12_pro":
            product_name.innerText="iPhone 12 Pro";
            product_code.innerText="";
            saleprice.innerText="1,738,000원~";
            price.innerText="";
            product_img.src="./img/smartphone/iphone12pro.png";
            main_img.src="./img/smartphone/info/iphone12_pro_info.jpg";
            break;
        //테블릿 시리즈
        case "galaxy_tab_S7":
            product_name.innerText="갤럭시 탭 S7 (Wi-Fi)";
            product_code.innerText="SM-T870NDBBKOO";
            saleprice.innerText="999,400원";
            price.innerText="";
            product_img.src="./img/tablet/galaxy_tabS7_wifi.png";
            main_img.src="./img/smartphone/info/galaxy_tab_s7_info.jpg";
            break;
        case "galaxy_s7plus_lte":
            product_name.innerText="갤럭시 탭 S7+ (LTE)";
            product_code.innerText="SM-T975NDBBKOO";
            saleprice.innerText="1,349,200원";
            price.innerText="";
            product_img.src="./img/tablet/galaxy_tabS7_wifi.png";
            main_img.src="./img/smartphone/info/galaxy_tab_s7plus_lte_info.jpg";
            break;
        case "galaxy_s7plus_5g":
            product_name.innerText="갤럭시 탭 S7+ 5G";
            product_code.innerText="SM-T976NDBBKOO";
            saleprice.innerText="1,449,300원";
            price.innerText="";
            product_img.src="./img/tablet/galaxy_tabS7_wifi.png";
            main_img.src="./img/smartphone/info/galaxy_tab_s7plus_5g_info.jpg";
            break;
        case "apple_ipad2020":
            product_name.innerText="iPad 10.2인치(8세대)";
            product_code.innerText="";
            saleprice.innerText="449,000원";
            price.innerText="";
            product_img.src="./img/tablet/ipad2020.png";
            main_img.src="./img/smartphone/info/ipad_info.jpg";
            break;
        //노트북 시리즈
        case "lg_gram14":
            product_name.innerText="LG Gram 14";
            product_code.innerText="14Z90P-GA30K";
            saleprice.innerText="1,374,300원";
            price.innerText="1,507,000원";
            product_img.src="./img/notebook/lg_gram.png";
            main_img.src="./img/notebook/info/gram14_info.jpg";
            break;
        case "lg_gram16":
            product_name.innerText="LG Gram 16";
            product_code.innerText="16Z90P-GA70K";
            saleprice.innerText="2,096,600원";
            price.innerText="2,299,000원";
            product_img.src="./img/notebook/lg_gram.png";
            main_img.src="./img/notebook/info/gram16/1.jpg";
            document.write('<img id="main_img" src="./img/notebook/info/gram16/2.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/3.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/4.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/5.gif" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/6.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/7.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/8.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/9.gif" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/10.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/11.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/12.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/13.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/14.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/15.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/16.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/17.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/18.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/19.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram16/20.jpg" class="main_img_setting">');
            break;
        case "lg_gram17":
            product_name.innerText="LG Gram 17";
            product_code.innerText="17Z90P-GA70K";
            saleprice.innerText="2,196,900원";
            price.innerText="2,409,000원";
            product_img.src="./img/notebook/lg_gram.png";
            main_img.src="./img/notebook/info/gram17/1.jpg";
            document.write('<img id="main_img" src="./img/notebook/info/gram17/2.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/3.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/4.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/5.gif" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/6.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/7.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/8.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/9.gif" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/10.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/11.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/12.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/13.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/14.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/15.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/16.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/17.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/18.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/gram17/19.jpg" class="main_img_setting">');
            break;
        case "galaxy_book":
            product_name.innerText="갤럭시북";
            product_code.innerText="NT750XDA-KC58S";
            saleprice.innerText="1,190,000원";
            price.innerText="1,250,000원";
            product_img.src="./img/notebook/galaxy_book.jpg";
            main_img.src="./img/notebook/info/galaxy_book_info.jpg";
            break;
        case "galaxy_book_pro":
            product_name.innerText="갤럭시북 Pro";
            product_code.innerText="NT950XDC-XD71S";
            saleprice.innerText="2,290,000원";
            price.innerText="2,440,000원";
            product_img.src="./img/notebook/galaxy_book_pro.jpg";
            main_img.src="./img/notebook/info/book_pro/1.jpg";
            document.write('<img id="main_img" src="./img/notebook/info/book_pro/2.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/book_pro/3.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/book_pro/4.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/book_pro/5.jpg" class="main_img_setting">');
            break;
        case "galaxy_book_flex2":
            product_name.innerText="갤럭시북 FLEX2";
            product_code.innerText="NT950QDZ-G58AZ";
            saleprice.innerText="1,898,000원";
            price.innerText="2,019,140원";
            product_img.src="./img/notebook/galaxy_book_flex2.jpg";
            main_img.src="./img/notebook/info/flex2/1.jpg";
            document.write('<img id="main_img" src="./img/notebook/info/flex2/2.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/flex2/3.jpg" class="main_img_setting">');
            document.write('<img id="main_img" src="./img/notebook/info/flex2/4.jpg" class="main_img_setting">');
            break;
    }
}