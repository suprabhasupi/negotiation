var houses = {
    'h1': {
        'bid': '$500',
        'date': '28 Sept 2016',
        'location': 'bangalore',
        'area': '12312 sq feet',
        'buildYear': '2011',
        'bedroom': '1',
        'img': ['img/home33.jpg', 'img/img2b.jpg', 'img/img2c.jpg']
    },
    'h2': {
        'bid': '$400',
        'date': '28 Sept 2016',
        'location': 'bangalore',
        'area': '12312 sq feet',
        'buildYear': '2014',
        'bedroom': '2',
        'img': ['img/img3a.jpg', 'img/img3b.jpg', 'img/img3c.jpg']
    },
    'h3': {
        'bid': '$600',
        'date': '28 Sept 2016',
        'location': 'bangalore',
        'area': '12312 sq feet',
        'buildYear': '2013',
        'bedroom': '3',
        'img': ['img/img4a.jpg', 'img/img4b.jpg', 'img/img4c.jpg']
    }
}

var update_image = function(n) {
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
    $('#owner').fadeIn();
});
$('.property_form').click(function() {
    $('#buyerlist').fadeIn();
});
$('.confirm_btn').click(function(e) {
    e.preventDefault();

    var tot = $(this).data("input");

    var isValid = $('#' + tot)[0].checkValidity();
    if (isValid) {
        $("#owner_end").fadeIn();
    } else {
        console.log('Invalid data');
    }
});
$('.send_btn').click(function(e) {
    e.preventDefault();
    var tot = $(this).data("input");
    var isValid = false;
    isValid = $('#' + tot)[0].checkValidity();
    if (isValid) {
        $('#modal3').closeModal();
        Materialize.toast('Sent Successfully', 4000)
    } else {
        console.log('Invalid data');
    }
});

$('.search_btn').click(function() {
    $('#seller_list').fadeIn();
});

$('.owner_back').click(function() {
    $('#owner').fadeOut();
});
$('.detail_btn').click(function() {
    update_image(parseInt($(this).data("house")));
    $('#property_details').fadeIn();
});

$('.buyerLogin').click(function() {
    $('.first_page').fadeOut();
    $('.buyer').fadeIn();

});
$('.buyer_back').click(function() {
    $('.buyer').fadeOut();
    $('.first_page').fadeIn();
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

$(".seller_list_back").click(function() {
    $('#seller_list').fadeOut();
});

var input = {};
var assignValue = function() {
    var isValid;
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
    $("#modal_area").text(input.area);
    $("#modal_amount").text(input.amount);
    $("#modal_location").text(input.location);
    $("#modal_type").text(input.type);
    $("#modal_date").text(input.date);
});
