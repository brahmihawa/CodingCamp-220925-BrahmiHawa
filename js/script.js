// Form submit
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value.trim();
  let tanggal = document.getElementById("tanggal").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let pesan = document.getElementById("pesan").value.trim();

  if (!nama || !tanggal || !gender || !pesan) {
    alert("Harap isi semua field!");
    return;
  }

  let waktuSekarang = new Date().toLocaleString();

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
    <p><strong>Current Time:</strong> ${waktuSekarang}</p>
    <p><strong>Nama:</strong> ${nama}</p>
    <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
    <p><strong>Pesan:</strong> ${pesan}</p>
  `;

  document.getElementById("contactForm").reset();
});

// Toggle menu mobile
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.querySelector("header nav ul").classList.toggle("show");
});
