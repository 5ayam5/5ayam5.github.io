window.onload = function () {
    var $root = $("html, body");

    var comment = document.getElementById("comment");
    var alert = document.getElementById("alert");

    window.div1Y = document.getElementById("div1").getBoundingClientRect().y;
    window.div2Y = document.getElementById("div2").getBoundingClientRect().y;
    window.div3Y = document.getElementById("div3").getBoundingClientRect().y;
    window.commentsY = document.getElementById("comments").getBoundingClientRect().y;
    window.socialY = document.getElementById("social").getBoundingClientRect().y;

    window.offset = $(document.getElementById("navbar")).offset().top;
    window.social = document.getElementById("ref_social");
    window.comments = document.getElementById("ref_comments");
    window.div3 = document.getElementById("ref_div3");
    window.div2 = document.getElementById("ref_div2");
    window.div1 = document.getElementById("ref_div1");
    window.home = document.getElementById("navbarhome");
    window.navbar = document.getElementById("navbar");

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
        window.social.style.backgroundColor = window.navbar.style.backgroundColor;
        window.comments.style.backgroundColor = window.navbar.style.backgroundColor;
        window.div3.style.backgroundColor = window.navbar.style.backgroundColor;
        window.div2.style.backgroundColor = window.navbar.style.backgroundColor;
        window.div1.style.backgroundColor = window.navbar.style.backgroundColor;
        window.home.style.backgroundColor = "#cccccc";

        if (window.socialY - window.offset <= 1) {
            window.social.style.backgroundColor = "#227722";
        }
        else if (window.commentsY - window.offset <= 1) {
            window.comments.style.backgroundColor = "#227722";
        }
        else if (window.div3Y - window.offset <= 1) {
            window.div3.style.backgroundColor = "#227722";
        }
        else if (window.div2Y - window.offset <= 1) {
            window.div2.style.backgroundColor = "#227722";
        }
        else if (window.div1Y - window.offset <= 1) {
            window.div1.style.backgroundColor = "#227722";
        }
        else {
            window.home.style.backgroundColor = "#cceecc";
        }
    });

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
                $(comment).val("");
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

    window.offset = $(document.getElementById("navbar")).offset().top;
}