$(function() {

    function Shop() {
        this.init();
    }

    Shop.prototype = {
        constructor: Shop,

        init: function() {
            this.BScroll();
            this.mySwiper();
            this.clickTypeMark();
            this.jump_turn();
        },

        BScroll: function() {
            console.log(2)
            var BS = new BScroll('main', {
                click: true,
                probeType: 2,
            });

            var BS2 = new BScroll('.m-tit-left', {
                click: true,
                scrollX: true,
                startX: true,
            });
        },

        mySwiper: function() {
            var mySwiper = new Swiper('.m-banner', {
                autoplay: true,
                click: true,
            })
        },

        clickTypeMark: function() {

            $('.typemark-off').click(function() {
                $('.typeMark').show();
            });

            $('.mark-tit>i').click(function() {
                $('.typeMark').hide();
            })
        },

        jump_turn: function() {
            var lg = window.localStorage;
            $('.icon-gouwuche').click(function() {
                window.location.href = 'shopCat.html';
            });
        }
    }

    new Shop();

})