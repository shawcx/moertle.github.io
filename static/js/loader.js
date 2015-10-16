// Generated by CoffeeScript 1.10.0
(function() {
  var Load, Share, anchor, base_url, css_path, jquery_path, jquery_version, script, scripts, share_path, stage1, stage2, stage3;

  jquery_version = "1.9.1";

  jquery_path = "//ajax.googleapis.com/ajax/libs/jquery/" + jquery_version + "/jquery.min.js";

  base_url = null;

  css_path = "/static/css/share.css";

  share_path = "/static/js/share.js";

  Load = {
    Script: function(src, onload, force) {
      var script;
      if (force) {
        src += '?r=' + Math.random();
      }
      script = document.createElement('script');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('charset', 'UTF-8');
      script.onload = onload;
      script.setAttribute('src', src);
      document.body.appendChild(script);
      return script;
    },
    StyleSheet: function(src, force) {
      var head, link;
      if (force) {
        src += '?r=' + Math.random();
      }
      link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', src);
      head = document.getElementsByTagName('head')[0];
      if (head == null) {
        head = document.body.parentElement.insertBefore(document.createElement('head'), document.body);
      }
      head.appendChild(link);
      return link;
    }
  };

  stage1 = function() {
    Share.Load = Load;
    Share.Load.StyleSheet(base_url + css_path, true);
    if ((typeof jQuery === "undefined" || jQuery === null) || jQuery.fn.jquery !== jquery_version) {
      Share.Load.Script(jquery_path, stage2);
    } else {
      stage2();
    }
  };

  stage2 = function() {
    Share.$ = jQuery.noConflict(true);
    stage3();
  };

  stage3 = function() {
    if (Share.app != null) {
      return;
    }
    Share.Load.Script(base_url + share_path, function() {
      new Share.App(base_url);
    }, true);
  };

  scripts = document.getElementsByTagName('script');

  script = scripts[scripts.length - 1];

  anchor = document.createElement('a');

  anchor.href = script.src;

  base_url = anchor.protocol + "//" + anchor.host;

  if (window.location.host !== anchor.host) {
    if (window.Share != null) {
      Share = window.Share;
      stage3();
    } else {
      window.Share = Share = {};
      stage1();
    }
  } else {
    alert('No not here, go out and share!');
  }

}).call(this);

//# sourceMappingURL=loader.js.map
