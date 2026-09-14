# Aditiya × Jannah — Our Little Universe

## Struktur
- `index.html` — tampilan utama
- `music.js` — **satu-satunya file yang perlu diedit untuk mengganti lagu**
- `photos/01.jpg ... 05.jpg` — foto galeri

## Ganti lagu
Edit `music.js`:

```js
window.LOVE_SONGS = [
  {
    title: "Judul Lagu",
    artist: "Aditiya × Jannah",
    src: "https://contoh.com/audio.mp3",
    cover: "photos/01.jpg"
  }
];
```

`src` harus berupa direct audio URL yang dapat diputar oleh elemen `<audio>` atau path file lokal.

## Test lokal
```bash
python -m http.server 8080
```
Buka `http://127.0.0.1:8080`

## GitHub Pages
Workflow GitHub Pages sudah disertakan di `.github/workflows/pages.yml`.

Setelah file ini di-push ke branch `main`:
1. Buka **Settings → Pages** di repo GitHub.
2. Pada **Source**, pilih **GitHub Actions**.
3. Tidak perlu memilih `main` + `/(root)` lagi.
4. Push berikutnya ke `main` akan otomatis menjalankan deployment.

Workflow memakai `actions/configure-pages`, `actions/upload-pages-artifact`, dan `actions/deploy-pages` sesuai alur GitHub Pages untuk custom workflow.

