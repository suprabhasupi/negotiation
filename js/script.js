var houses = {
    'h1': {
        'bid': '$12312',
        'date': '28 Sept 2016',
        'location': 'bangalore',
        'area': '12312 sq feet',
        'buildYear': '2011',
        'bedroom': '3',
        'img': ['img/home33.jpg', 'img/img2b.jpg', 'img/img2c.jpg']
    },
    'h2': {
        'bid': '$22312',
        'date': '28 Sept 2016',
        'location': 'bangalore',
        'area': '12312 sq feet',
        'buildYear': '2014',
        'bedroom': '5',
        'img': ['img/img3a.jpg', 'img/img3b.jpg', 'img/img3c.jpg']
    },
    'h3': {
        'bid': '$32312',
        'date': '28 Sept 2016',
        'location': 'bangalore',
        'area': '12312 sq feet',
        'buildYear': '2013',
        'bedroom': '2',
        'img': ['img/img4a.jpg', 'img/img4b.jpg', 'img/img4c.jpg']
    }
}

var update_image = function(n) {
    // console.log("value of n =>", n);
    switch (n) {
        case 1:
            srcReplace(houses.h1);
            break;
        case 2:
            srcReplace(houses.h2);
            break;
        case 3:
            srcReplace(houses.h3);
            break;
        default:
            // console.log("something went wrong");
    }

}

var srcReplace = function(house) {
    var carousel = $('.carousel-item img');
    var bid = $('.td_buyer+td')[0];
    var date = $('.td_buyer+td')[1];
    var location = $('.td_buyer+td')[2];
    var area = $('.td_buyer+td')[3];
    var buildYear = $('.td_buyer+td')[4];
    var bedroom = $('.td_buyer+td')[5];

    carousel.each(function(e, e1) {
        $(this).attr("src", house.img[e]);
    });

    $('#td_bid').text(house.bid);
    $('#td_date').text(house.date);
    $('#td_location').text(house.location);
    $('#td_area').text(house.area);
    $('#td_bedroom').text(house.bedroom);
    $('#td_buildYear').text(house.buildYear)

}
$('.bid_btn').click(function() {
    var val = $('#property_details #amount').val();
    $("#conf_bid").text(val);
});
$('.contnu').click(function() {
    $('#options_list').fadeIn();
});

$('.ownerLogin').click(function() {
    // console.log("Owner Click")
    $('#owner').fadeIn();
});
$('.property_form').click(function() {
    // console.log("agree");
    $('#buyerlist').fadeIn();
});
$('.confirm_btn').click(function() {
    // console.log("confirm_btn click");
    $('#owner_end').fadeIn();
});
$('.search_btn').click(function() {
    $('#seller_list').fadeIn();
});

$('.owner_back').click(function() {
    $('#owner').fadeOut();
});
$('.detail_btn').click(function() {
    // console.log("detail_btn clicked", $(this).data("house"));
    update_image(parseInt($(this).data("house")));
    $('#property_details').fadeIn();
});

$('.buyerLogin').click(function() {
    // console.log("Buy clicked");
    $('.first_page').fadeOut();
    $('.buyer').fadeIn();

});
$('.buyer_back').click(function() {
    $('.buyer').fadeOut();
    $('.first_page').fadeIn();
});
$('.set_back').click(function() {
    $('#set_submission').fadeOut();
});
$('.unhappy_back').click(function() {
    $("#unsubmission_file").fadeOut();
});
$('.happy_back').click(function() {
    $('#submitted_successfully_fil').fadeOut();
});


$('.property_back').click(function() {
    $('#buyerlist').fadeOut();
});
$('.property_details_back').click(function() {
    $('#property_details').fadeOut();
});
$('.options_list_back').click(function() {
    $('#options_list').fadeOut();
});
$(".bidding_back").click(function() {
    $('#bidder_bid3_file').fadeOut();
});
$(".seller_list_back").click(function() {
    $('#seller_list').fadeOut();
});
$('#confirm_bid').click(function() {
    // console.log("confirm_bid is clicked ");
    $("#bidlist").fadeIn();
})

$('.confirm_back').click(function() {
    $('#bidlist').fadeOut();
});

$("#updated_bid").click(function(e) {
    e.preventDefault();
    if ($(".updated_bid")[0].checkValidity()) {
        $("#negotiate_modal").modal('toggle');
        $("#message_screen").fadeIn();
    } else {
        $(".updated_bid").css("border", "3px solid red");
    }
});

$('.update_back').click(function() {
    $('#message_screen').fadeOut();
});

