if(screen.width >= 400) {
    var imgArray=new Array();
    imgArray[0]="./img/s21.jpg";
    imgArray[1]="./img/gram.jpg";
    imgArray[2]="./img/s21.png";
    function showImage(){
        var imgNum=Math.round(Math.random()*2);
        var objImg=document.getElementById("adimage_id");
        objImg.src=imgArray[imgNum];
        setTimeout(showImage,2000);
    }
} else {
    document.getElementById('adimage_id').style.width="370px";
    document.getElementById('adimage_id').src="./img/s21_mobile.jpg";
}
