# Aditiya × Jannah — Our Little Universe

## Struktur
- `index.html` — halaman utama + galeri dinamis + music player
- `admin.html` — panel admin untuk tambah, caption, dan hapus foto
- `music.js` — daftar lagu
- `photos/` — file foto
- `photos.json` — daftar foto dan caption
- `.github/workflows/pages.yml` — deploy GitHub Pages

## Admin: tambah foto
Buka `admin.html` di situs yang sudah live.

1. Isi Username/org GitHub, repo, branch, dan token.
2. Klik **Simpan & sembunyikan**. Setelah tersimpan, detail repository dan token langsung disembunyikan dari tampilan admin.
3. Klik/seret foto ke panel **Tambah ke album**.
4. Isi caption di masing-masing preview.
5. Klik **Proses & masuk ke galeri**.
6. Foto dan `photos.json` akan di-commit ke GitHub. GitHub Pages akan deploy ulang lewat workflow.

Pengaturan disimpan di `localStorage` browser. Penyembunyian field di UI bukan enkripsi; karena itu jangan gunakan halaman admin di perangkat bersama dan jangan membagikan token.

## Hapus foto
Di bagian **Foto yang sudah masuk**, tekan tombol merah pada foto yang ingin dihapus. Admin akan menghapus entri dari `photos.json` dan mencoba menghapus file gambar yang bersangkutan.

## Galeri
Galeri utama membaca `photos.json` secara dinamis. Jumlah foto bisa bertambah terus tanpa perlu mengubah HTML. Layout responsif akan menyesuaikan desktop dan mobile, gambar memakai lazy-loading, dan foto hero otomatis mengambil foto pertama yang tersedia.

## Musik
Musik **tidak autoplay** saat halaman dibuka. Pengunjung harus menekan tombol Play sendiri. Ganti daftar lagu di `music.js`.

```js
window.LOVE_SONGS = [
  {
    title: "Judul Lagu",
    artist: "Aditiya × Jannah",
    src: "https://contoh.com/lagu.mp3",
    cover: "photos/01.jpg"
  }
];
```

## Test lokal
```bash
python -m http.server 8080
```
Lalu buka `http://127.0.0.1:8080`.

## GitHub Pages
Workflow menggunakan GitHub Pages melalui GitHub Actions. Pada repository, pastikan **Settings → Pages → Source** menggunakan **GitHub Actions**.
