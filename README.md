# Ayush Kumar Ubnare - Portfolio Website

Plain HTML/CSS/JS. Koi build ya npm ki zarurat nahi.

## Files
- `index.html` - poora page (About, Skills, Experience, Projects, Resume, Guides, Contact)
- `style.css` - design (dark/light apne aap, mobile-first)
- `script.js` - menu aur contact form
- `vercel.json` - security headers (HTTPS, CSP, anti-clickjacking)
- `Ayush_Kumar_Ubnare_Resume.pdf` - resume (View/Download button isi se judta hai)

## Mobile (Android) se deploy

1. **GitHub app/website** kholo, naya repo banao (jaise `portfolio`).
2. Chrome mein github.com kholo, **Desktop site** on karo, repo mein **Add file > Upload files**, sabhi 6 files select karke upload karo, **Commit changes**.
3. **vercel.com** par GitHub se login karo > **Add New > Project** > repo `portfolio` > **Deploy**.
4. 1-2 minute mein live link milega. Is link ko LinkedIn ke Featured aur Contact info mein lagao.

## Contact form chalu karna (free)
1. web3forms.com par apna email daalo, **Access Key** mil jayegi.
2. `index.html` mein `YOUR_WEB3FORMS_ACCESS_KEY` ki jagah wo key paste karo. (Ye key public hoti hai, form ke liye safe hai.)
3. Commit karo, Vercel apne aap update kar dega.

## Naya guide (blog post) add karna
`index.html` mein kisi `<details class="post">...</details>` block ko copy karke title aur steps badal do.

## Security checklist
- GitHub, Vercel, domain registrar par 2FA on karo.
- Resume PDF mein phone number hai. Agar public nahi chahiye, to PDF se phone hata kar upload karo.
