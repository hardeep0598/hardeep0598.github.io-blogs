!(function () {
  "use strict";
  var n,
    e,
    t,
    i,
    o = "//blog.patricktriest.com/ghost/api/v0.1/";
  (t = {
    api: function () {
      var t,
        i = Array.prototype.slice.call(arguments),
        r = o;
      return (
        (t = i.pop()) && "object" != typeof t && (i.push(t), (t = {})),
        ((t = t || {}).client_id = n),
        (t.client_secret = e),
        i.length &&
          i.forEach(function (n) {
            r += n.replace(/^\/|\/$/g, "") + "/";
          }),
        r +
          (function (n) {
            var e,
              t = [];
            if (!n) return "";
            for (e in n)
              n.hasOwnProperty(e) &&
                (n[e] || !1 === n[e]) &&
                t.push(e + "=" + encodeURIComponent(n[e]));
            return t.length ? "?" + t.join("&") : "";
          })(t)
      );
    },
  }),
    (i = function (t) {
      (n = t.clientId ? t.clientId : ""),
        (e = t.clientSecret ? t.clientSecret : ""),
        (o = t.url ? t.url : o.match(/{\{api-url}}/) ? "" : o);
    }),
    "undefined" != typeof window &&
      ((window.ghost = window.ghost || {}),
      (window.ghost.url = t),
      (window.ghost.init = i)),
    "undefined" != typeof module && (module.exports = { url: t, init: i });
})();
