var feed = new Instafeed({
  get: 'user',
  resolution: 'low_resolution',
  accessToken: '511310839.25c76fb.73881ce9bd904c0bb4040697ec2ae234',
  userId: '5495440910',
  limit: 4,
  template: '<a class="instagram--galery-link" href="{{link}}"><img class="instagram--galery-photo" alt="{{caption}}" onload="instagramLoad(this)" src="{{image}}"></a>'
});
feed.run();

function instagramLoad(img) {
  wrapper = img.parentElement.parentElement;
  total = wrapper.childElementCount,
  img.parentElement.classList.add('loaded');
  var loaded = 0;
  for (var i = 0; i < total; i++) {
    if (wrapper.childNodes[i].className === "instagram--galery-link loaded") {
      loaded += 1;
    }
  }
  if(loaded == total) {
    wrapper.parentElement.classList.add('loaded');
  }
};

function imageLoad(img) {
  img.classList.add('loaded');
}

window.onload = function() {
  document.getElementById('copy').addEventListener('click', function (e) {
    this.parentElement.nextSibling.nextSibling.classList.add('show');
    e.preventDefault();
  });
  var clipboard = new Clipboard('#copy');
}
