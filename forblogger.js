
$(".postfooter").append("<div class='postscan ripple' title='QR Scane Code'><h2>Read Post by Scan</h2><p>Post Title</p><canvas id='post-qr-code'/><a class='qrcreditmr' href='https://www.mrlaboratory.com'>Provided by MR Laboratory</a></div><div class='linkboxbtn'> <input value='Post Link... '/><button> Copy Link <i aria-hidden='true' class='fa fa-clipboard'/>      </button></div>");
$('head').append('<link rel="stylesheet" type="text/css" href="style1.css">');
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
