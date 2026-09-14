# Aditiya × Jannah — Our Little Universe

## Struktur
- `index.html` — tampilan utama
- `music.js` — **satu-satunya file yang perlu diedit untuk mengganti lagu**
- `photos/` — file-file foto galeri
- `photos.json` — daftar & urutan foto yang tampil di galeri

## Tambah foto
Ada 2 cara:

**A. Lewat halaman admin (paling gampang, tanpa buka github.com)**
1. Buka `admin.html` di situs yang sudah live (mis. `https://username.github.io/jnnah-main/admin.html`).
2. Isi Username GitHub, nama repo, dan sebuah *personal access token* (caranya ada di halaman itu, sekali bikin langsung tersimpan di browser). Klik "Tes koneksi".
3. Seret/pilih foto, isi caption kalau mau, klik "Unggah ke galeri".
4. Foto langsung ke-commit ke repo dan situs otomatis ter-deploy ulang lewat GitHub Actions (±1 menit). Halaman ini juga bisa dipakai buat hapus foto lama.

⚠️ Jangan sebarkan link `admin.html` ke orang lain selama token masih tersimpan di browser tersebut — siapa pun yang buka bisa ubah galeri.

**B. Manual lewat repo** (kalau lebih suka edit langsung)
Galeri baca otomatis dari `photos.json`, jadi tambah foto tidak perlu sentuh HTML/CSS sama sekali:

1. Taruh file foto baru di folder `photos/` (nama bebas, contoh `06.jpg`).
2. Tambah barisnya di `photos.json`:
   ```json
   {"file":"06.jpg","caption":"caption singkatnya"}
   ```
3. Simpan. Posisi & rotasi tiap foto di layout "papan gabus" dibuat otomatis mengikuti urutan di `photos.json` (pola diulang tiap 6 foto), jadi tampilannya tetap rapi-berantakan mau berapa pun jumlah fotonya.

Gambar sebaiknya di-compress dulu (idealnya di bawah ~300KB per foto) supaya galeri tetap cepat dibuka.

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

