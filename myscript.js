(function(){
  var targets = {
   "hatena.ne.jp":1,
   "hatelabo.jp":1,
   "hatenablog.com":1,
   "hateblo.jp":1,
   "hatenadiary.com":1,
   "hatenadiary.jp":1
  };
  if (!(location.hostname.replace(/^[^.]+./, '') in targets)) {
    var h = document.documentElement.attributes["data-blog"];
    if (!h || !(h.value.replace(/^[^.]+./, '') in targets)) {
      return;
    }
  }
  var r = document.createRange();
  var a = document.querySelectorAll("span.highlight,a.keyword,a.okeyword");
  var n = a.length;
  while (n--) {
    var v = a[n];
    r.selectNodeContents(v);
    v.parentNode.replaceChild(r.extractContents(), v);
  }
})();
