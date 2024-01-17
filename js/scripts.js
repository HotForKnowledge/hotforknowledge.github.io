// @ts-check

jQuery(function ($) {
  /* ============================================================ */
  /* Responsive Videos */
  /* ============================================================ */

  $(".post-content").fitVids();

  /* ============================================================ */
  /* Scroll To Top */
  /* ============================================================ */

  $(".js-jump-top").on("click", function (e) {
    e.preventDefault();

    $("html, body").animate({ scrollTop: 0 });
  });

  // Tabs

  $(".xtabs").each(function () {
    var t = $(this.childNodes);

    var links = t.find("li a");
    links.on("click", function () {
      var id = $(this).attr("id");
      if ($(this).hasClass("inactive")) {
        links.addClass("inactive");
        $(this).removeClass("inactive");

        t.filter(".xtabscontainer").hide();
        t.filter("#" + id + "C").fadeIn(0);
      }
    });

    t.find("li a:not(:first)").addClass("inactive");
    t.filter(".xtabscontainer").hide();
    t.filter(".xtabscontainer:first").show();
    t.find("a").filter(".xtabselected").trigger("click");
  });

  $(document).on("pagecreate", "#pageone", function () {
    $("p").on("swiperight", function () {
      alert("You swiped right!");
    });
  });
});

tocbot.init({
  // Where to render the table of contents.
  tocSelector: ".toc",
  // Where to grab the headings to build the table of contents.
  contentSelector: ".post-container",
  // Which headings to grab inside of the contentSelector element.
  headingSelector: "h1, h2, h3",
  collapseDepth: 3,
});

function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}

//Add event from js the keep the marup clean
function init() {
  document.getElementById("toc").addEventListener("click", toggleMenu);
  document.getElementById("toc-button").addEventListener("click", toggleMenu);
  document.getElementById("body-overlay").addEventListener("click", toggleMenu);
}

function isSideBar() {
  var button = document.getElementById("toc-button");
  return window.getComputedStyle(button).display != "none";
}

//The actual fuction
function toggleMenu() {
  var ele = document.getElementsByTagName("body")[0];
  if (isSideBar() && !hasClass(ele, "toc-open")) {
    addClass(ele, "toc-open");
  } else {
    removeClass(ele, "toc-open");
  }
}

window.addEventListener("scroll", function () {
  const fixedElement = document.getElementById("toc");
  if (isSideBar()) {
    fixedElement.style.top = "0";
    return;
  }
  
  if (window.scrollY > 80) {
    fixedElement.style.top = "10px";
  } else {
    fixedElement.style.top = Math.max(10, 80 - window.scrollY) + "px";
  }
});

//Prevent the function to run before the document is loaded
document.addEventListener("readystatechange", function () {
  if (document.readyState === "complete") {
    init();
  }
});
