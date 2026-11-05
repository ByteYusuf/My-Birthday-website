(function () {
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var btn = document.getElementById('openBtn'), app = document.getElementById('app');
    btn.addEventListener('click', function () {
        app.classList.add('show'); btn.setAttribute('aria-expanded', 'true');
        document.getElementById('cover').style.minHeight = '0'; btn.style.display = 'none';
        app.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    });
    var tabs = [document.getElementById('t1'), document.getElementById('t2')];
    tabs.forEach(function (t) {
        t.addEventListener('click', function () {
            tabs.forEach(function (o) { var on = o === t; o.setAttribute('aria-selected', on); document.getElementById(o.getAttribute('aria-controls')).hidden = !on });
        })
    });
    document.querySelectorAll('.copy').forEach(function (b) {
        b.addEventListener('click', function () {
            var t = b.parentNode.querySelector('.tr').textContent;
            try { navigator.clipboard.writeText(t).then(function () { b.textContent = 'Copied' }, function () { b.textContent = 'Copy not allowed here' }) } catch (e) { b.textContent = 'Copy not allowed here' }
            setTimeout(function () { b.textContent = 'Copy translation' }, 1800);
        })
    });
    document.getElementById('themeBtn').addEventListener('click', function () {
        var r = document.documentElement, a = r.getAttribute('data-theme');
        var dark = a === 'dark' || (!a && matchMedia('(prefers-color-scheme: dark)').matches);
        r.setAttribute('data-theme', dark ? 'light' : 'dark');
    });
})();