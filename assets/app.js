$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

var list;
var newlist=[];

$.getJSON('assets/list.json', function(data) {
          list = data.list;
 }).done(function(){

   $.each(list,function(key){
      newlist.push({ src:list[key].src,name:list[key].name,def:list[key].def});
    });

  $('body').vegas({
    overlay: 'assets/overlays/10.png',
    transition: 'fade2',
    transitionDuration: 2000,
    shuffle: true,
    delay: 5000,
    slides: newlist,

    walk: function (index,slideSettings) {
          $(".container h2").text(newlist[index].name);
          $(".container p").text(newlist[index].def);
          $.preloadImages(newlist[index+1].src);
    }
    });
});