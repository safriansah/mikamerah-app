/* =========================================================
* Argon Design System Pro - v1.0.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-pro
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 ========================================================= */

//# sourceMappingURL=_site_kit_pro/assets/js/kit-pro.js.map
var big_image, navbar_initialized, didScroll, transparent = !0,
    transparentDemo = !0,
    fixedTop = !1,
    backgroundOrange = !1,
    toggle_initialized = !1,
    $datepicker = $(".datepicker"),
    $collapse = $(".navbar .collapse"),
    $html = $("html"),
    $tagsinput = $(".tagsinput");

function up(e) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1, document.getElementById("myNumber").value >= parseInt(e) && (document.getElementById("myNumber").value = e)
}

function down(e) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1, document.getElementById("myNumber").value <= parseInt(e) && (document.getElementById("myNumber").value = e)
}

function debounce(l, a, o) {
    var r;
    return function() {
        var e = this,
            t = arguments;
        clearTimeout(r), r = setTimeout(function() {
            r = null, o || l.apply(e, t)
        }, a), o && !r && l.apply(e, t)
    }
} - 1 < navigator.platform.indexOf("Win") ? ($(".wrapper .login-page, .register-page, .card").perfectScrollbar(), 0 != $(".tab-content .table-responsive").length && $(".table-responsive").each(function() {
    new PerfectScrollbar($(this)[0])
}), $html.addClass("perfect-scrollbar-on")) : $html.addClass("perfect-scrollbar-off"), $(document).ready(function() {
    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
        var t = $(this),
            l = $(this).offsetParent(".dropdown-menu");
        return $(this).next().hasClass("show") || $(this).parents(".dropdown-menu").first().find(".show").removeClass("show"), $(this).next(".dropdown-menu").toggleClass("show"), $(this).closest("a").toggleClass("open"), $(this).parents("a.dropdown-item.dropdown.show").on("hidden.bs.dropdown", function(e) {
            $(".dropdown-menu .show").removeClass("show")
        }), l.parent().hasClass("navbar-nav") || t.next().css({
            top: t[0].offsetTop,
            left: l.outerWidth() - 4
        }), !1
    });
    (e = $(".form-control")).length && e.on("focus blur", function(e) {
        $(this).parents(".form-group").toggleClass("focused", "focus" === e.type)
    }).trigger("blur");
    flatpickr(".flatpickr", {}), flatpickr(".range", {
        mode: "range"
    }), flatpickr(".datetimepicker", {
        enableTime: !0,
        dateFormat: "Y-m-d H:i"
    }), $(".headroom")[0] && new Headroom(document.querySelector("#navbar-main"), {
        offset: 300,
        tolerance: {
            up: 30,
            down: 30
        }
    }).init(), $("#choices-single-default")[0] && new Choices("#choices-single-default", {
        search: !1
    }), $("#choices-multiple-default")[0] && new Choices("#choices-multiple-default", {
        search: !0,
        delimiter: ",",
        editItems: !0,
        removeItemButton: !0
    }), $("#badges")[0] && new Choices("#badges", {
        delimiter: ",",
        editItems: !0,
        maxItems: 5,
        removeButton: !0,
        removeItemButton: !0
    }), ArgonKit.initSliders(), $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });
    e = $('[data-toggle="popover"]'), l = "", e.length && e.each(function() {
        ! function(e) {
            e.data("color") && (l = "popover-" + e.data("color"));
            var t = {
                trigger: "focus",
                template: '<div class="popover ' + l + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            };
            e.popover(t)
        }($(this))
    });
    var e, l, t = $(".back-to-top");
    $(window).scroll(function() {
        300 < $(window).scrollTop() ? t.addClass("show") : t.removeClass("show")
    }), t.on("click", function(e) {
        e.preventDefault(), $("html, body").animate({
            scrollTop: 0
        }, "300")
    })
}), $(document).on("click", ".card-rotate .btn-rotate", function() {
    var e = $(this).closest(".rotating-card-container");
    e.hasClass("hover") ? e.removeClass("hover") : e.addClass("hover")
}), ArgonKit = {
    misc: {
        navbar_menu_visible: 0
    },
    checkScrollForTransparentNavbar: debounce(function() {
        $(document).scrollTop() > scroll_distance ? transparent && (transparent = !1, $(".navbar[color-on-scroll]").removeClass("navbar-transparent")) : transparent || (transparent = !0, $(".navbar[color-on-scroll]").addClass("navbar-transparent"))
    }, 17),
    initSliders: function() {
        var e = document.getElementById("sliderRegular");
        e && noUiSlider.create(e, {
            start: 40,
            connect: [!0, !1],
            range: {
                min: 0,
                max: 100
            }
        });
        var t = document.getElementById("sliderDouble");
        e && noUiSlider.create(t, {
            start: [20, 60],
            connect: !0,
            range: {
                min: 0,
                max: 100
            }
        })
    },
    initGoogleMaps: function() {
        var e = new google.maps.LatLng(40.748817, -73.985428),
            t = {
                zoom: 13,
                center: e,
                scrollwheel: !1,
                styles: [{
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#444444"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{
                        color: "#f2f2f2"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 45
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                        color: "#C5CBF5"
                    }, {
                        visibility: "on"
                    }]
                }]
            },
            t = new google.maps.Map(document.getElementById("map-contactus-1"), t);
        new google.maps.Marker({
            position: e,
            title: "Hello World!"
        }).setMap(t)
    },
    initGoogleMaps2: function() {
        var e = new google.maps.LatLng(40.748817, -73.985428),
            t = {
                zoom: 13,
                center: e,
                scrollwheel: !1,
                styles: [{
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#444444"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{
                        color: "#f2f2f2"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 45
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                        color: "#C5CBF5"
                    }, {
                        visibility: "on"
                    }]
                }]
            },
            t = new google.maps.Map(document.getElementById("map-contactus-2"), t);
        new google.maps.Marker({
            position: e,
            title: "Hello World!"
        }).setMap(t)
    },
    initGoogleMaps3: function() {
        var e = new google.maps.LatLng(40.748817, -73.985428),
            t = {
                zoom: 13,
                center: e,
                scrollwheel: !1,
                styles: [{
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{
                        color: "#444444"
                    }]
                }, {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{
                        color: "#f2f2f2"
                    }]
                }, {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 45
                    }]
                }, {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{
                        visibility: "simplified"
                    }]
                }, {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{
                        visibility: "off"
                    }]
                }, {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{
                        color: "#C5CBF5"
                    }, {
                        visibility: "on"
                    }]
                }]
            },
            t = new google.maps.Map(document.getElementById("map-contactus-3"), t);
        new google.maps.Marker({
            position: e,
            title: "Hello World!"
        }).setMap(t)
    }
}; 