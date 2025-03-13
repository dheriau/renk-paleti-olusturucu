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
}