/// loading website

jQuery(window).load(function () {

    // Loading Page

    $(".loader").fadeOut(500,function(){

        $(".loading").delay(1000).fadeOut(500);

    });


    $("body").css("overflow-y", "auto");

    // PAGE LANG

    var lang = localStorage.getItem("langPage");

    if(lang == '' || lang == undefined){
        localStorage.setItem("langPage", "ar");
        $('head').append('<link rel="stylesheet" type="text/css" href="css/ar.css">');
        $('.Lang_AR').addClass('active');
        $('.Lang_EN').removeClass('active');
    }else  if(lang == 'en'){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/en.css">');
        $('.Lang_EN').addClass('active');
        $('.Lang_AR').removeClass('active');
    }else {
        $('head').append('<link rel="stylesheet" type="text/css" href="css/ar.css">');
        $('.Lang_AR').addClass('active');
        $('.Lang_EN').removeClass('active');
    }


    // ANIMATION

    Animate_box();
    $(document).scroll(function (){
        Animate_box();
    });

    function Animate_box() {
        var scroll_var = $(this).scrollTop();

        $('.animate-box').each(function (){
            var val_one = $(this).offset().top - $(window).height() + 80;

            if (scroll_var > val_one){
                if($(this).hasClass('left-in')) {
                    $(this).addClass('animated fadeInLeft');
                }else if($(this).hasClass('right-in')) {
                    $(this).addClass('animated fadeInRight');
                }else {
                    $(this).addClass('animated fadeInUp');
                }
            }
        });
    }

});

// ADD IMAGE
$('.image-uploader').change(function (event) {
    for (var one = 0; one < event.target.files.length; one++) {
        $(this).parents('.images-upload-block').find('.upload-area').append('<div class="uploaded-block" data-count-order="' + one + '"><img src="' + URL.createObjectURL(event.target.files[one]) + '"><button class="close">حذف</button></div>');
    }
});

// REMOVE IMAGE
$('.images-upload-block').on('click', '.close',function (){
    $(this).parents('.uploaded-block').remove();
});

// // ADD IMAGE
// $('.image-uploader').change(function (event){
//     $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close"><i class="fas fa-times"></i></button></div>');
// });
//
// // REMOVE IMAGE
// $('.images-upload-block').on('click', '.close',function (){
//     $(this).parents('.uploaded-block').remove();
// });

/// scrooltop nav-bar

var lastScrollTop = 0;
$(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
        // downscroll code
        $('.click_show_map span').fadeOut('');
    } else {
        // upscroll code
        $('.click_show_map span').fadeIn('');
    }
    lastScrollTop = st;
});

/// Show And Hide Password

$('.checkmark').click(function() {

    $(this).toggleClass('active');

    if( $(this).hasClass('active') ) {
        $('.password').attr('type' , 'text');
    } else {
        $('.password').attr('type' , 'password');
    }
});

$('.input_price').slideUp();

$('.chick_radio input').change(function() {
    if (this.value === 'yes') {
        $('.input_price').slideDown();
    }
    else if (this.value === 'no') {
        $('.input_price').slideUp();
    }
});

var inputValue;
$('.click_checkbox').change(function(){
    if ($('.click_checkbox').is(':checked')){
        inputValue = $('.phone_number').val();
        $('.phone_number').val('');
        $('.phone_number').attr("disabled", true);
    } else {
        $('.phone_number').val(inputValue);
        $('.phone_number').removeAttr("disabled");
    }
});

$('.View_Des').slideUp();

$('.Show_Des').change(function(){
    if ($('.Show_Des').is(':checked')){
        $('.View_Des').slideDown();
    } else {
        $('.View_Des').slideUp();
    }
});

$('.click_show_select').click(function(){
    $(this).fadeOut();
    $('.select_show').removeAttr("disabled");
});

/// Click Following comment

