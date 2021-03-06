window.onload = function () {
    var $root = $("html, body");

    var comment = document.getElementById("comment");
    var alert = document.getElementById("alert");
    window.input = "";

    window.div1Y = document.getElementById("div1").getBoundingClientRect().y;
    window.div2Y = document.getElementById("div2").getBoundingClientRect().y;
    window.div3Y = document.getElementById("div3").getBoundingClientRect().y;
    window.commentsY = document.getElementById("comments").getBoundingClientRect().y;
    window.socialY = document.getElementById("social").getBoundingClientRect().y;

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
        window.offset = $(document.getElementById("navbar")).offset().top;

        window.social.style.backgroundColor = window.navbar.style.backgroundColor;
        window.comments.style.backgroundColor = window.navbar.style.backgroundColor;
        window.div3.style.backgroundColor = window.navbar.style.backgroundColor;
        window.div2.style.backgroundColor = window.navbar.style.backgroundColor;
        window.div1.style.backgroundColor = window.navbar.style.backgroundColor;
        window.home.style.backgroundColor = "#cccccc";

        if (window.socialY - window.offset <= 16) {
            window.social.style.backgroundColor = "#227722";
        }
        else if (window.commentsY - window.offset <= 16) {
            window.comments.style.backgroundColor = "#227722";
        }
        else if (window.div3Y - window.offset <= 16) {
            window.div3.style.backgroundColor = "#227722";
        }
        else if (window.div2Y - window.offset <= 16) {
            window.div2.style.backgroundColor = "#227722";
        }
        else if (window.div1Y - window.offset <= 16) {
            window.div1.style.backgroundColor = "#227722";
        }
        else {
            window.home.style.backgroundColor = "#cceecc";
        }
    });

    comment.onfocus = function () {
        if (!window.input) {
            alert.style.color = "#aa3333";
            alert.innerText = "After writing comment, press enter to submit. Write as many and as much as you want!";
        }
        else {
            alert.style.color = "#33aa33";
            alert.innerText = window.input;
        }
    };
    comment.onblur = function () {
        if (!window.input) {
            alert.innerText = "";
        }
    };
    $(comment).on("keypress", function (event) {
        if (event.keyCode === 13) {
            var input = $(comment).val();
            if (input) {
                var dateAndTime = new Date();
                window.input = dateAndTime.getDate() + "/" + dateAndTime.getMonth() + "/" + dateAndTime.getFullYear() + " " + dateAndTime.getHours() + ":" + dateAndTime.getMinutes() + ":" + dateAndTime.getSeconds() + " - " + input + "\n" + window.input;
                alert.style.color = "#33aa33";
                alert.innerText = window.input;
                $(comment).val("");
            }
        }
    });

    $(document.getElementById("facebook")).on("click", function () {
        window.open("https://www.facebook.com")
    });
    $(document.getElementById("instagram")).on("click", function () {
        window.open("https://www.instagram.com")
    });
    $(document.getElementById("twitter")).on("click", function () {
        window.open("https://www.twitter.com")
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