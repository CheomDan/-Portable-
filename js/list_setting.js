//초기 리스트 정리(스마트폰,테블릿,노트북 브랜드x)
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var tag = getParameterByName('list');
setting();

function setting() {

    var SAMSUNG_Phone_Series = document.getElementById('SAMSUNG_Phone_Series');
    var APPLE_iPhone_Series = document.getElementById('APPLE_iPhone_Series');
    var SAMSUNG_Tab_Series = document.getElementById('SAMSUNG_Tab_Series');
    var APPLE_iPad_Series_ = document.getElementById('APPLE_iPad_Series_');
    var LG_NoteBook_Series = document.getElementById('LG_NoteBook_Series');
    var SAMSUNG_NoteBook_Series = document.getElementById('SAMSUNG_NoteBook_Series');
    
    switch(tag) {
        case "smartphone":
            SAMSUNG_Phone_Series.style.display="block";
            APPLE_iPhone_Series.style.display="block";
            SAMSUNG_Tab_Series.style.display="none";
            APPLE_iPad_Series_.style.display="none";
            LG_NoteBook_Series.style.display="none";
            SAMSUNG_NoteBook_Series.style.display="none";
            break;
        case "tablet":
            SAMSUNG_Phone_Series.style.display="none";
            APPLE_iPhone_Series.style.display="none";
            SAMSUNG_Tab_Series.style.display="block";
            APPLE_iPad_Series_.style.display="block";
            LG_NoteBook_Series.style.display="none";
            SAMSUNG_NoteBook_Series.style.display="none";
            break;
        case "notebook":
            SAMSUNG_Phone_Series.style.display="none";
            APPLE_iPhone_Series.style.display="none";
            SAMSUNG_Tab_Series.style.display="none";
            APPLE_iPad_Series_.style.display="none";
            LG_NoteBook_Series.style.display="block";
            SAMSUNG_NoteBook_Series.style.display="block";
            break;
    }
}