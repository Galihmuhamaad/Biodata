// JavaScript untuk Biodata Diri

// Menampilkan pesan sambutan saat halaman dimuat
window.onload = function() {
    alert("Woyyy makan,bisi mati!!");
};

// Membuka semua link sosial media di tab baru secara otomatis
document.querySelectorAll('a').forEach(function(link) {
    link.setAttribute('target', '_blank');
});

// Menambahkan event listener pada link WhatsApp untuk mengonfirmasi pengguna sebelum membuka
document.querySelector('a[href^="https://wa.me/"]').addEventListener('click', function(event) {
    var confirmMessage = "Apakah Anda yakin ingin menghubungi saya melalui WhatsApp?";
    if (!confirm(confirmMessage)) {
        event.preventDefault(); // Mencegah link dibuka jika pengguna memilih 'Batal'
    }
});