$('.click_follow').click(function () {

    $(this).find("i").toggleClass("fas fa-rss fas fa-check");

    var text = 'متابعه الردود';
    var $this = $(this).find('span');
    if ($this.text() === text) {
        $this.text('تم متابعه الردود');
    } else {
        $this.text(text)
    }

});

/// Click Following User

$('.click_following').click(function () {

    $(this).find("i").toggleClass("fas fa-rss fas fa-check");

    var text = 'متابعه';
    var $this = $(this).find('span');
    if ($this.text() === text) {
        $this.text('تم المتابعه');
    } else {
        $this.text(text)
    }

});

/// Click Favorite

$(".btn_favorite").on("click", function (fav) {
    fav.preventDefault();
    $(this).find("i").toggleClass("color_red");

});

/// Click Remove Blcok

$('.remove').on("click", function () {
    $(this).parents('.blcok_group').addClass("remove_block");
});

$('.click_edit_phone').click(function(){

    $('.value_phone').toggleClass("active");

    if ($('.value_phone').hasClass('active')) {
        $('.value_phone').removeAttr("disabled");
    } else {
        $('.value_phone').attr("disabled", true);
    }

});

/// Input File Upload

$('#file-upload').change(function() {
    var i = $(this).prev('label').clone();
    var file = $('#file-upload')[0].files[0].name;
    $(this).prev('label').text(file);
});

/// Scrool Nav

$('.Lang_AR').click(function(){

    $(".loader").fadeIn();
    localStorage.setItem("langPage", "ar");

    var lang = localStorage.getItem("langPage");

    if(lang == 'ar'){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/ar.css">');
        $('head').remove('<link rel="stylesheet" type="text/css" href="css/en.css">');
    }

});

$('.Lang_EN').click(function(){

    $(".loader").fadeIn();
    localStorage.setItem("langPage", "en");

    var lang = localStorage.getItem("langPage");

    if(lang == 'en'){
        $('head').append('<link rel="stylesheet" type="text/css" href="css/en.css">');
        $('head').remove('<link rel="stylesheet" type="text/css" href="css/ar.css">');
    }

});

// Change Body Page Profile

$('.view_change_password').fadeOut();
$('.view_change_name').fadeOut();
$('.view_change_email').fadeOut();
$('.view_change_phone').fadeOut();

function getItems(name) {

    if(name === 'password'){
        $('.view_change_password').fadeIn(500);
        $('.view_list_items').fadeOut();
        $('.view_change_name').fadeOut();
        $('.view_change_email').fadeOut();
        $('.view_change_phone').fadeOut();
    }else if (name === 'name'){
        $('.view_change_name').fadeIn(500);
        $('.view_change_password').fadeOut();
        $('.view_list_items').fadeOut();
        $('.view_change_email').fadeOut();
        $('.view_change_phone').fadeOut();
    } else if (name === 'email'){
        $('.view_change_email').fadeIn(500);
        $('.view_change_password').fadeOut();
        $('.view_list_items').fadeOut();
        $('.view_change_name').fadeOut();
        $('.view_change_phone').fadeOut();
    } else if (name === 'phone') {
        $('.view_change_phone').fadeIn(500);
        $('.view_change_password').fadeOut();
        $('.view_list_items').fadeOut();
        $('.view_change_name').fadeOut();
        $('.view_change_email').fadeOut();
    } else {
        $('.view_list_items').fadeIn(500);
        $('.view_change_password').fadeOut();
        $('.view_list_items').fadeOut();
        $('.view_change_name').fadeOut();
        $('.view_change_email').fadeOut();
        $('.view_change_phone').fadeOut();
    }

}

// Click Category

$('.fix_2').slideUp();
$('.fix_3').slideUp();

$(".click_item_cate").click(function () {
    $(".fix_2").slideDown("100");
    $('.click_item_cate').removeClass("active");
    $(this).addClass("active");
});

