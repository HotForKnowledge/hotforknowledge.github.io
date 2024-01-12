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
});

tocbot.init({
  // Where to render the table of contents.
  tocSelector: ".toc",
  // Where to grab the headings to build the table of contents.
  contentSelector: ".post-container",
  // Which headings to grab inside of the contentSelector element.
  headingSelector: "h1, h2, h3",
  collapseDepth: 4,
});
