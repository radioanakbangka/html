﻿//-------file-windows1.js--------
//-------http://radioanakbangka.blogspot.co.id/--------

function removerscript(){var a=document.getElementById("TEMPORAL");var b=a.parentNode;b.removeChild(a)}function incluirscript(a){if(firsttime==1){removerscript()}document.getElementById("daftar-isi-wrap").innerHTML="<div id='loadingscript'>Loading...</div>";document.getElementById("paginacion").innerHTML="";document.getElementById("totales").innerHTML="";var b=a*jumlahposting-(jumlahposting-1);var c=urlblog+"/feeds/posts/default?start-index="+b;c+="&max-results="+jumlahposting;c+="&orderby=published&alt=json-in-script&callback=showpageposts";var d=document.createElement("script");d.setAttribute("type","text/javascript");d.setAttribute("src",c);d.setAttribute("id","TEMPORAL");document.getElementsByTagName("head")[0].appendChild(d);firsttime=1;daftarisictual=a}function paginacion(){contadorP=0;salida="";if(daftarisictual>1){salida+="<a class='nextprev-link' href='javascript:incluirscript("+parseInt(daftarisictual-1)+")'>Prev</a>"}else{salida+="<span class='nextprev-link'>Prev</span>"}if(nextprev<maxpaginas+1){for(contadorP=1;contadorP<=nextprev;contadorP++){if(contadorP==daftarisictual){salida+="<span class='actual'>"+contadorP+"</span>"}else{salida+="<a href='javascript:incluirscript("+contadorP+")'>"+contadorP+"</a>"}}}else if(nextprev>maxpaginas-1){if(daftarisictual<minpaginas){for(contadorP=1;contadorP<maxpaginas-2;contadorP++){if(contadorP==daftarisictual){salida+="<span class='actual'>"+contadorP+"</span>"}else{salida+="<a href='javascript:incluirscript("+contadorP+")'>"+contadorP+"</a>"}}salida+=" ... ";salida+="<a href='javascript:incluirscript("+parseInt(nextprev-1)+")'>"+parseInt(nextprev-1)+"</a>";salida+="<a href='javascript:incluirscript("+nextprev+")'>"+nextprev+"</a>"}else if(nextprev-(minpaginas-1)>daftarisictual&&daftarisictual>minpaginas-1){salida+="<a href='javascript:incluirscript(1)'>1</a>";salida+="<a href='javascript:incluirscript(2)'>2</a>";salida+=" ... ";for(contadorP=daftarisictual-2;contadorP<=daftarisictual+2;contadorP++){if(contadorP==daftarisictual){salida+="<span class='actual'>"+contadorP+"</span>"}else{salida+="<a href='javascript:incluirscript("+contadorP+")'>"+contadorP+"</a>"}}salida+=" ... ";salida+="<a href='javascript:incluirscript("+parseInt(nextprev-1)+")'>"+parseInt(nextprev-1)+"</a>";salida+="<a href='javascript:incluirscript("+nextprev+")'>"+nextprev+"</a>"}else{salida+="<a href='javascript:incluirscript(1)'>1</a>";salida+="<a href='javascript:incluirscript(2)'>2</a>";salida+=" ... ";for(contadorP=nextprev-(minpaginas+1);contadorP<=nextprev;contadorP++){if(contadorP==daftarisictual){salida+="<span class='actual'>"+contadorP+"</span>"}else{salida+="<a href='javascript:incluirscript("+contadorP+")'>"+contadorP+"</a>"}}}}if(daftarisictual<contadorP-1){salida+="<a class='nextprev-link' href='javascript:incluirscript("+parseInt(daftarisictual+1)+")'>Next</a>"}else{salida+="<span class='nextprev-link'>Next</span>"}document.getElementById("paginacion").innerHTML=salida;var a=daftarisictual*jumlahposting-(jumlahposting-1);var b=daftarisictual*jumlahposting;var c="Total Posting: "+maxposts+" - tampilkan posting dari "+a+" a "+b;document.getElementById("totales").innerHTML=c}function showpageposts(a){var b,c,d,e;var f="";if(nextprev==0){maxposts=parseInt(a.feed.openSearch$totalResults.$t);nextprev=parseInt(maxposts/jumlahposting)+1}for(var g=0;g<jumlahposting;g++){if(g==a.feed.entry.length){break}b=a.feed.entry[g];c=b.title.$t;for(var h=0;h<b.link.length;h++){if(b.link[h].rel=="alternate"){d=b.link[h].href;break}}if("media$thumbnail"in b){e=b.media$thumbnail.url}else{e=thumbs}f+="<div class='box-posting'>";f+="<a href='"+d+"'><img src='"+e+"' /></a>";f+="<div class='judul-posting'><a href='"+d+"'>"+c+"</a></div>";f+="</div>"}document.getElementById("daftar-isi-wrap").innerHTML=f;paginacion()}var firsttime=0;var daftarisictual=1;var nextprev=0;var maxposts=0;onload=function(){incluirscript(1)};document.write('<div id="daftar-isi-body"><div id="daftar-isi-wrap"></div><div style="clear:both;"></div><div id="paginacion"></div><div id="totales"></div></div>')