$(".click_item_sub").click(function () {
    $(".fix_3").slideDown("100");
    $('.click_item_sub').removeClass("active");
    $(this).addClass("active");
});


$('.drop_sub').slideUp();
$(".click_cub").click(function () {
    $('.drop_sub').fadeOut();
    $(this).parent(".link_sub").children(".drop_sub").slideToggle("100");
});

$(".click_item").click(function () {
    $('.click_item').removeClass("active");
    $(this).addClass("active");
});


$('.drop_cate').slideUp();
$(".click_category").click(function (event) {
    event.preventDefault();
    $(".drop_cate").slideToggle("100");
});

$(document).click(function(){
    $(".drop_cate").slideUp();
    $(".drop_sub").slideUp();
});

$(".filter_view").slideUp();
$('.click_show_filter').click(function(){
    $(".filter_view").slideToggle();
});

$(".click_category, .drop_cate").click(function(e){
    e.stopPropagation();
});

$('#list-section').fadeOut();
$("#list-section").click(function (event) {
    $('#grid-section').fadeIn();
    $(this).fadeOut();
});

$("#grid-section").click(function (event) {
    $('#list-section').fadeIn();
    $(this).fadeOut();
});

/// Remove User Follow

$('.remove_user').on('click' ,function (){
    $(this).parents('.view_follow_user').fadeOut();
});

/// Click For Chat

$('.bar_head_chat form').fadeOut();

$(".search_chat").click(function (event) {
    $('.bar_head_chat form').fadeToggle();
});

$(".box_chat_user").click(function (event) {
    $('.no_chat').fadeOut();
    $('.box_chat_user').removeClass("active");
    $(this).addClass("active");

    if ($(window).width() < 767) {
        $('.group_chat').addClass('open_chat');
    } else {
        $('.group_chat').removeClass('open_chat');
    }

});

$(".click_back_chat").click(function (event) {
    $('.group_chat').removeClass('open_chat');
});

$(".click_fading_history").click(function (event) {
    $('.history_blogs').fadeOut('');
});


//// add slider

$('.owl_e3lan').owlCarousel({
    loop:false,
    margin:10,
    center:true,
    autoplay:false,
    pagination : true,
    nav:true,
    navText: [
        '<i class="fas fa-chevron-right"></i>',
        '<i class="fas fa-chevron-left"></i>'
              ],
    responsive:{
        0:{
            items:1
        },
        900:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

// Start Rate
var $star_rating = $('.star-rating span');

var SetRatingStar = function() {
    return $star_rating.each(function() {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('starGray').addClass('starYellow');
        } else {
            return $(this).removeClass('starYellow').addClass('starGray');
        }
    });
};

$star_rating.on('click', function() {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
});

SetRatingStar();

// Start Chat ScrollDown


(function() {

$(".chat-content").animate({ scrollTop: $('.chat-content').prop("scrollHeight")}, 1000);

$(function () {
    $('.form').on('submit', function (event) {
        event.preventDefault();
        var message = $('.content_sent').first().clone();
        message.find('p').text($('.input-custom-size').val());
        message.appendTo('.chat-content');
        $('input').val('');

        $(".chat-content").animate({ scrollTop: $('.chat-content').prop("scrollHeight")}, 1000);
    });
});

$('.people-list .people-blocks').on('click', function(e) {
    e.preventDefault();
    $(this).closest('.row').find('.n-message').addClass('open');
});

$('.n-message .back').on('click', function() {
    $(this).closest('.n-message').removeClass('open');
});

})(jQuery);

// Send With Enter In Chat

$('.input-custom-size').keyup(function (event) {
    if (event.keyCode == 13 && event.shiftKey) {
        var content = this.value;
        var caret = getCaret(this);
        this.value = content.substring(0,caret)+"\n"+content.substring(carent,content.length-1);
        event.stopPropagation();

    }else if(event.keyCode == 13){
        $('.form').submit();
    }
});



