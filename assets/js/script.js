$(function () {
    var offset = $("#contactTarget").offset();
    var top = offset.top;
    var offset2 = $("#team-target").offset();
    var top2 = offset2.top;

    

    $(document).on('scroll', function () {
        let topScroll = $(document).scrollTop();

        if (topScroll > top - 500) {
            $("#contactTarget .numbers").each(function () {
                let num = $(this).find("h1").data('num');
                let temp = 0;
                let step = num / 100;
                let i = 0;
                let numElement = $(this);

                let interval = setInterval(function () {
                    if (i == 100) {
                        clearInterval(interval);
                    }

                    temp = temp + step;
                    $(numElement).find("h1").text("+" + ~~temp);
                    i++;
                }, 10);

            });

            $(this).off("scroll");
        }
    })

    $("#contactBtn").on('click', function () {
        $('html, body').animate({
            scrollTop: top-100
        }, 2000);
    })



    $("#serviceBtn").on('click', function () {
        $('html, body').animate({
            scrollTop: top2+50
        },2000);
    })

    $("#serviceBtn2").on('click', function () {
        $('html, body').animate({
            scrollTop: top2+50
        },2000);
    })

    $("#serviceBtn3").on('click', function () {
        $('html, body').animate({
            scrollTop: top2+50
        },2000);
    })
});