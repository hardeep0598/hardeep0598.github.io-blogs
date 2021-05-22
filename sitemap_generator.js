const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://techwithhk.codes",
	pagesDirectory: __dirname + "/notes",
	targetDirectory: "public/",
	ignoredExtensions: ["js", "map"],
	ignoredPaths: ["[fallback]"],
});
