$(document).ready(() => {
    const animationContainer = $("#animation-container");

    $(window).scroll(() => {
        const containerTop = animationContainer.offset().top;
        const containerHeight = animationContainer.height();
        const windowHeight = $(window).height();
        const scrollPosition = $(window).scrollTop();

        if (scrollPosition > containerTop - windowHeight * 0.5 && scrollPosition < containerTop + containerHeight) {
            // Element is in or near the viewport
            animationContainer.css({ opacity: 1, transform: "translateY(0)" });
        } else {
            // Element is out of the viewport
            animationContainer.css({ opacity: 0, transform: "translateY(20px)" });
        }
    });
});