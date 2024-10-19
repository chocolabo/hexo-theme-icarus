(function () {
    /**
     * Icarus 夜间模式 by iMaeGoo
     * https://www.imaegoo.com/
     */

    var isNight = localStorage.getItem('night');
    var nightNav;

    // ナイトモードを適用する関数
    function applyNight(value) {
        if (value && value.toString() === 'true') {
            document.body.classList.remove('light');
            document.body.classList.add('night');
        } else {
            document.body.classList.remove('night');
            document.body.classList.add('light');
        }
    }

    // ナイトモード切り替えボタンを探す
    function findNightNav() {
        nightNav = document.getElementById('night-nav');
        if (!nightNav) {
            setTimeout(findNightNav, 100);
        } else {
            nightNav.addEventListener('click', switchNight);
        }
    }

    // ナイトモードの切り替え処理
    function switchNight() {
        isNight = isNight ? isNight.toString() !== 'true' : true;
        applyNight(isNight);
        localStorage.setItem('night', isNight);
    }

    // ページロード前にナイトモードを適用
    if (isNight && isNight.toString() === 'true') {
        document.body.classList.add('night');
    } else {
        document.body.classList.add('light');
    }

    // ページロード時にナイトモードを適用し、ページを表示
    document.addEventListener('DOMContentLoaded', function() {
        findNightNav();
        applyNight(isNight);

        // ページを表示するためのクラスを追加
        document.body.classList.add('loaded');
    });
}());
