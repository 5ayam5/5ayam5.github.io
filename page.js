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
    document.getElementById("navbarhome").addEventListener("click", function () {
        $root.scrollTop(0)
    });

    document.getElementsByTagName("body")[0].addEventListener("scroll", function () {
        var offset = $(document.getElementById("navbar")).offset().top;
        var social = document.getElementById("ref_social");
        var comments = document.getElementById("ref_comments");
        var div3 = document.getElementById("ref_div3");
        var div2 = document.getElementById("ref_div2");
        var div1 = document.getElementById("ref_div1");
        var home = document.getElementById("navbarhome");
        var navbar = document.getElementById("navbar");

        social.style.backgroundColor = navbar.style.backgroundColor;
        comments.style.backgroundColor = navbar.style.backgroundColor;
        div3.style.backgroundColor = navbar.style.backgroundColor;
        div2.style.backgroundColor = navbar.style.backgroundColor;
        div1.style.backgroundColor = navbar.style.backgroundColor;
        home.style.backgroundColor = "#cccccc";

        if (window.socialY - offset <= 1) {
            social.style.backgroundColor = "#227722";
        }
        else if (window.commentsY - offset <= 1) {
            comments.style.backgroundColor = "#227722";
        }
        else if (window.div3Y - offset <= 1) {
            div3.style.backgroundColor = "#227722";
        }
        else if (window.div2Y - offset <= 1) {
            div2.style.backgroundColor = "#227722";
        }
        else if (window.div1Y - offset <= 1) {
            div1.style.backgroundColor = "#227722";
        }
        else {
            home.style.backgroundColor = "#cceecc";
        }
    });

    var comment = document.getElementById("comment");
    var alert = document.getElementById("alert");
    comment.onfocus = function () {
        alert.style.color = "#ff3333";
        alert.innerText = "After writing comment, press enter to submit. Write as many and as much as you want!";
    };
    comment.onkeypress = function () {
        alert.style.color = "#ff3333";
        alert.innerText = "After writing comment, press enter to submit. Write as many and as much as you want!";        
    }
    comment.onblur = function () {
        alert.innerText = "";
    };
    $(comment).on("keypress", function (event) {
        if (event.keyCode === 13) {
            var input = $(comment).val();
            if (input) {
                alert.style.color = "#33aa33";
                alert.innerText = input + "\nSubmitted!";
            }
            else {
                alert.style.color = "#ff3333";
                alert.innerText = "Looks like you haven't written anything! Do write something and then press enter."
            }
        }
    });
};

window.onresize = function () {
    window.div1Y = document.getElementById("div1").getBoundingClientRect().y;
    window.div2Y = document.getElementById("div2").getBoundingClientRect().y;
    window.div3Y = document.getElementById("div3").getBoundingClientRect().y;
    window.commentsY = document.getElementById("comments").getBoundingClientRect().y;
    window.socialY = document.getElementById("social").getBoundingClientRect().y;    
}