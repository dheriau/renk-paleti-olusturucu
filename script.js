<<<<<<< HEAD
function createPalette() {
    const colorPicker = document.getElementById('colorPicker');
    const palette = document.getElementById('palette');
    const baseColor = colorPicker.value;

    // Clear existing palette
    palette.innerHTML = '';

    // Generate 6 different shades of the selected color
    for (let i = 0; i < 6; i++) {
        const shade = shadeColor(baseColor, i * 10 - 25); // Generate different shades

        const colorBox = document.createElement('div');
        colorBox.className = 'color-box border rounded m-2';
        colorBox.style.backgroundColor = shade;
        colorBox.style.width = '100px';
        colorBox.style.height = '100px';
        colorBox.innerText = shade;
        colorBox.onclick = () => copyToClipboard(shade);

        const col = document.createElement('div');
        col.className = 'col-auto';
        col.appendChild(colorBox);

        palette.appendChild(col);
    }
}

function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.getElementById('copyNotification');
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 1000);
    });
=======
// Renk paleti oluşturma fonksiyonu
function createPalette() {
    const colorPicker = document.getElementById('colorPicker'); // Renk seçici elemanı
    const palette = document.getElementById('palette'); // Renk paleti elemanı
    const baseColor = colorPicker.value; // Seçilen temel renk

    // Mevcut paleti temizle
    palette.innerHTML = '';

    // Seçilen rengin 6 farklı tonunu oluştur
    for (let i = 0; i < 6; i++) {
        const shade = shadeColor(baseColor, i * 10 - 25); // Farklı tonlar oluştur

        // Renk kutusu oluştur
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box border rounded m-2';
        colorBox.style.backgroundColor = shade;
        colorBox.style.width = '100px';
        colorBox.style.height = '100px';
        colorBox.innerText = shade; // HEX kodunu kutu üzerinde göster
        colorBox.onclick = () => copyToClipboard(shade); // Tıklanınca kopyalama işlemi

        // Renk kutusunu sütuna ekle
        const col = document.createElement('div');
        col.className = 'col-auto';
        col.appendChild(colorBox);

        // Sütunu palete ekle
        palette.appendChild(col);
    }
}

// Renk tonlarını hesaplama fonksiyonu
function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}

// Renk kopyalama fonksiyonu
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const notification = document.getElementById('copyNotification'); // Kopyalandı bildirimi elemanı
        notification.style.display = 'block'; // Bildirimi göster
        setTimeout(() => {
            notification.style.display = 'none'; // Bildirimi gizle
        }, 1000);
    });
>>>>>>> 4b57020 (Güncellemler)
}