const zoom = mediumZoom('#image1', {
    background: 'rgba(0, 0, 0, 0.9)',
    template: '#template-facebook',
    container: '[data-zoom-container]',
  });



  // You can start manipulating the DOM after the \`opened\` event has been triggered
  zoom.on('opened', () => {
    const closeButton = document.querySelector('[data-zoom-close]');
    closeButton.addEventListener('click', () => zoom.close());
  });

  // Block scroll on zoom
  zoom.on('open', () => {
    document.body.style.overflow = 'hidden';
    document.getElementById("image1").style.opacity  = "0";
  });

  zoom.on('close', () => {
    document.body.style.overflow = '';
    document.getElementById("image1").style.opacity  = "1";
  });