// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll_btn").style.display = "block";
    } else {
        document.getElementById("scroll_btn").style.display = "none";

    }
}
// When the user clicks on the button, scroll to the top of the document

$('#scroll_btn').click(function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})