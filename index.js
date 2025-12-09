// Get a reference to the carousel element
const iframeCarousel = document.getElementById('iframeCarousel');

// Add an event listener for when the slide transition is finished
iframeCarousel.addEventListener('slid.bs.carousel', function (event) {
  // Get the newly active slide element (the 'to' slide)
  const activeSlide = event.relatedTarget;
  
  // Find the iframe element within the active slide
  const iframe = activeSlide.querySelector('iframe');
  
  // Check if an iframe exists and if it has a data-src attribute
  if (iframe && iframe.getAttribute('data-src')) {
    // Get the source from the data-src attribute
    const dataSrc = iframe.getAttribute('data-src');
    
    // Set the standard src attribute, which triggers the load
    iframe.setAttribute('src', dataSrc);
    
    // Remove the data-src attribute to prevent re-loading on future slides
    iframe.removeAttribute('data-src');
  }
});