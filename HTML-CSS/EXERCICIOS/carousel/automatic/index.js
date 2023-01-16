window.onload = function () {

    var div = document.getElementById('div1');
    var ul = div.getElementsByTagName('ul')[0];
    var li = ul.getElementsByTagName('li');
    var speed = 2;

    const a = document.querySelectorAll('a');
    const a1 = a[0];
    const a2 = a[1];
    ul.innerHTML = ul.innerHTML + ul.innerHTML;
    // alert(li.length);
    ul.style.width = li[0].offsetWidth * li.length + 'px';
    function scroll() {
        if (ul.offsetLeft < -ul.offsetWidth / 2) {
            ul.style.left = '0';
        }
        ul.style.left = ul.offsetLeft - 2 + 'px';
        a1.innerHTML = "ul.offsetLeft: " + ul.offsetLeft;
        a2.innerHTML = "ul.offsetWidth: " + ul.offsetWidth;
    }
    var timer = setInterval(scroll, 40);
    //     setInterval(function(){
    //         if(ul.offsetLeft>0){
    //             ul.style.left=-ul.offsetWidth/2+'px';
    //         }
    //         ul.style.left=ul.offsetLeft+2+'px';},30);

    ul.onmouseover = function () {
        clearInterval(timer);
    }
    ul.onmouseout = function () {
        timer = setInterval(scroll, 50);
    };

    document.getElementsByTagName('a').onclick = function () {
        ul.style.left = ul.offsetLeft + 2 + 'px';
    }

};