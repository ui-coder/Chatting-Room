// Date-Time Clock

function date_time(id) {
    date = new Date;
    month = date.getMonth();
    year = date.getFullYear();
    months = new Array('01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12');
    d = date.getDate();
    day = date.getDay();
    days = new Array('Sun -', 'Mon -', 'Tue -', 'Wed -', 'Thu -', 'Fri -', 'Sat -');
    h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    result = ' ' + days[day] + ' ' + d + '.' + months[month] + '.' + year + ' / ' + h + ':' + m + ':' + s;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("' + id + '");', '1000');
    return true;
}
window.onload = date_time('date_time');

// Background 

//$(document).ready(function () {
//    $('body').css('background', 'url()');
//});
