from pathlib import Path
import re
root = Path(r"e:/Offce Project/Pages Routing/AskTalentRecruitment")
css_path = root / "styles" / "globals.css"
css = css_path.read_text(encoding="utf-8")
css = re.sub(r"body \{[^}]*font-family:[^;]+;[^}]*\}",
             "body {\n  background: var(--background);\n  color: var(--foreground);\n  font-family: var(--font-roboto), var(--font-montserrat), system-ui, sans-serif;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: var(--font-montserrat), var(--font-roboto), system-ui, sans-serif;\n}\n",
             css, flags=re.S)
css_path.write_text(css, encoding="utf-8")
for ext in ["*.tsx", "*.ts"]:
    for path in root.rglob(ext):
        if path.name == "next.config.ts":
            continue
        text = path.read_text(encoding="utf-8")
        orig = text
        text = text.replace('style={{ fontFamily: "var(--font-playfair-display), serif" }}', '')
        text = text.replace("style={{ fontFamily: 'var(--font-playfair-display), serif' }}", '')
        text = text.replace('style={{ fontFamily: "var(--font-playfair-display), serif" ,', 'style={{')
        text = text.replace("style={{ fontFamily: 'var(--font-playfair-display), serif' ,", 'style={{')
        text = re.sub(r'fontFamily:\s*(?:"|\')var\(--font-playfair-display\), serif(?:"|\'),?\s*', '', text)
        text = re.sub(r'style=\{\{\s*\}\}', '', text)
        text = text.replace('font-serif', 'font-sans')
        # remove any remaining raw playfair references
        if 'var(--font-playfair-display)' in text:
            text = text.replace('var(--font-playfair-display), serif', '')
        if text != orig:
            path.write_text(text, encoding="utf-8")
print('Done')