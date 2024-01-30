function go_page(id) {
    jump = id;
    console.log(jump);
    if (window.location.href != "./spot.html") {
        window.location.href = "./spot.html?" + id;
    }
}

function handle_jump() {
    var link = window.location.href.split("?");
    var jump = link[1];
    console.log(jump);
    if (jump != '') {
        to(jump);
        jump = '';
    }
}

function load_jump() {
    to("workshop-intro");
}


function to(id) {
    var target = document.querySelector('#' + id)
    let bridge = target;
    let body = document.body;
    let height = 0;

    do {
        height += bridge.offsetTop;
        bridge = bridge.offsetParent;
    } while (bridge !== body)

    window.scrollTo({
        top: height,
        behavior: 'smooth'
    })
}

var VisibleMenu = '';

// 顯示或隱藏子選單
function switchMenu(theMainMenu, theSubMenu, theEvent) {
    var SubMenu = document.getElementById(theSubMenu);
    if (SubMenu.style.display == 'none') {
        SubMenu.style.minWidth = theMainMenu.clientWidth;
        SubMenu.style.display = 'block';
        VisibleMenu = theSubMenu;
    }
}

// 隱藏子選單
function hideMenu() {
    if (VisibleMenu != '') {
        document.getElementById(VisibleMenu).style.display = 'none';
    }
    VisibleMenu = '';
}



//轉自:https://juejin.cn/post/6868968417769029640


