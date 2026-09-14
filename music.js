/*
  EDIT LAGU HANYA DI FILE INI.
  Cukup satu lagu (format mp3). Taruh file mp3-nya di folder "music/"
  di repo ini, lalu isi "src" dengan path relatif ke file itu,
  misalnya: "music/lagu-kita.mp3"
  Bisa juga diisi direct link mp3 kalau lagunya di-hosting online.
*/
window.LOVE_SONGS = [
  {
    title: "Judul Lagu",
    artist: "Aditiya × Jannah",
    src: "https://e.top4top.io/m_3909y7snq0.mp3",
    cover: "photos/01.jpg"
  }
];

// kompatibilitas
window.LOVE_SONG = window.LOVE_SONGS[0];
