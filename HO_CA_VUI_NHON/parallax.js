(function () {
    var items = document.querySelectorAll('[data-speed]');
    var lake = document.getElementById('lake');
    var ticking = false;

    function update() {
        var y = Math.min(window.scrollY || window.pageYOffset, lake.offsetHeight);
        items.forEach(function (el) {
            el.style.transform = 'translate3d(0,' + (y * el.dataset.speed).toFixed(1) + 'px,0)';
        });
        ticking = false;
    }
    window.addEventListener('scroll', function () {
        if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
})();