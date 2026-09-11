window.MathJax = {
  tex: {
    inlineMath: [
      ["\\(", "\\)"],
      ["$", "$" ]
    ],
    displayMath: [
      ["\\[", "\\]"],
      ["$$", "$$"]
    ],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex",
    skipHtmlTags: ["script", "noscript", "style", "textarea", "pre", "code"]
  }
};

document$.subscribe(() => {
  if (window.MathJax) {
    MathJax.startup.output.clearCache();
    MathJax.typesetClear();
    MathJax.texReset();
    MathJax.typesetPromise();
  }
});
