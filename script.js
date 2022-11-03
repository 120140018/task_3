const judul = document.getElementById('judul');
judul.innerHTML = "Tekan Untuk Henshin!!!";

function klik (){
    const elementh1 = document.createElement('h1');
    const isiTeksh1 = document.createTextNode('Henshin');

    elementh1.append(isiTeksh1);

    const cetak = document.getElementById('core');
    cetak.append(elementh1);
}