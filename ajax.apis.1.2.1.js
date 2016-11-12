// by Santa Mars
// santa-mars.blogspot.com
var lodingsuroding='<center><img class="nostyle" src="http://images.gmx.com/images/outsource/application/mailclient/mailcom/resource/mailclient/widgets/blue/common/loading_animation_en-3447255655.gif"/></center>';

function modifArchiveList(){
  if(!window.arhiveTabKlik){window.arhiveTabKlik=function(){
    var a,b,c,d,e,f;if($('#BlogArchive2_ArchiveList').css('opacity')==1){a=$('#BlogArchive1_ArchiveList');b=$('#BlogArchive2_ArchiveList');c=$('#arc-sbc');d=$('#arc-sbd');e='Date';f='Category'}else{a=$('#BlogArchive2_ArchiveList');b=$('#BlogArchive1_ArchiveList');c=$('#arc-sbd');d=$('#arc-sbc');e='Category';f='Date'}
    $(d).removeClass('list-archive2-pasip').addClass('list-archive2-aktip').html('Sorted by '+e);
    $(c).removeClass('list-archive2-aktip').addClass('list-archive2-pasip').html('Sort by '+f);
    $(b).animate({opacity:0.0},1000,function(){$(this).css({'display':'none'});$(a).css({'display':'block'}).animate({opacity:1.0},1000)});
  }}
  if(!window.isiinCategori){window.isiinCategori=function(uri,elm){
    window.tmptctgr=elm; window.isitmptctgr=$(tmptctgr).html(); 
    $(tmptctgr).html('<br/>'+lodingsuroding); 
    $.getJSON(uri,writeIsiCat);
  }}
  if(!window.writeIsiCat){window.writeIsiCat=function(post){
    if(post.feed&&post.feed.link){for(x in post.feed.link){if(post.feed.link[x].rel=='alternate'){
      if(post.feed.link[x].href.split('\/label\/')[1]){
        var searchLabel=unescape(post.feed.link[x].href.split('\/label\/')[1]);
        $('#now'+escape(searchLabel).replace(/%20/gi,'-')).html('');
        break;
      }else{
        var searchLabel='uncategories';
        $('#nowuncategories').html('');
        break;
      }
    }}}
    if(post.feed&&post.feed.entry){
      for(x in post.feed.entry){
        var tulis2='';
        if(post.feed.entry[x].link){for(y in post.feed.entry[x].link){if(post.feed.entry[x].link[y].rel){
          var pisahUrlPost=post.feed.entry[x].link[y].href.split('/');
          var classJudulPost=pisahUrlPost[pisahUrlPost.length-1].split('.')[0];
          if(post.feed.entry[x].link[y].rel=='alternate'&&post.feed.entry[x].link[y].title){
            tulis2+='<li class="'+classJudulPost+'">';
            tulis2+='<a class="list-archive red25" ';
            tulis2+='href="'+post.feed.entry[x].link[y].href+'">'+post.feed.entry[x].link[y].title+'</a></li>'; 
            break;
          }
        }}}
        var searchLabel2=searchLabel;
        if(searchLabel=='uncategories'){if(post.feed.entry[x].category){for(y in post.feed.entry[x].category){if(post.feed.entry[x].category[y].term){
          searchLabel2=post.feed.entry[x].category[y].term;
          break;
        }}}}
        var idKategoryTerm=escape(searchLabel2).replace(/%20/gi,'-');
        if($('#'+idKategoryTerm).length==0&&$('.'+classJudulPost).length==0){
          var tulis3='<ul class="hierarchy"><li class="archivedate collapsed">';
          tulis3+='<a id="toggle'+idKategoryTerm+'" class="toggle" href="javascript:void(0)" onClick="if($(\'#'+idKategoryTerm+'\').css(\'display\')==\'none\'){$(\'#'+idKategoryTerm+'\').show();$(this).html(\'&#9660;&nbsp;\')}else{$(\'#'+idKategoryTerm+'\').hide();$(this).html(\'&#9658;&nbsp;\')}">&#9660;&nbsp;</a>';
          tulis3+='<strong>'+searchLabel2+'</strong>';
          tulis3+='<span class="post-count" dir="ltr"></span>';
          tulis3+='<ul id="'+idKategoryTerm+'" class="posts">'+tulis2+'</ul>';
          tulis3+='</li></ul>'; 
          $('#now'+idKategoryTerm).html(tulis3);
        }else{
          if($('.'+classJudulPost).length==0){$('#'+idKategoryTerm).append(tulis2)}
          $('#'+idKategoryTerm).css('display','block'); 
          $('#toggle'+idKategoryTerm).html('&#9660;&nbsp;');
        }
      }
    }
  }}
// by Santa Mars
  $('#BlogArchive1_ArchiveList .post-count-link').each(function(){$(this).css({'display':'none'}).after('<b>'+$(this).html()+'</b>')});
  $('.BlogArchive .widget-content').before('<div class="archive-tab-menu" style="text-align:right"></div>');
  var labelSekarang=$('.post-labels a').html();
  if(labelSekarang==null||labelSekarang==''){labelSekarang='Nothing'}
  $.getJSON('http://'+window.location.hostname+'/feeds/posts/default/-/'+escape(labelSekarang)+'?alt=json-in-script&max-results=999&callback=?',function(post){
    if(post.feed&&post.feed.category){
      var tulis='<div id="nowuncategories"></div>';
      post.feed.category=post.feed.category.sort(function(){return 0.5-Math.random()});
      for(x in post.feed.category){
        if(post.feed.category[x].term){
          tulis+='<div id="now'+escape(post.feed.category[x].term).replace(/%20/gi,'-')+'"><a class="list-archive black25" href="http://'+window.location.hostname+'/feeds/posts/default/-/'+escape(post.feed.category[x].term)+'?alt=json-in-script&callback=?" onClick="javascript:isiinCategori(this.href,this.parentNode);return false">'+post.feed.category[x].term+'</a></div>';
        }
      }
      $('.archive-tab-menu').append('<a id="arc-sbd" class="list-archive2 list-archive2-pasip" href="javascript:void(0)" onClick="arhiveTabKlik()">Sort by Date</a> <a id="arc-sbc" class="list-archive2 list-archive2-aktip" href="javascript:void(0)" onClick="arhiveTabKlik()">Sort by Category</a>');
      $('#BlogArchive1_ArchiveList').before('<div id="BlogArchive2_ArchiveList" style="display:none;opacity:0.0">'+tulis+'</div>').animate({opacity:0.0},1000,function(){$(this).css({'display':'none'});$('#BlogArchive2_ArchiveList').css({'display':'block'}).animate({opacity:1.0},1000)});
      if($('#now'+escape(labelSekarang).replace(/%20/gi,'-')).length!=0){
        window.tmptctgr=$('#now'+escape(labelSekarang).replace(/%20/gi,'-')); window.isitmptctgr=$(tmptctgr).html(); 
        writeIsiCat(post);
      }
    }
  });
}

modifArchiveList();
//-->