document.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;

    document.querySelector('.progress-bar').style.width = scrollPercentage + '%';
});
