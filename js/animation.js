
const animation = ScrollReveal({
    distance:'30px',
    duration: 1500,
    delay: 400,
    reset: true
})

animation.reveal( '.services-content , .footer-content',{
    delay: 200,
    origin: 'top'
})
animation.reveal( '.hero-content, .services-card',{
    delay: 200,
    origin: 'bottom'
})
animation.reveal( ' .stats-content, .about-content , .contact-content',{
    delay: 200,
    origin: 'left'
})