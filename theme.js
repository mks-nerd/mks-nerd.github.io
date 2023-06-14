// parse cookie
function getCookie() {
    let cookie = document.cookie.split(';');
    let theme = '';
    for (let i = 0; i < cookie.length; i++) {
      if (cookie[i].split('=')[0] === 'theme') {
        theme = cookie[i].split('=')[1];
        return theme;
      };
    };
  };
  
  let theme = getCookie() !== undefined ? getCookie() : 'black';
  
  $('body').addClass(theme)
  let xyz = theme === 'black' ? 'navbar-dark' : 'navbar-light'
  if (xyz === 'navbar-light') {
      $('nav')
      .removeClass('navbar-dark')
          .addClass(xyz)
  } else {
      $('nav')
      .removeClass('navbar-light')
      .addClass(xyz)
  }
  if (theme === 'black') {
    $('#black-theme').hide();
    $('#white-theme').show();
  } else {
    $('#white-theme').hide();
    $('#black-theme').show();
  }
  
  $('.theme-toggle').click(function () {
    if ($('body').hasClass('black')) {
      $('body').removeClass('black');
      $('nav')
        .removeClass('navbar-dark')
        .addClass('navbar-light');
      $('#white-theme').hide();
      $('#black-theme').show();
      document.cookie = 'theme=white; path=/';
    } else {
      $('body').addClass('black');
      $('nav')
        .removeClass('navbar-light')
        .addClass('navbar-dark');
      $('#black-theme').hide();
      $('#white-theme').show();
      document.cookie = 'theme=black; path=/';
    };
  });
  