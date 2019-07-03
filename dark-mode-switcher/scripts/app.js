(function __init__() {
    if (localStorage.getItem("isAandharMode")) {
        document.querySelector("html").classList.toggle("dark");
        __setDark();
    }
})();

function aandharMode() {
    var tempArr = document.querySelector("html").classList;
    document.querySelector("html").classList.toggle("dark");

    if (Object.values(tempArr).includes("dark")) {
        localStorage.setItem("isAandharMode", "1");
        __setDark();
    } else {
        localStorage.removeItem("isAandharMode");
        __setLight();
    }
}

function __setLight() {
    document.getElementById("paragraph").innerHTML = "রাতের বেলায় ফিরে যেতে চাঁদ মামার উপর ক্লিক করুন";
    document.getElementById("icon").className = "fas fa-moon";
}

function __setDark() {
    document.getElementById("paragraph").innerHTML = "দিনের বেলায় ফিরে যেতে সূর্য্যি মামার উপর ক্লিক করুন";
    document.getElementById("icon").className = "fas fa-sun";
}