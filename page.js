window.onload = function () {
    var $root = $("html, body");
    window.div1Y = document.getElementById("div1").getBoundingClientRect().y;
    window.div2Y = document.getElementById("div2").getBoundingClientRect().y;
    window.div3Y = document.getElementById("div3").getBoundingClientRect().y;
    window.commentsY = document.getElementById("comments").getBoundingClientRect().y;
    window.socialY = document.getElementById("social").getBoundingClientRect().y;

    document.getElementById("ref_div1").addEventListener("click", function () {
        $root.scrollTop(window.div1Y)
    });
    document.getElementById("ref_div2").addEventListener("click", function () {
        $root.scrollTop(window.div2Y)
    });
    document.getElementById("ref_div3").addEventListener("click", function () {
        $root.scrollTop(window.div3Y)
    });
    document.getElementById("ref_comments").addEventListener("click", function () {
        $root.scrollTop(window.commentsY)
    });
    document.getElementById("ref_social").addEventListener("click", function () {
        $root.scrollTop(window.socialY)
    });
    document.getElementById("up").addEventListener("click", function () {
        $root.scrollTop(0)
    });
    document.getElementsByClassName("navbarhome")[0].addEventListener("click", function () {
        $root.scrollTop(0)
    });
};

window.onresize = function () {
    window.div1Y = document.getElementById("div1").getBoundingClientRect().y;
    window.div2Y = document.getElementById("div2").getBoundingClientRect().y;
    window.div3Y = document.getElementById("div3").getBoundingClientRect().y;
    window.commentsY = document.getElementById("comments").getBoundingClientRect().y;
    window.socialY = document.getElementById("social").getBoundingClientRect().y;    
}

console.log(window.innerWidth)
console.log(window.innerHeight)