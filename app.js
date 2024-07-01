let MainNavBar = document.querySelector('.main');
let ExtraNavBar = document.querySelector('.ExtraNav');
let SideNavBar = document.querySelector('.sidebar');


function NavBar() {
    windowWidth = window.innerWidth;
    if (windowWidth <= 900) {
        MainNavBar.style.display = "none";
        ExtraNavBar.style.display = "flex";
        SideNavBar.style.display = "none";

    }
    else {
        MainNavBar.style.display = "flex";
        ExtraNavBar.style.display = "none";
        SideNavBar.style.display = "none";
    }

}
NavBar();
window.addEventListener('resize', NavBar);


//  Responsive bars

// let SideBarOpenHandler = document.querySelector('.');
// let SideBarCloseHandler = document.querySelector('.');

function sidebarOpenHandler() {
    ExtraNavBar.style.display = "none";
    SideNavBar.style.display = "flex";
    SideNavBar.style.transform = 'translate(0%)';

};

function SidebarOffHandler() {
    SideNavBar.style.display = "none";
    ExtraNavBar.style.display = "flex";

}