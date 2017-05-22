var feed = new Instafeed({
  get: 'user',
  resolution: 'low_resolution',
  accessToken: '511310839.25c76fb.73881ce9bd904c0bb4040697ec2ae234',
  userId: '511310839',
  limit: 4,
  template: '<a class="instagram--galery-link" href="{{link}}"><img class="instagram--galery-photo" alt="{{caption}}" src="{{image}}"></a>'
});
feed.run();

window.onload = function() {
  console.log(document.getElementById('copy'));
  document.getElementById('copy').addEventListener('click', function (e) {
    this.parentElement.nextSibling.nextSibling.classList.add('show');
    e.preventDefault();
  });
}
