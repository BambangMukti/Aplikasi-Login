/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/* Membuat variabel untuk setiap elemen view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* membuat variabel untuk menyimpan informasi emeil dan pssword */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/* menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /* comment: memdapatkan nilai dari masing masing input (email dan password) ketika tombol di klik */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /* memastikan bahwa nilai email dan password sesuai dengan nilai tersimpan */
  if (email == expectedEmail && password == expectedPassword) {

    /* jika sesuai halaman berpindah ke halaman Home */
    goToHome();
  } else {
    ?* jika tidak, akan menempilkan informasi input salah */
    showPopUp();
  }
});
