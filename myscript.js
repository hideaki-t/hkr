const reg = /^hate(?:na(?:\.ne\.jp|blog\.com|diary\.(?:com|jp))|labo\.jp|blo\.jp)/;
if (
  reg.test(location.hostname.replace(/^[^.]+./, "")) ||
  reg.test(document.documentElement.attributes["data-blog"].value.replace(/^[^.]+./, ""))
) {
  const r = document.createRange();
  document.querySelectorAll("span.highlight,a.keyword,a.okeyword").forEach((v) => {
    r.selectNodeContents(v);
    v.parentNode.replaceChild(r.extractContents(), v);
  });
}
