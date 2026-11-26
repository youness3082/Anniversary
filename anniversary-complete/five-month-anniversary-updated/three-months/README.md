# Anniversary Website — Simple Guide
**Everything personal is in `js/script.js`, at the top, between the "EDIT THIS SECTION" markers.**
- **Names, start date, page title, texts, song path, intro/final photos:** the `SETTINGS` block. `startDate` is written as `2026-06-19` and shows as "Since 06.19.26" above the scrapbook.
- **Letter:** the `letter` list. One quoted line = one paragraph (keep the commas).
- **Photos:** stored in `images/` (keep them small JPGs). No captions are shown.
- **Add / remove / reorder photos:** edit the `photos` list. Add a photo by copying a line and changing the file name (put the file in `images/`), delete a line to remove one, move a line up or down to reorder. `featured: true` makes a photo bigger.
- **Song:** `music/our-song.mp3` (already included). To change it, replace that file, or change `songPath`.
- **Test locally:** in this folder run `python3 -m http.server`, then open http://localhost:8000 (or double-click `index.html`).
- **Deploy:** put the folder on GitHub (New repository > upload files), then on vercel.com: Add New Project > choose the repo > Deploy. Send her the link.
- **Update later:** edit/upload files on GitHub and Commit. Vercel redeploys automatically.
