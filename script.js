var audio = new Audio('Media/Musik.mp3');
var audioPlay = true;
var cti = 0;

function timerUpdate() {
    var currentdate = new Date();
    var minutes = currentdate.getMinutes() + "";
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }

    var timestr = currentdate.getHours() + ":" + minutes;
    var datestr = formatDate(currentdate);

    $(".Time").html(timestr);
    $(".Date").html(datestr);

}

var interval = setInterval(function () {
    timerUpdate();
}, 1000);



$(document).ready(function () {

    var currentdate = new Date();
    var minutes = currentdate.getMinutes() + "";
    if (minutes.length < 2) {
        minutes = "0" + minutes;
    }
    var timestr = currentdate.getHours() + ":" + minutes;
    var datestr = formatDate(currentdate);

    $(".Time").html(timestr);
    $(".Date").html(datestr);

    var fn1 = $.fn.roundSlider.prototype._setProperties;
    $.fn.roundSlider.prototype._setProperties = function () {
        fn1.apply(this);

        var o = this.options,
            r = o.radius,
            d = r * 2,
            r1 = r - (o.width / 2) - this._border(true),
            svgNS = "http://www.w3.org/2000/svg";
        this._circum = Math.PI * (r1 * 3.333);
        var $circle = this._$circle = $(document.createElementNS(svgNS, 'circle'));
        $circle.attr({
            "fill": "transparent",
            "class": "rs-transition",
            "cx": r,
            "cy": r,
            "r": r1,
            "stroke-width": o.width,
            "stroke-dasharray": this._circum
        }).css({
            "transform-origin": "50% 50%",
            "transform": "rotate(" + (o.startAngle + 180) + "deg)"
        });
        var $svg = $(document.createElementNS(svgNS, "svg"));
        $svg.attr({
            "height": d,
            "width": d
        }).append($circle);
        this.innerContainer.append($svg);
    }

    var fn2 = $.fn.roundSlider.prototype._changeSliderValue;
    $.fn.roundSlider.prototype._changeSliderValue = function () {
        fn2.apply(this, arguments);

        var pct = ((100 - this.options.value) / 100) * this._circum;
        this._$circle.css({
            strokeDashoffset: pct
        });
    }



    $("#slider").roundSlider({
        handleShape: "round",
        editableTooltip: false,
        width: 14,
        radius: 80,
        value: 23,
        lineCap: "round",
        handleSize: "+12",
        circleShape: "half-top",
        max: 30,
        tooltipFormat: function (e) {
            return e.value + "&nbsp;&#8451; ";
        },




    });


    $("#slider2").roundSlider({
        handleShape: "round",
        editableTooltip: false,
        width: 14,
        radius: 80,
        value: 23,
        max: 30,
        lineCap: "round",
        handleSize: "+12",
        circleShape: "half-top",

        tooltipFormat: function (e) {
            return e.value + "&nbsp;&#8451; ";
        }
    });

});

function animateInspektionAuto() {
    $("#InspektionAuto").addClass("opc");
    setTimeout(function () {
        $("#InspektionAuto").removeClass("opc");
        $("#InspektionAuto").addClass("animated fadeInLeft fast");
    }, 500);
}

