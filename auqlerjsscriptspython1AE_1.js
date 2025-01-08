/*auqler*/

document.addEventListener("DOMContentLoaded", function () {
    var userAgent = navigator.userAgent.toLowerCase();
    var desktopDevices = /windows nt|macintosh|macos|linux x86_64|x11|ubuntu|fedora|debian|mint|red hat|suse|chrome os|freebsd|openbsd|netbsd|dragonfly/;

    if (!desktopDevices.test(userAgent)) {
        window.location.href = "auqlerunavailableAE_1.html";
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.createElement('div');
    popup.className = 'popup';
    document.body.appendChild(popup);

    const iconNames = {
        'iconhtmlcss': 'See HTML, CSS and JS projects',
        'iconx64dbg': 'See x64dbg projects'
    };

    const icons = document.querySelectorAll('.icon, .iconhtmlcss, .iconx64dbg');
    
    icons.forEach(icon => {
        const name = iconNames[icon.className];
        
        icon.addEventListener('mousemove', function(e) {
            popup.textContent = name;
            popup.style.left = e.pageX + 10 + 'px';
            popup.style.top = e.pageY + 10 + 'px';
            popup.style.opacity = '1';
        });

        icon.addEventListener('mouseenter', function() {
            popup.style.opacity = '1';
        });

        icon.addEventListener('mouseleave', function() {
            popup.style.opacity = '0';
        });
    });
});
