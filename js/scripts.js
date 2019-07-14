jQuery(function($) {

    /* ============================================================ */
    /* Responsive Videos */
    /* ============================================================ */

    $(".post-content").fitVids();

    /* ============================================================ */
    /* Scroll To Top */
    /* ============================================================ */

    $('.js-jump-top').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({'scrollTop': 0});
    });
});

hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();
tocbot.init({
    // Where to render the table of contents.
    tocSelector: '.toc',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.post-container',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h1, h2, h3',
    collapseDepth: 4
  });