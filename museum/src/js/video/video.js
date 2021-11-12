$(document).ready(function () {
  $('.video__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.video__slider-small'
  });
  $('.video__slider-small').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    asNavFor: '.video__slider-big',
    focusOnSelect: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    }]
  });
  let currentSlide = 0;
  let previousSlide = 0;
  $('.video__slider-big').on('afterChange', function (event, slick, actualSlide, nextSlide) {
    previousSlide = currentSlide;
    currentSlide = actualSlide;
    if (!videos[previousSlide].paused) {
      stopPreviousVideo();
    }
  })

  $(document).keydown(function (e) {
    if (e.which == 32) {
      return false;
    }
  });

  const player = document.querySelector('.video__slider-box');
  const allVideos = player.querySelectorAll('.video__slider-bigvideo');
  const videos = Array.from(allVideos).splice(1);
  const progress = player.querySelector('.video__slider-inputprogress');
  const volume = player.querySelector('.video__slider-inputsound')
  const bigToggle = player.querySelector('.video__slider-btn');
  const toggle = player.querySelector('.video__slider-play');
  const soundBtn = player.querySelector('.video__slider-sound');
  const screenBtn = player.querySelector('.video__slider-screen');

  function togglePlay() {
    const method = videos[currentSlide].paused ? 'play' : 'pause';
    videos[currentSlide][method]();
  }

  function updateButton() {
    bigToggle.classList.toggle('pause');
    toggle.classList.toggle('pause');
  }

  function stopPreviousVideo() {
    videos[previousSlide].pause();
    videos[previousSlide].currentTime = 0;
    progress.value = 0;
  }

  function handleSoundUpdate() {
    videos[currentSlide][this.name] = this.value;
    if (this.value == 0) {
      soundBtn.classList.add('mute');
    } else {
      soundBtn.classList.remove('mute')
    }
  }

  function toggleSound() {
    if (videos[currentSlide].volume !== 0) {
      videos[currentSlide].volume = 0;
      volume.value = 0;
      colorVolume.call(volume);
    } else {
      videos[currentSlide].volume = 0.4;
      volume.value = 0.4;
      colorVolume.call(volume);
    }
    soundBtn.classList.toggle('mute');
  }

  function handleProgress() {
    const percent = (videos[currentSlide].currentTime / videos[currentSlide].duration) * 100;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${percent}%, #E5E5E5 ${percent}%, #E5E5E5 100%)`;
    progress.value = percent;
  }

  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * videos[currentSlide].duration;
    videos[currentSlide].currentTime = scrubTime;
  }

  function colorVolume() {
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${this.value * 100}%, #E5E5E5 ${this.value * 100}%, #E5E5E5 100%)`;
  }

  let screen = false;

  function toggleScreen() {
    screenBtn.classList.toggle('open');
    if (screen) {
      screen = false;
      videos[currentSlide].webkitExitFullScreen();
    } else {
      screen = true;
      videos[currentSlide].requestFullscreen();
    }
  }

  function playBack() {
    videos[currentSlide].playbackRate -= 0.1;
  }

  function playForward() {
    videos[currentSlide].playbackRate += 0.1;
  }

  function btnControlVideo(event) {
    if (event.code == 'Space') togglePlay();
    if (event.code == 'KeyM') toggleSound();
    if (event.code == 'Comma' && event.shiftKey) playBack();
    if (event.code == 'Period' && event.shiftKey) playForward();
    if (event.code == 'KeyF') toggleScreen();
  }

  videos.forEach(video => video.addEventListener('click', togglePlay));
  videos.forEach(video => video.addEventListener('play', updateButton));
  videos.forEach(video => video.addEventListener('pause', updateButton));
  videos.forEach(video => video.addEventListener('timeupdate', handleProgress));

  bigToggle.addEventListener('click', togglePlay);
  toggle.addEventListener('click', togglePlay);
  volume.addEventListener('click', handleSoundUpdate);
  volume.addEventListener('mousemove', handleSoundUpdate);
  volume.addEventListener('input', colorVolume);
  soundBtn.addEventListener('click', toggleSound);
  screenBtn.addEventListener('click', toggleScreen);
  player.addEventListener('keydown', (e) => btnControlVideo(e));

  let mousedown = false;
  progress.addEventListener('click', scrub);
  progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
  progress.addEventListener('mousdown', () => mousedown = true);
  progress.addEventListener('mouseup', () => mousedown = false);
});