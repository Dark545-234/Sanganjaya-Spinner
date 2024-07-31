function generateGroups() {
    // Ambil nilai input
    let names = document.getElementById('names').value.split(',');
    let groupCount = parseInt(document.getElementById('groupCount').value);
    
    // Hapus spasi ekstra dari nama
    names = names.map(name => name.trim()).filter(name => name !== "");

    // Cek validitas input
    if (names.length < groupCount || groupCount <= 0) {
        alert('atik koma, dudu enter anyingg!!');
        return;
    }
    if (names.length === 0) {
        alert('Masukkna arane disit goblok!!');
        return;
    }

    // Acak nama
    for (let i = names.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [names[i], names[j]] = [names[j], names[i]];
    }

    // Buat grup
    let groups = [];
    for (let i = 0; i < groupCount; i++) {
        groups[i] = [];
    }

    names.forEach((name, index) => {
        groups[index % groupCount].push(name);
    });

    // Tampilkan hasil
    let output = '<h2>Hasil Pengacakan:</h2>';
    groups.forEach((group, index) => {
        output += `<h3>Grup ${index + 1}</h3><ul>`;
        group.forEach(name => {
            output += `<li>${name}</li>`;
        });
        output += '</ul>';
    });

    document.getElementById('output').innerHTML = output;
}
