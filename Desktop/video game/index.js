$(document).ready(function () {
    let heart = 20;
    let points = 0;

    $("a").click(function () {

        $('.game__timing').empty();
        $('.game__user_points').empty();
        $('.try').addClass('game');
        $('.try1').addClass('game__user');
        $('.try2').addClass('game__fields');
        $('.try3').addClass('game__timing');
        $('.try4').addClass('game__field');
        $('.try5').addClass('game__user_points');
        $('.try7').addClass('game__circle1');
        $('.try9').addClass('game__circle2');
        $('.try10').addClass('game__circle3');
        $('.try11').addClass('game__circle4');
        $('.try12').addClass('game__circle5');
        $('.try13').addClass('game__circle6');
        $('.try14').addClass('game__circle7');
        $('.try15').addClass('game__circle8');
        $('.try16').addClass('game__circle9');
        $('.try25').addClass('game__time');



        $('.try8').addClass('game__board');
        $('.hide-image').removeClass('hide-image').addClass('game__board');

        function moveElement(el) {
            setInterval(function () {
                var height1 = $('.game__field').offset().top
                var width1 = $('.game__field').offset().left;
                var width2 = $('.game__field').width();
                var height2 = $('.game__field').height() - $(el).height();
                var randomVertical = Math.floor(Math.random() * (height2 - height1)) + 200;
                var randomHorizontal = Math.floor(Math.random() * (width2 - width1) + 50);
                $(el).css({
                    'top': randomVertical + 'px',
                    'left': randomHorizontal + 'px'
                })
            }, 800)
        }

        elements = [$('.game__circle1'), $('.game__circle2'), $('.game__circle3'), $('.game__circle4'), $('.game__circle5'), $('.game__circle6'), $('.game__circle7'), $('.game__circle8'), $('.game__circle9')];
        console.log(elements.length)
        for (let i = 0; i < elements.length; i++) {
            moveElement(elements[i]);
        }


        $('.game__timing').append("<p>Lives: </p>" + heart);
        $('.game__user_points').append("<p> Cought Fishes: </p>");

        var userName = $('.form__field').val();
        if (userName == "") {
            $('.game__user').text("Player: Bob Ross");
        } else {
            $('.game__user').text("Player: " + userName);
        }
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({
            scrollTop: destination
        }, 800);


        $(".game__circle1").click(function () {
            $(".game__circle1").addClass('hide__circle');
            points = points + 50;
            $('.game__user_points').empty().append(points);
            if (points >= 180) {
                $('.game__field').removeClass('game__field');
                $('.try4').addClass('winner');
                $('.winner').text('Congratulations!!! You caught: ' + points + ' fishes').css("font-size", "3rem").css("text-align", "center");
            };

        });
        $(".game__circle2").click(function () {
            $(".game__circle2").addClass('hide__circle');
            points = points + 50;
            $('.game__user_points').empty().append(points);
            if (points >= 180) {
                $('.game__field').removeClass('game__field');
                $('.try4').addClass('winner');
                $('.winner').text('Congratulations!!! You caught: ' + points + ' fishes').css("font-size", "3rem").css("text-align", "center");
            };
        });

        $(".game__circle3").click(function () {
            $(".game__circle3").addClass('hide__circle');
            points = points + 50;
            $('.game__user_points').empty().append(points);
            if (points >= 180) {
                $('.game__field').removeClass('game__field');
                $('.try4').addClass('winner');
                $('.winner').text('Congratulations!!! You caught: ' + points + ' fishes').css("font-size", "3rem").css("text-align", "center");
            };
        });
        $(".game__circle4").click(function () {
            $(".game__circle4").addClass('hide__circle');
            points = points + 25;
            $('.game__user_points').empty().append(points);
            if (points >= 180) {
                $('.game__field').removeClass('game__field');
                $('.try4').addClass('winner');
                $('.winner').text('Congratulations!!! You caught: ' + points + ' fishes').css("font-size", "3rem").css("text-align", "center");
            };
        });
        $(".game__circle5").click(function () {
            $(".game__circle5").addClass('hide__circle');
            points = points + 25;
            $('.game__user_points').empty().append(points);
            if (points >= 180) {
                $('.game__field').removeClass('game__field');
                $('.try4').addClass('winner');
                $('.winner').text('Congratulations!!! You caught: ' + points + ' fishes').css("font-size", "3rem").css("text-align", "center");
            };
        });
        $(".game__circle6").click(function () {
            $(".game__circle6").addClass('hide__circle');
            points = points + 25;
            $('.game__user_points').empty().append(points);
            if (points >= 180) {
                $('.game__field').removeClass('game__field');
                $('.try4').addClass('winner');
                $('.winner').text('Congratulations!!! You caught: ' + points + ' fishes').css("font-size", "3rem").css("text-align", "center");
            };
        });

        $(".game__circle7").click(function () {
            $(".game__circle7").addClass('hide__circle');
            points = points + 15;
            $('.game__user_points').empty().append(points);
            if (points >= 180) {
                $('.game__field').removeClass('game__field');
                $('.try4').addClass('winner');
                $('.winner').text('Congratulations!!! You caught: ' + points + ' fishes').css("font-size", "3rem").css("text-align", "center");
            };
        });

        $(".game__circle8").click(function () {
            $(".game__circle8").addClass('hide__circle');
            points = points + 15;
            $('.game__user_points').empty().append(points);
            if (points >= 180) {
                $('.game__field').removeClass('game__field');
                $('.try4').addClass('winner');
                $('.winner').text('Congratulations!!! You caught: ' + points + ' fishes').css("font-size", "3rem").css("text-align", "center");
            };
        });

        $(".game__circle9").click(function () {
            $(".game__circle9").addClass('hide__circle');
            points = points + 15;
            $('.game__user_points').empty().append(points);
            if (points >= 180) {
                $('.game__field').removeClass('game__field');
                $('.try4').addClass('winner');
                $('.winner').text('Congratulations!!! You caught: ' + points + ' fishes').css("font-size", "3rem").css("text-align", "center");
            };
        });


        $(".game__field").click(function () {
            heart = heart - 1;
            $(".game__timing").empty().append("<p>Lives</p>" + heart);
            if (heart <= 0) {
                $(".game__field").removeClass('game__field');
                $(".try4").addClass('gameover');

                $(".gameover").text('Game Over').append("<p>Your Points: " + points + "<p>").css("text-align", "center").css("font-size", "3rem");
            }
        })



        let time = setInterval(() => {
            let overTime = Number($('.game__time').text())
            $('.game__time').text(overTime - 1);
            console.log(overTime)
            if (Number($('.game__time').text() == 0)) {
                $('.game__field').removeClass('.game__field').addClass("gameover").text('Game Over')
                $(".gameover").text('Game Over').append("<p>Your Points: " + points + "<p>").css("text-align", "center").css("font-size", "3rem");

                clearInterval(time)
            }
        }, 1000)
        return false;
    });

});