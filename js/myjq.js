$(document).ready(function() { 
    $('.moto_foto').fadeTo(0, 0.05, function(){
        $('.moto_foto').fadeTo(7000, 1); 
    });
    $('.b_u_price').hide();
    alert($('#title_moto').text());
    $('#more').hide();
    $('.features-grid').hide(3000);
    $('.b_u_price').show(2000);
    alert($('.top-nav').text())
    $('#slide-text').hide(3500);
    $('#slide-text').show(2000);
    $('.arrow').hide(1000);
    $('.arrow').show(2000);
    alert($('.blog-post-info span').text())   
    alert($('.number_price').text())    
    alert($('.blog-post-info + h4').text());
    $('img[src*=logo]').hide(); 
    $('#moto_models').hide(5000);
    $('#title_moto').fadeOut(1500, function(){
        $('#title_moto').fadeIn(1500);
    })
    $('section > h3').slideUp(2000, function(){
        $('section > h3').slideDown(1000);
    })
    (function(){
        $('.number_price').fadeTo(1500, 0, function(){
            $('.number_price').fadeTo(6000, 1);});
        $('.b_u_price_title').slideUp(2000, function(){
            $('.b_u_price_title').slideDown(3000)});
    }());
    function zr(name_obj, t1, t2){
        name_obj.slideUp(t1, ()=>{
            name_obj.slideDown(t2);
        })
    };
    zr($('#title_moto'), 1000, 2000);
      function  prozor(name_obj, time, opacity){
        name_obj.fadeTo(time, opacity, ()=>{
            name_obj.slideUp(time, ()=>{
                name_obj.slideDown(time, ()=>{
                    name_obj.fadeTo(time, 1);
                })
            })
        })
      }
      prozor($('#title_moto'),5000, 0.5);
    $('nav').fadeTo(1000, 0, ()=>{
        alert('"Меню було сховано ');
    });
    $('.title').slideUp(1000, function(){
        zr($('.title'), 1000, 2000);
        prozor($('.title'),5000, 0.5);
    })
      $('.slide-btn').click(()=>{
          alert('Була натиснута кнопка з класом slide-btn');
      })
    $('.moto_block').click(()=>{
        $('.moto img').slideUp(3000); 
        });
    $('.moto_block').click(()=>{
         $('.moto img').slideToggle() 
        });
    $('img').click(function(){
        $(this).fadeToggle();
    });
    $('nav').mouseenter(()=>{
        $('li').slideUp();
        $('nav').mouseout(()=>{
            $('li').slideDown();
        })
    })
    $('#more').click(function(){
        $(this).html('Оберіть мотоцикл нище на сторінці');
    });
    $('#p').click(function(){
        $('img').slideUp();
    });
     $('#p').click(function(){
        $('img').slideUp();
        $(this).html('Подивитись фото');
        $(this).click(function(){
            $('img').slideDown();
            $(this).html('Cховати фото');
        })
    });
    $('li a').click(function(e){
        e.preventDefault();
        $('#li1').html('Home');
        $('#li2').html('Motorcycles');
        $('#li3').html('Sale');
        $('#li4').html('Forum');
        $('#li5').html('Contacts');
        $(this).html('ua');
        $(this).click(function(){
            $('#li1').html('Головна');
            $('#li2').html('Мотоцикли');
            $('#li3').html('Розпродаж');
            $('#li4').html('Форум');
            $('#li5').html('Контакти');
            $(this).html('eng');
        })
    });
    $('li').click(function(){
        alert($(this).html())
    });
    $('.link').click(function(e){
        e.preventDefault();
        alert($(this).attr('href'));
    });
    $('img').click(function(e){
        e.preventDefault();
        alert($(this).attr('src'));
    })
    $('#p').click(function(){  
     $('#p').html('<span style="font-style: italic;">Зараз функція недоступна.<br>Спробуйте пізніше</span>');
    })
    $('#more').click(function(){
        $('li a').html('<img src="eng.PNG" style="width:50px">')
    });
    $('.moto').click(function(){
        let text = $(this).find(".t").text();
        $(this).find(".t").text(`Ви обрали:`+text)
    });
    $('.moto').click(function(){
        let text = $(this).find(".t").text();
        $(this).find(".t").html(`Ви обрали: <br><br>`+text)
    });
    $('.number_price').mouseover(function(){
        let q = $(this).parent();
        let text = q.find('.blog-post-info').html();
        q.find('.blog-post-info').hide()
        q.find('.blog-post-info').fadeTo(2000,1)
        q.find('.blog-post-info').html("Бажаєте замовити?  "+text);
        $('.number_price').mouseout(function(){
        q.find('.blog-post-info').html(text);
        });});
    $('.number_price').click(function(){
            let q = $(this).parent();
            let text = q.find('.blog-post-info').text();
            let text2 = q.find('.b_u_title').text();
            let textarea =  $('textarea').val();  
            $('textarea').val(text2 +'\n'+ text +'\n'+ textarea); 
        });
       $('.desc_text').addClass("new");
    $('.desc_text').before('<p class="fon_yellow ppp">Цей абзац доданий за допомогою методу before</p>');
    $('.desc_text').append('<p class="fon_yellow pp">Цей абзац доданий за допомогою методу append</p>');
    $('.pp').before('<p class="fon_yellow">Цей абзац доданий за допомогою методу before</p>');
    $('.ppp').append('<p class="fon_yellow">Цей абзац доданий за допомогою методу append</p>');
    $('li').hover(function(){
        $(this).toggleClass('svitlo');
    });
    $('.moto_foto').click(function(){
        $(this).clone().appendTo(".koshik-wrapper");
        if (!$(".koshik-wrapper").hasClass("full-koshik") ) {
            $(".koshik-wrapper").addClass('full-koshik');
    }
    });
     $('.moto_foto').click(function(){
        $(this).clone().appendTo(".koshik-wrapper");
        if (!$(".koshik-wrapper").hasClass("full-koshik") ) {
            $(".koshik-wrapper").addClass('full-koshik');
    }
    $(this).remove();
    });
    let price = 0;
    let totalPrice = 0;
    $('.moto_foto').click(function(){
        $(this).clone().appendTo(".koshik-wrapper");
            if (!$(".koshik-wrapper").hasClass("full-koshik") ) {
                $(".koshik-wrapper").addClass('full-koshik');}
        totalPrice+= +$(this).attr('data-price');
        price++;
        $('.price_moto').html('Всього '+price+ 'мотоцикла на сумму '+totalPrice);
    });
    $('#more').height('100px');
    function change_width(selectorObj ,w){
        selectorObj.width(w)
    }change_width( $('#more') ,'100px')
    function change_width(selectorObj ,w){
        selectorObj.width(w)
        selectorObj.height('auto');
    }change_width( $('#more') ,'100px');
    function change_width(selectorObj){
           let w = selectorObj.width();
           selectorObj.width(w/2);
            selectorObj.height('auto');
        }change_width( $('#more'));
    $('.moto_foto').click(function(){
       let q =  $(this).attr('title');
        if(q == 0){
            let w = $(this).width();
            $(this).width(w/1.5);
            $(this).height('auto');
            $(this).attr('title', '1');
        }else{
            let w = $(this).width();
            $(this).width(w*1.5);
            $(this).height('200px');
            $(this).attr('title', '0') ;
        }});
    $('.moto_foto').mouseover(function(){
        let w = $(this).width();
        $(this).width(w/2);
       });
       $('.moto_foto').mouseout(function(){
        let w = $(this).width();
        $(this).width(w*2);
        });
    function size_obj(selectorObj){
        let w = selectorObj.width();
        let h =  selectorObj.height();
        let obj = selectorObj.attr('alt')
        $('#p').html('Об"єкт '+ obj+"Його ширина "+w+" висота "+ h )
    }size_obj($('.moto_foto'));
    $('.moto_foto').mouseover(function(){
        let w = $(this).width();
        let h =  $(this).height();
        let obj = $(this).attr('alt')
        let src = $(this).attr('src')
        $('#p').html('Об"єкт '+ obj+"Його ширина "+w+" висота "+ h+ '   '+src )
    });
    $( ":header:first" ).css({ background: "yellow"  });
    $( ":header:last" ).css({ fontSize:  "400%" });
      $('#trunk').prop( "checked", true );
    $('#yes').prop( "checked", true );
    $('button[type="submit"]').click(function(e){
        e.preventDefault();
        let select = $("option:selected").text();
        let day = $("input[type='number']").val();
        let email = $("input[type='email']").val();
        let arr = $('input:checkbox:checked');
        let res ='', res2='';
        $(arr).each(function(i, el) {
          var checkboxvalue = $(el).val();
          res += " " +checkboxvalue;
        });
        let arr2 = $('input:radio:checked');
        $(arr2).each(function(i, el) {
          var checkboxvalue = $(el).val();
          res2 += " " +checkboxvalue;
          if( res2 === ' Так'){
            console.log(res2)
            $('.str').css({ background: "#fff"  });
        }
        });
        if(email.indexOf('Приклад:') !== 0) {
            $("input[type='email']").css({ background: "#fff"  });
        }
        $('textarea').html(select +day+email+res+res2)
    });
 }); 