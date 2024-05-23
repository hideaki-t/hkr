const reg = /^hate(?:na(?:\.ne\.jp|blog\.com|diary\.(?:com|jp))|labo\.jp|blo\.jp)/;
if (
  reg.test(location.hostname.replace(/^[^.]+./, "")) ||
  reg.test(document.documentElement.attributes["data-blog"].value.replace(/^[^.]+./, ""))
) {
  const r = document.createRange();
  for (const v of document.querySelectorAll("span.highlight,a.keyword,a.okeyword")) {
    r.selectNodeContents(v);
    v.parentNode.replaceChild(r.extractContents(), v);
  }
}
