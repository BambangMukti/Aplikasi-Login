/*08032024
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */

/**

* Membuat variabel loginFormElement untuk tampilan form
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
* Membuat variabel inputEmailElement untuk tampiulan inpau email.
* @contant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
*Membuata variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/

const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expextedEmail untuk menyimpan informasi emeil sementara
*@constant {string}
*/

const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';


/* menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk menyimpan nilai email yg didapatkan saat button ditekan.
  * @constant {string}
  */
  
    
  const email = inputEmailElement.value;

  /**
  * Membuat variabel password untuk menyimpan nilai password yg didapatkan saat button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;
  

  /* memastikan bahwa nilai email dan password sesuai dengan nilai tersimpan */
  
  if (email == expectedEmail && password == expectedPassword) {

    /* jika sesuai halaman berpindah ke halaman Home */
    goToHome();
    
  } else {
    
    /* jika tidak, akan menempilkan informasi input salah */
    
    showPopUp();
  }
});
