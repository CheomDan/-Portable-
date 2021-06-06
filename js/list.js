//상세검색 처리
var display_code = null;

function onclick_Samsung_Btn(){
    display_code = "SAMSUNG_Phone_Series";
    display();
}

function onclick_Apple_Btn(){
    display_code = "APPLE_iPhone_Series";
    display();
}

function onclick_Galaxy_Tab_Btn(){
    display_code = "SAMSUNG_Tab_Series";
    display();
}

function onclick_IPAD_Btn(){
    display_code = "APPLE_iPad_Series_";
    display();
}

function onclick_Gram_Btn(){
    display_code = "LG_NoteBook_Series";
    display();
}

function onclick_SamsungNoteBook_Btn(){
    display_code = "SAMSUNG_NoteBook_Series";
    display();
}

function display(){

    var SAMSUNG_Phone_Series = document.getElementById('SAMSUNG_Phone_Series');
    var APPLE_iPhone_Series = document.getElementById('APPLE_iPhone_Series');
    var SAMSUNG_Tab_Series = document.getElementById('SAMSUNG_Tab_Series');
    var APPLE_iPad_Series_ = document.getElementById('APPLE_iPad_Series_');
    var LG_NoteBook_Series = document.getElementById('LG_NoteBook_Series');
    var SAMSUNG_NoteBook_Series = document.getElementById('SAMSUNG_NoteBook_Series');

    switch (display_code){
        case "SAMSUNG_Phone_Series":
            SAMSUNG_Phone_Series.style.display="block";
            APPLE_iPhone_Series.style.display="none";
            SAMSUNG_Tab_Series.style.display="none";
            APPLE_iPad_Series_.style.display="none";
            LG_NoteBook_Series.style.display="none";
            SAMSUNG_NoteBook_Series.style.display="none";
            break;
        case "APPLE_iPhone_Series":
            SAMSUNG_Phone_Series.style.display="none";
            APPLE_iPhone_Series.style.display="block";
            SAMSUNG_Tab_Series.style.display="none";
            APPLE_iPad_Series_.style.display="none";
            LG_NoteBook_Series.style.display="none";
            SAMSUNG_NoteBook_Series.style.display="none";
            break;
        case "SAMSUNG_Tab_Series":
            SAMSUNG_Phone_Series.style.display="none";
            APPLE_iPhone_Series.style.display="none";
            SAMSUNG_Tab_Series.style.display="block";
            APPLE_iPad_Series_.style.display="none";
            LG_NoteBook_Series.style.display="none";
            SAMSUNG_NoteBook_Series.style.display="none";
            break;
        case "APPLE_iPad_Series_":
            SAMSUNG_Phone_Series.style.display="none";
            APPLE_iPhone_Series.style.display="none";
            SAMSUNG_Tab_Series.style.display="none";
            APPLE_iPad_Series_.style.display="block";
            LG_NoteBook_Series.style.display="none";
            SAMSUNG_NoteBook_Series.style.display="none";
            break;
        case "LG_NoteBook_Series":
            SAMSUNG_Phone_Series.style.display="none";
            APPLE_iPhone_Series.style.display="none";
            SAMSUNG_Tab_Series.style.display="none";
            APPLE_iPad_Series_.style.display="none";
            LG_NoteBook_Series.style.display="block";
            SAMSUNG_NoteBook_Series.style.display="none";
            break;
        case "SAMSUNG_NoteBook_Series":
            SAMSUNG_Phone_Series.style.display="none";
            APPLE_iPhone_Series.style.display="none";
            SAMSUNG_Tab_Series.style.display="none";
            APPLE_iPad_Series_.style.display="none";
            LG_NoteBook_Series.style.display="none";
            SAMSUNG_NoteBook_Series.style.display="block";
            break;
    }
}