$("#bid_button").click(function(e) {
    e.preventDefault();
    // console.log("asdfasdlfjkasdflkj")
    if (!$("#bid_input")[0].checkValidity()) {
        $("#bid_input").css("border", "3px solid red");
    } else {
        $('#myModal2').modal();
        $("#bid_input").css("border", "3px solid transparent");
        var bid_input = $("#bid_input").val();
        $('#bid_conform_text').text(bid_input);
    }
});

$("#bid_button2").click(function(e) {
    e.preventDefault();
    if (!$(".buyer_input2")[0].checkValidity()) {
        $(".buyer_input2").css("border", "3px solid red");
    } else {
        $('#myModal22').modal();
        $(".buyer_input2").css("border", "3px solid transparent");
        var bid_input = $(".buyer_input2").val();
        $('#bid_conform_text2').text(bid_input);
    }
});


$('.update_back').click(function() {
    $('#message_screen').fadeOut();
});
var input = {};
var assignValue = function() {
    var isValid;
    // console.log('isValid')
    input['location'] = $('#autocomplete').val();
    input['area'] = $('#Area').val();
    input['type'] = $('#type :selected').text();
    input['date'] = $('.datepicker').val();
    input['amount'] = $('#amount').val();
    if (input.type && input.location && input.area && input.date && input.amount) {
        isValid = true;

    } else {
        isValid = false;
    }
    if (isValid) {
        $('#bidding_detail').show();
        $('#bidding_detail1').hide();
    } else {
        $('#bidding_detail1').show();
        $('#bidding_detail').hide();
    }
}
setInterval(assignValue, 500);

$('#toggle').click(function() {
    if ($('#toggle').is(":checked")) {
        // console.log("Checked");
        $("#success").fadeIn();
        $("#unsucess").fadeOut();
    } else {
        // console.log("Unchecked");
        $("#success").fadeOut();
        $("#unsucess").fadeIn();
    }
});

$("#bidding_detail").click(function(e) {
    // console.log("bidding  detail clicked");
    // console.log($('#autocomplete').val());
    $("#modal_area").text(input.area);
    $("#modal_amount").text(input.amount);
    $("#modal_location").text(input.location);
    $("#modal_type").text(input.type);
    $("#modal_date").text(input.date);

    // $("#modal_size").text(input.);
    // console.log("INPUT =>", input);
    // if (!$(".input_form")[0].checkValidity()) {
    //     $("#input0").css("border", "3px solid red");
    // } else {
    //     $("#input0").css("border", "3px solid transparent");
    //     var bid = $("#input0").val();
    // }
    // if (!$(".input_form")[1].checkValidity()) {
    //     $("#input1").css("border", "3px solid red");
    // } else {
    //     $("#input1").css("border", "3px solid transparent");
    //     var area = $("#input1").val();
    // }
    // if (!$(".input_form")[2].checkValidity()) {
    //     $("#input2").css("border", "3px solid red");
    // } else {
    //     $("#input2").css("border", "3px solid transparent");
    //     var location = $("#input2").val();
    // }
    // if (location && area && bid) {
    //     console.log("Details => ", location, area, bid);
    //     $('#modal_bid').text(bid);
    //     $("#modal_area").text(area);
    //     $("#modal_location").text(location);
    // }
    // if ($(".input_form")[0].checkValidity() && $(".input_form")[1].checkValidity() && $(".input_form")[2].checkValidity())
    //     $("#detail_confirm_modal").modal();
});



$("#bidder_bid2").click(function() {
    $("#bidder_biding").fadeIn();
});

$("#submission").click(function() {
    $("#set_submission").fadeIn();
});
$("#submission2").click(function() {
    $("#set_submission").fadeIn();
});
$("#submitted_successfully").click(function() {
    $("#submitted_successfully_fil").fadeIn();
});

$("#unsubmission").click(function() {
    $("#unsubmission_file").fadeIn();
});

$("#bidder_bid3").click(function() {
    $("#bidder_bid3_file").fadeIn();
});
//for button

$(".button").on("click", function() {
    $(".alert").removeClass("in").fadeIn();
    $(".alert").delay(1200).addClass("in").fadeOut(2000);
});
$(".button1").on("click", function() {
    $(".alert1").removeClass("in").fadeIn();
    $(".alert1").delay(1200).addClass("in").fadeOut(2000);
    $("#submitted_successfully_fil").fadeOut();
    $("#set_submission").fadeOut();
    $("#bidder_biding").fadeOut();
    $("#bidder_bid3_file").fadeOut();
});
$(".button2").on("click", function(e) {
    e.preventDefault();
    // console.log("button2 got clicked");
    if ($('.updated_bid')[1].checkValidity()) {
        $(".alert2").removeClass("in").fadeIn();
        $(".alert2").delay(1200).addClass("in").fadeOut(2000);
        $('.updated_bid').css("border", "3px solid transparent")
    } else {
        $('.updated_bid').css("border", "3px solid red")
    }
});
