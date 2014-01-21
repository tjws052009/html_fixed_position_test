$(function() {
  setOffset();

  var timerClear = true;
  $(window).resize(function() {
    if (timerClear == true) {
      timerClear = false;
      setTimeout( function() {
        setOffset();
        timerClear = true;
      }, 200)
    }
  });
});



// ===========================
setOffset = function() {
  m_w = $('.main').width();
  console.debug(m_w);
  
  m_l = $('.main').offset().left;
  console.debug(m_l);

  o_w = $('.follow').width();
  console.debug(o_w);

  $('.follow').css('left', (m_w + m_l - o_w) + 'px');
}
