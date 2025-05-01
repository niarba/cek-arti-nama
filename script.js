function getNameMeaning() {
    var name = document.getElementById('name-input').value;
    var result = document.getElementById('result');

    // Untuk keperluan demo, kita hanya menampilkan nama yang dimasukkan
    // Kamu bisa mengganti kode ini dengan API atau data lain untuk mencari arti nama
    if (name) {
        result.innerHTML = 'Arti nama "' + name + '" adalah: <strong>Nama yang indah dan bermakna.</strong>';
    } else {
        result.innerHTML = 'Silakan masukkan nama.';
    }
}
