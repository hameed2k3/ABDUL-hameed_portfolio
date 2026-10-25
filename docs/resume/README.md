# Resume build

`resume.html` is the source. The PDF keeps clickable links and plain text (ATS-friendly).

Export with Chrome headless:

```bash
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="Abdul-Hameed-Resume.pdf" "file:///D:/users/hameed/Desktop/porfolio/docs/resume/resume.html"
```

Then copy the PDF to `public/asset/Abdul-Hameed-Resume.pdf` so the portfolio download matches.
