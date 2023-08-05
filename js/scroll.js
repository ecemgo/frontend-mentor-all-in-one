// common reveal options to create reveal animations
// ScrollReveal({ reset: true, distance: "8rem", duration: 2500, delay: 400 });
ScrollReveal({ distance: '2rem', duration: 2500, delay: 400 });

// target elements, and specify options to create reveal animations
ScrollReveal().reveal('.even', {
  delay: 200,
  origin: 'left',
  interval: 200,
});
ScrollReveal().reveal('.odd', {
  delay: 200,
  origin: 'right',
  interval: 200,
});