function formatDate(date) {
    var monthNames = [
        "Januar", "Februar", "März",
        "April", "Mai", "Juni", "Juli",
        "August", "September", "Oktober",
        "November", "Dezember"
    ];

    var dayNames = [
        "Sonntag", "Montag", "Dienstag", "Mittwoch",
        "Donnerstag", "Freitag", "Samstag"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var dayIndex = date.getDay();
    var year = date.getFullYear();

    return dayNames[dayIndex] + ', ' + day + '. ' + monthNames[monthIndex];
}

function showContent(id) {
    $(id).toggleClass("invis");
}

function slideLeft(id) {
    var current = parseInt($(id).css("left"));
    var next = current - 300 + "px";
    $(id).css("left", next);
}

function slideRight(id) {
    var current = parseInt($(id).css("left"));
    //alert(current);
    if (current < 0) {
        //var next = current + 300 + "px";
        $(id).css("left", 0);



        setTimeout(function () {
            addInvisToAll();
        }, 500);

    } //next);}
}

function animateHZBtn(i) {
    $("#HeizungBtn").children().eq(i).addClass("animated fadeInDown faster");
    $("#HeizungBtn").children().eq(i).removeClass("invis");
}

function animateHZBtns() {
    setTimeout(function () {
        animateHZBtn(0);
    }, 0);
    setTimeout(function () {
        animateHZBtn(1);
    }, 100);
    setTimeout(function () {
        animateHZBtn(2);
    }, 200);

    $("#AT").addClass("animated fadeInUp faster");
    $("#IT").addClass("animated fadeInDown faster");
}




function animateRchwBtn(i) {
    $("#ReichweiteBtn").children().eq(i).addClass("animated fadeInDown faster");
    $("#ReichweiteBtn").children().eq(i).removeClass("invis");
}

function animateRchwBtns() {
    setTimeout(function () {
        animateRchwBtn(0);
    }, 0);
    setTimeout(function () {
        animateRchwBtn(1);
    }, 100);
    setTimeout(function () {
        animateRchwBtn(2);
    }, 200);

    $("#rchwtKm").addClass("animated fadeInUp faster");
    $("#rchwtVb").addClass("animated fadeInDown faster");
}


function animateInfoBtn(i) {
    $("#FahrzeugInfoBtn").children().eq(i).addClass("animated fadeInDown faster");
    $("#FahrzeugInfoBtn").children().eq(i).removeClass("invis");
}

function animateInfoBtns() {
    setTimeout(function () {
        animateInfoBtn(0);
    }, 0);
    setTimeout(function () {
        animateInfoBtn(1);
    }, 100);
    setTimeout(function () {
        animateInfoBtn(2);
    }, 200);
}

function animateMusikPlayer(i) {
    $("#MusikPlayerBtn").children().eq(i).addClass("animated fadeInDown faster");
    $("#MusikPlayerBtn").children().eq(i).removeClass("invis");
}

function animateMusikPlaylist() {
    setTimeout(function () {
        animateMusikPlayer(0);
    }, 0);
    setTimeout(function () {
        animateMusikPlayer(1);
    }, 100);
    setTimeout(function () {
        animateMusikPlayer(2);
    }, 200);
    setTimeout(function () {
        animateMusikPlayer(3);
    }, 300)

}


function animateMotorStarten() {
    setTimeout(function () {
        $("#StartEngine").addClass("animated zoomIn fast");
    }, 0);
    setTimeout(function () {
        $("#EngineStatus").addClass("animated fadeInUp fast");
    }, 100);


}




function animateSlidersIn() {

    setTimeout(function () {
        fadeinright("#TempSlider1");
    }, 100);

    setTimeout(function () {
        fadeinright("#TempSlider2");
    }, 200);

}

function fadeinleft(id) {
    $(id).toggleClass("invis");
    $(id).addClass("animated fadeInLeft fast");

}

function fadeinright(id) {
    $(id).removeClass("invis");
    $(id).addClass("animated fadeInRight fast");

}



function animateAkku() {
    $("#akkuFuellung").css("left", "+=0px");
    $("#akkuFuellung").css("transform", "scale(1, 0.7)");

    $("#km").addClass("animated fadeInUp faster");
    $("#verbleibende").addClass("animated fadeInDown faster");
}


function engine() {
    var on = "Start<br>Engine";
    var off = "Stop<br>Engine";

    $("#grad").toggleClass("horizGradientInverse");
    $("#grad").toggleClass("horizGradient");
    var cur = $("#engineText").text();


    if (cur == "StartEngine") {

        $("#engineText").html(off);
        $("#EngineStatus").html("Motor ist an");

    } else {

        $("#engineText").html(on);
        $("#EngineStatus").html("Motor ist aus");
    }

}

function audioPlayer() {
    moveCTI(1);
    audio.play();
}

function moveCTI(x) {
    $("#cti").animate({
        "left": 222
    }, 208000, "linear");
    $("#Timeline-White").animate({
        "width": "188px"
    }, 208000, "linear");

}

function audioPlayerPause() {
    if (audioPlay == true) {

        audio.pause();
        audioPlay = false

        $("#cti").pause();
        $("#Timeline-White").pause();


    } else {
        $("#cti").resume();
        $("#Timeline-White").resume();
        audio.play();
        audioPlay = true;

    }
    $("#play").toggleClass("invis");
    $("#pause").toggleClass("invis");


}







function setUpStats() {
    var margin = {
            top: 100,
            right: 100,
            bottom: 100,
            left: 100
        },
        width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
        height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    var valJan = 2516,
        valFeb = 3124,
        valMär = 3526,
        valApr = 3014,
        valMai = 3563,
        valJun = 2511,
        valJul = 2036,
        valAug = 2508,
        valSep = 3501,
        valOkt = 4510,
        valNov = 4009,
        valDez = 3534;

    var data = [
        [{
                axis: "Jan",
                value: valJan
            },
            {
                axis: "Feb",
                value: valFeb
            },
            {
                axis: "Mär",
                value: valMär
            },
            {
                axis: "Apr",
                value: valApr
            },
            {
                axis: "Mai",
                value: valMai
            },
            {
                axis: "Jun",
                value: valJun
            },
            {
                axis: "Jul",
                value: valJul
            },
            {
                axis: "Aug",
                value: valAug
            },
            {
                axis: "Sep",
                value: valSep
            },
            {
                axis: "Okt",
                value: valOkt
            },
            {
                axis: "Nov",
                value: valNov
            },
            {
                axis: "Dez",
                value: valDez
            },
        ]
    ];

    var color = d3.scale.ordinal().range(["#012e53", "#012e53", "#012e53"]);

    var radarChartOptions = {
        w: 150,
        h: 150,
        margin: margin,
        maxValue: 0.5,
        levels: 5,
        roundStrokes: true,
        color: color,
        animationEnabled: true,
        animation: {
            duration: 5000,
            easing: "easeInBounce",
        }
    };

    RadarChart(".radarChart", data, radarChartOptions);


}



function animateStats() {
    $(".radarChart").addClass("statsAnimation");
}

function animateStartEngine() {

    $("#grad").css("transform", "scale(0.95)");

    setTimeout(function () {

        $("#grad").css("transform", "scale(1)");

    }, 100);

}

function addInvisToAll() {

    $("#Heizung").addClass("invis");
    $("#MotorStarten").addClass("invis");
    $("#FahrzeugInfo").addClass("invis");
    $("#Reichweite").addClass("invis");
    $("#Musik").addClass("invis");
    $("#Akkustand").addClass("invis");
    $("#OelStand").addClass("invis");
    $("#Inspektion").addClass("invis");
    $("#MusikAuswahl").addClass("invis");
    $("#Statistiken").addClass("invis");
    $("#Werkstatt").addClass("invis");
    $("#Ladestation").addClass("invis");
    $("#Temperatur").addClass("invis");

    $("#MusikPlayerBtn").children().addClass("invis");
    $("#FahrzeugInfoBtn").children().addClass("invis");
    $("#HeizungBtn").children().addClass("invis");
    $("#ReichweiteBtn").children().addClass("invis");
    $("#TempSlider2").addClass("invis");
}


function initMap() {

    //map_ladestation
    var map_ladestation = new google.maps.Map(document.getElementById("map_ladestation"), {
        center: {
            lat: 51.672693,
            lng: 8.364060
        },
        zoom: 16,
        disableDefaultUI: true
    });

    var markerIcon_ladestation = {
        url: "Images/marker.png",
        scaledSize: new google.maps.Size(64, 64)
    };
    var popupContent_ladestation = "Ladestation";
    var infoPopup_ladestation = new google.maps.InfoWindow({
        content: popupContent_ladestation
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 51.673489,
            lng: 8.364748
        },
        map: map_ladestation,
        title: "Ladestation",
        icon: markerIcon_ladestation,
    });
    marker.addListener("click", function () {
        infoPopup_ladestation.open(map_ladestation, marker);
    });

    var marker2 = new google.maps.Marker({
        position: {
            lat: 51.672391,
            lng: 8.359893
        },
        map: map_ladestation,
        title: "Ladestation",
        icon: markerIcon_ladestation,
    });
    marker2.addListener("click", function () {
        infoPopup_ladestation.open(map_ladestation, marker2);
    });

    var marker3 = new google.maps.Marker({
        position: {
            lat: 51.670961,
            lng: 8.349389
        },
        map: map_ladestation,
        title: "Ladestation",
        icon: markerIcon_ladestation,
    });
    marker3.addListener("click", function () {
        infoPopup_ladestation.open(map_ladestation, marker3);
    });

    var marker4 = new google.maps.Marker({
        position: {
            lat: 51.671953,
            lng: 8.366345
        },
        map: map_ladestation,
        title: "Ladestation",
        icon: markerIcon_ladestation,
    });
    marker4.addListener("click", function () {
        infoPopup_ladestation.open(map_ladestation, marker4);
    });



    //map_werkstatt
    var map_werkstatt = new google.maps.Map(document.getElementById("map_werkstatt"), {
        center: {
            lat: 51.671559,
            lng: 8.360010
        },
        zoom: 16,
        disableDefaultUI: true
    });

    var markerIcon_werkstatt = {
        url: "Images/markerw.png",
        scaledSize: new google.maps.Size(64, 64)
    };
    var popupContent_werkstatt = "Werkstatt";
    var infoPopup_werkstatt = new google.maps.InfoWindow({
        content: popupContent_werkstatt
    });

    var marker_werkstatt = new google.maps.Marker({
        position: {
            lat: 51.671705,
            lng: 8.365314
        },
        map: map_werkstatt,
        title: "Werkstatt",
        icon: markerIcon_werkstatt,
    });
    marker_werkstatt.addListener("click", function () {
        infoPopup_werkstatt.open(map_werkstatt, marker_werkstatt);
    });

    var marker2_werkstatt = new google.maps.Marker({
        position: {
            lat: 51.672391,
            lng: 8.359893
        },
        map: map_werkstatt,
        title: "Werkstatt",
        icon: markerIcon_werkstatt,
    });
    marker2_werkstatt.addListener("click", function () {
        infoPopup_werkstatt.open(map_werkstatt, marker2_werkstatt);
    });

}