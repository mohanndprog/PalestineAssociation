// $(document).ready(function() {
//     $('#linkplus').click(function(){
//         modifyFontSize('increase');
//     });
//     $('#linkminus').click(function(){
//         modifyFontSize('decrease');
//     });
//     $('#linkreset').click(function(){
//         modifyFontSize('reset');
//     });
//     function modifyFontSize(flag)
//     {
//        var divElement = $('#divcontent');
//        var currentFontsize = parseInt(pcontent.css('font-size'));
//     }
//     if(flag == 'increase')
//     currentFontsize += 3;
//     else if(flag == 'decrease')
//     currentFontsize -= 3;
//     else 
//     currentFontsize =20;

//     pElement.css('font-size', currentFontsize);
// });

$('button').on('click', function(){
    var clicked = this;
    $('#divcontent').css('font-size', function (i,size) {
        console.log(parseInt(size, 10), clicked.id);
        return parseInt(size,10) + (clicked.id === 'up' ? 2 : -2) + 'px';
    });
});