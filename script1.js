var postlinkv = window.location.href;
var postTitlev = document.querySelectorAll(".post-title")[0].textContent;
$(".postscan p").text(postTitlev);
var qr;
(function() {
        qr = new QRious({
        element: document.getElementById('post-qr-code'),
        size: 200,
        value: postlinkv
    });
})();
function scanposturl(){
$(".postfooter").toggleClass("postscanactive");
}
$(".hidescanqr").on("click" , function(){
$(".postfooter").toggleClass("postscanactive");
});
$(".linkboxbtn input").val(postlinkv);
$(".linkboxbtn button").on("click",function(){
navigator.clipboard.writeText(postlinkv);
})
