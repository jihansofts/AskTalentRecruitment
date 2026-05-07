const fs = require("fs");
const path = require("path");
const root = path.resolve(
  "e:/Offce Project/Pages Routing/AskTalentRecruitment",
);
const cssPath = path.join(root, "styles", "globals.css");
let css = fs.readFileSync(cssPath, "utf8");
css = css.replace(
  /body \{[\s\S]*?font-family:[^;]+;[\s\S]*?\}/,
  `body {\n  background: var(--background);\n  color: var(--foreground);\n  font-family: var(--font-roboto), var(--font-montserrat), system-ui, sans-serif;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: var(--font-montserrat), var(--font-roboto), system-ui, sans-serif;\n}\n`,
);
fs.writeFileSync(cssPath, css, "utf8");

function processFile(filePath) {
  let text = fs.readFileSync(filePath, "utf8");
  const orig = text;
  text = text
    .split('style={{ fontFamily: "var(--font-playfair-display), serif" }}')
    .join("");
  text = text
    .split("style={{ fontFamily: 'var(--font-playfair-display), serif' }}")
    .join("");
  text = text
    .split('style={{ fontFamily: "var(--font-playfair-display), serif",')
    .join("style={{");
  text = text
    .split("style={{ fontFamily: 'var(--font-playfair-display), serif',")
    .join("style={{");
  text = text
    .split('fontFamily: "var(--font-playfair-display), serif",')
    .join("");
  text = text
    .split("fontFamily: 'var(--font-playfair-display), serif',")
    .join("");
  text = text
    .split('fontFamily: "var(--font-playfair-display), serif"')
    .join("");
  text = text
    .split("fontFamily: 'var(--font-playfair-display), serif'")
    .join("");
  text = text.replace(/style=\{\{\s*\}\}/g, "");
  text = text.replace(/font-serif/g, "font-sans");
  text = text.replace(/var\(--font-playfair-display\), serif/g, "");
  if (text !== orig) {
    fs.writeFileSync(filePath, text, "utf8");
    return true;
  }
  return false;
}

const exts = [".tsx", ".ts"];
const changed = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else if (exts.includes(path.extname(full))) {
      if (path.basename(full) === "next.config.ts") continue;
      if (processFile(full)) changed.push(full);
    }
  }
}
walk(root);
console.log("Updated files:", changed.length);
