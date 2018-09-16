var subtitles = ["Majidul Mooktadeer", "Hamzah Bemat ", "Zaid Shaikh", "Stomach Cancer", "Causes Of Stomach Cancer", "Effects Of Stomach Cancer","Symptoms"];

var projects = [
    {
        title: "Google Presentation.",
        desc: "Stomach Cancer, why you should know about it?",
        img: "christina-website.png",
        link: "https://docs.google.com/presentation/d/1elmdIhrqgfyYwZ5lI7vSOssWs8ebuYRKqTNkFFGVCy4/edit?usp=sharing"
    },
    {
        title: "Majidul Mooktadeer",
        desc: "Designed website dedicated to stomach cancer, gathered research and helped in making the slides.",
        img: "college-organizer.png",
        link: "https://www.facebook.com/profile.php?id=100008014488117&ref=bookmarks"
    },
    {
        title: "Hamzah Bemat",
        desc: "Credited in making the slides and gathered research on stomach cancer.",
        img: "centre-news.jpg",
        link: "https://www.facebook.com/Wrd2hanS?ref=br_rs"
    },
    {
        title: "Zaid Shaikh",
        desc: "Helped gather research and analyzed stomach cancer.",
        img: "all-star-wars.jpg",
        link: "https://www.facebook.com/zaid.shaikh.77715869?fb_dtsg_ag=AdwLbVDKOlsShO8YkpVkBZdYgfMajTIpHLkikOWZRogzDA%3AAdyI31mwsUwbgL735AL7RZvo8qZdTwx5FwlZlz47sneI6w"
    }
]

var skills = [
    {
        name: "html",
        desc: "Infection with a common bacteria knowns as H. Pylori."
    },
    {
        name: "css",
        desc: "Inflammation in gut called gastritis."
    },
    {
        name: "cssd",
        desc: "Type-A Blood"
    },
    {
        name: "photoshop",
        desc: "Epstein-Barr virus Infection"
    }
]

var count = 0;
var tabOutLeft = false;
var tabOutRight = false;

particlesJS.load('particles', 'assets/lib/particles.json', function() {
});

$(document).ready(function () {
    $("#title").fadeIn(1000);
    $("#navbar").fadeIn(2000);
    //$("#bg-pic").attr("src","assets/img/backgrounds/"+(Math.floor(Math.random()*18)+1)+".jpg");
    changeSubtitle();
    for (var i = 0; i < projects.length; i++) {
        $("#sidebar-right").append("<div class='project'><a href=" + projects[i].link + " target='_newtab'><img class='projectImg' src='assets/img/projects/" + projects[i].img + "'></a><h4>" + projects[i].title + "</h4><h5>" + projects[i].desc + "</h5></div>");
    }
    for (var i = 0; i < skills.length; i++) {
        $(".panel-group").append("<div class='panel'><h4><a data-toggle='collapse' data-parent='#accordion' href='#panel-" + skills[i].name + "'><img class='projectImg' src='assets/img/skills/" + skills[i].name + ".png'></a></h4><div id='panel-" + skills[i].name + "' class='panel-collapse collapse'><div class='panel-body'>" + skills[i].desc + "</div></div></div>");
    }
    if (window.innerWidth < 700) {
        $("#arrow-right").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
        $("#arrow-left").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
    } else {
        $("#arrow-right").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
        $("#arrow-left").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
    }
});

$("#sidebarTab-right").hover(function () {
    $("#sidebar-right").css("background-color", "#1a1a1a");
}, function () {
    $("#sidebar-right").css("background-color", "#212121");
});

$("#sidebarTab-left").hover(function () {
    $("#sidebar-left").css("background-color", "#1a1a1a");
}, function () {
    $("#sidebar-left").css("background-color", "#212121");
});

$("#sidebarTab-right").click(function () {
    if (window.innerWidth > 700) {
        if (!tabOutRight) {
            $("#title").css("right", "30%");
            $("#sidebar-right").css("right", 0);
            $("#sidebarTab-right").css("right", (.3 * window.innerWidth) - 10);
            $("#arrow-right").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
            tabOutRight = true;
        } else if (tabOutRight) {
            $("#title").css("right", "0");
            $("#sidebar-right").css("right", "-30%");
            $("#sidebarTab-right").css("right", "-10px");
            $("#arrow-right").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
            tabOutRight = false;
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutRight) {
            $("#title").css("transform", "translateY(-95%)");
            $("#sidebar-right").css("bottom", 0);
            $("#sidebarTab-right").css("bottom", (.5 * window.innerHeight) - 10);
            $("#arrow-right").html("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeOut(500);
            }
            tabOutRight = true;
        } else if (tabOutRight) {
            $("#title").css("transform", "translateY(-70%)");
            $("#sidebar-right").css("bottom", "-50%");
            $("#sidebarTab-right").css("bottom", "-10px");
            $("#arrow-right").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeIn(500);
            }
            tabOutRight = false;
        }
    }
});

$("#sidebarTab-left").click(function () {
    if (window.innerWidth > 700) {
        if (!tabOutLeft) {
            $("#title").css("left", "30%");
            $("#sidebar-left").css("left", 0);
            $("#sidebarTab-left").css("left", (.3 * window.innerWidth) - 10);
            $("#arrow-left").html("<i class='fa fa-chevron-left' aria-hidden='true'></i>");
            tabOutLeft = true;
        } else if (tabOutLeft) {
            $("#title").css("left", "0");
            $("#sidebar-left").css("left", "-30%");
            $("#sidebarTab-left").css("left", "-10px");
            $("#arrow-left").html("<i class='fa fa-chevron-right' aria-hidden='true'></i>");
            tabOutLeft = false;
        }
    } else if (window.innerWidth <= 700) {
        if (!tabOutLeft) {
            $("#title").css("transform", "translateY(-95%)");
            $("#sidebar-left").css("bottom", 0);
            $("#sidebarTab-left").css("bottom", (.5 * window.innerHeight) - 10);
            $("#arrow-left").html("<i class='fa fa-chevron-down' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeOut(500);
            }
            tabOutLeft = true;
        } else if (tabOutLeft) {
            $("#title").css("transform", "translateY(-70%)");
            $("#sidebar-left").css("bottom", "-50%");
            $("#sidebarTab-left").css("bottom", "-10px");
            $("#arrow-left").html("<i class='fa fa-chevron-up' aria-hidden='true'></i>");
            if (window.innerWidth < 360) {
                $("#navbar").fadeIn(500);
            }
            tabOutLeft = false;
        }
    }
});

function changeSubtitle() {
    setInterval(function () {
        if (count < subtitles.length - 1) {
            $("#subtitle").html(subtitles[count]);
            count++;
        } else {
            $("#subtitle").html(subtitles[subtitles.length - 1]);
            count = 0;
        }
    }, 1000);
}
