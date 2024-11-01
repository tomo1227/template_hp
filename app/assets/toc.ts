import * as tocbot from "tocbot";

tocbot.init({
  tocSelector: "#toc",
  contentSelector: ".markdown",
  headingSelector: "h1, h2, h3",
  headingsOffset: 40,
  collapseDepth: 3,
  scrollSmoothOffset: -40,
});
