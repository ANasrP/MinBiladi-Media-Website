/* MinBiladi - video.js */
document.addEventListener('DOMContentLoaded', function() {

  var params  = new URLSearchParams(window.location.search);
  var videoId = params.get('v') || 'k4cwKIw6Rtw';

  var splash      = document.getElementById('playerSplash');
  var splashPlay  = document.getElementById('splashPlay');
  var splashThumb = document.getElementById('splashThumb');
  var ytWrap      = document.getElementById('ytWrap');
  var vTitle      = document.getElementById('vTitle');
  var vDesc       = document.getElementById('vDesc');
  var directorName= document.getElementById('directorName');
  var btnYT       = document.getElementById('btnYT');
  var btnLike     = document.getElementById('btnLike');
  var likeNum     = document.getElementById('likeNum');
  var btnShare    = document.getElementById('btnShare');
  var sharePanel  = document.getElementById('sharePanel');
  var btnSave     = document.getElementById('btnSave');
  var btnFollow   = document.getElementById('btnFollow');
  var soCopy      = document.getElementById('soCopy');

  var liked = false, saved = false, following = false;

  var YT_THUMB = 'https://img.youtube.com/vi/';
  var YT_EMBED = 'https://www.youtube.com/embed/';
  var YT_WATCH = 'https://www.youtube.com/watch?v=';

  /* ── Set thumbnail ── */
  if (splashThumb) {
    splashThumb.src = YT_THUMB + videoId + '/maxresdefault.jpg';
    splashThumb.onerror = function() {
      splashThumb.src = YT_THUMB + videoId + '/hqdefault.jpg';
    };
  }

  /* ── Set YouTube link ── */
  if (btnYT) btnYT.href = YT_WATCH + videoId;

  /* ════════════════════════════════════════
     Fetch real title + author from noembed
     Works from any https:// origin (GitHub Pages)
  ════════════════════════════════════════ */
  var oembedURL = 'https://noembed.com/embed?url=' + encodeURIComponent(YT_WATCH + videoId);

  fetch(oembedURL)
    .then(function(r) { return r.json(); })
    .then(function(data) {
      var title  = data.title        || 'MinBiladi Film';
      var author = data.author_name  || 'MinBiladi';

      /* Page title */
      document.title = title + ' - MinBiladi';

      /* Video title heading */
      if (vTitle) vTitle.textContent = title;

      /* Director / channel name */
      if (directorName) directorName.textContent = author;

      /* Description — use title as basis since YT oEmbed has no description */
      if (vDesc) {
        vDesc.textContent = '"' + title + '" is een film gepubliceerd door ' + author + ' via MinBiladi — jouw bestemming voor inspirerende en onafhankelijke cinema.';
      }

      /* Update all related card titles that match this videoId */
      var relatedLinks = document.querySelectorAll('a[href*="v=' + videoId + '"] .rcard-title');
      relatedLinks.forEach(function(el) {
        el.textContent = title;
      });
    })
    .catch(function() {
      /* Fallback if fetch fails */
      if (vTitle) vTitle.textContent = 'MinBiladi Film';
      document.title = 'MinBiladi Film - MinBiladi';
    });

  /* ── Play: inject YouTube iframe ── */
  function startVideo(e) {
    if (e) e.stopPropagation();

    var src = YT_EMBED + videoId
      + '?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1';

    var iframe = document.createElement('iframe');
    iframe.src             = src;
    iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');
    
    iframe.style.cssText   = 'position:absolute;inset:0;width:100%;height:100%;border:none;';

    ytWrap.innerHTML = '';
    ytWrap.appendChild(iframe);
    ytWrap.style.display = 'block';

    if (splash) splash.classList.add('hidden');
  }

  if (splashPlay) splashPlay.addEventListener('click', startVideo);
  if (splash)     splash.addEventListener('click', startVideo);

  /* ── Like ── */
  if (btnLike) {
    btnLike.addEventListener('click', function() {
      liked = !liked;
      btnLike.classList.toggle('liked', liked);
      var raw = parseFloat(likeNum.textContent) * (likeNum.textContent.indexOf('K') > -1 ? 1000 : 1);
      var n = Math.round(raw) + (liked ? 1 : -1);
      likeNum.textContent = n >= 1000 ? (n / 1000).toFixed(1) + 'K' : n;
    });
  }

  /* ── Share ── */
  if (btnShare) {
    btnShare.addEventListener('click', function(e) {
      e.stopPropagation();
      if (sharePanel) sharePanel.classList.toggle('open');
    });
  }
  document.addEventListener('click', function(e) {
    if (sharePanel && btnShare && !btnShare.contains(e.target) && !sharePanel.contains(e.target)) {
      sharePanel.classList.remove('open');
    }
  });

  if (soCopy) {
    soCopy.addEventListener('click', function() {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(location.href).then(function() {
          var orig = soCopy.innerHTML;
          soCopy.textContent = 'Copied!';
          setTimeout(function() { soCopy.innerHTML = orig; }, 2000);
        });
      }
    });
  }

  /* ── Save ── */
  if (btnSave) {
    btnSave.addEventListener('click', function() {
      saved = !saved;
      btnSave.classList.toggle('saved', saved);
    });
  }

  /* ── Follow ── */
  if (btnFollow) {
    btnFollow.addEventListener('click', function() {
      following = !following;
      btnFollow.textContent = following ? 'Following' : '+ Follow';
      btnFollow.classList.toggle('following', following);
    });
  }

  /* ── Cursor ── */
  var cursor = document.getElementById('cursor');
  if (cursor) {
    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
    document.querySelectorAll('a,button,.rcard,.vtag,.player-splash').forEach(function(el) {
      el.addEventListener('mouseenter', function() { cursor.classList.add('grow'); });
      el.addEventListener('mouseleave', function() { cursor.classList.remove('grow'); });
    });
  }

});
