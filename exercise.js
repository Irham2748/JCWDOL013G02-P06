/*
Create a function to calculate array of student data
    ● The object has this following properties :
    ○ Name → String
    ○ Email → String
    ○ Age → Date
    ○ Score → Number
● Parameters : array of student
● Return values :
    ○ Object with this following properties :
          ■ Score
            ● Highest
            ● Lowest
            ● Average
          ■ Age
            ● Highest
            ● Lowest
            ● Average
*/
function hitungStatistikSiswa(dataSiswa) {
  if (dataSiswa.length === 0) {
    return null;
  }

  let skorTertinggi = dataSiswa[0].Skor;
  let skorTerendah = dataSiswa[0].Skor;
  let totalSkor = 0;

  let usiaTertinggi = dataSiswa[0].Usia;
  let usiaTerendah = dataSiswa[0].Usia;
  let totalUsia = 0;

  for (let i = 0; i < dataSiswa.length; i++) {
    let siswa = dataSiswa[i];

    // Menghitung statistik skor
    if (siswa.Skor > skorTertinggi) {
      skorTertinggi = siswa.Skor;
    }
    if (siswa.Skor < skorTerendah) {
      skorTerendah = siswa.Skor;
    }
    totalSkor += siswa.Skor;

    // Menghitung statistik usia
    if (siswa.Usia > usiaTertinggi) {
      usiaTertinggi = siswa.Usia;
    }
    if (siswa.Usia < usiaTerendah) {
      usiaTerendah = siswa.Usia;
    }
    totalUsia += siswa.Usia;
  }

  const jumlahSiswa = dataSiswa.length;

  return {
    Skor: {
      Tertinggi: skorTertinggi,
      Terendah: skorTerendah,
      RataRata: totalSkor / jumlahSiswa,
    },
    Usia: {
      Tertinggi: usiaTertinggi,
      Terendah: usiaTerendah,
      RataRata: totalUsia / jumlahSiswa,
    },
  };
}

// Contoh penggunaan
const dataSiswa = [
  { Nama: "Muhammad Irham", Surel: "m.irham2748@gmail.com", Usia: 24, Skor: 95 },
  { Nama: "Taufuq Al-Haddad", Surel: "Taufiq@gmail.com", Usia: 26, Skor: 90 },
  { Nama: "Ananda Fajri Ramadhan", Surel: "Ananda@gmail.com", Usia: 25, Skor: 88 },
];

const statistik = hitungStatistikSiswa(dataSiswa);
console.log(statistik);
