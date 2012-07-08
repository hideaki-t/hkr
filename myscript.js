(function(){
  var r = document.createRange();
  var a = document.querySelectorAll("span.highlight,a.keyword,a.okeyword");
  var n = a.length;
  while (n--) {
    var v = a[n];
    r.selectNodeContents(v);
    v.parentNode.replaceChild(r.extractContents(), v);
  }
})();
