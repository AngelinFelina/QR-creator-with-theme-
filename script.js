function generateQR() {
  const input = document.getElementById("text").value;
  const qrImage = document.getElementById("qrImage");

  if (input.trim() === "") {
    alert("Please enter some text or URL!");
    return;
  }

  // Use Google's chart API to generate QR
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(input)}&size=200x200`;

  qrImage.src = qrUrl;
  qrImage.style.display = "block";
}
const toggleButton = document.getElementById('themeToggle');
const body = document.body;

// Load theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme);
toggleButton.textContent = savedTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');

  const newTheme = body.classList.contains('dark') ? 'dark' : 'light';
  toggleButton.textContent = newTheme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('theme', newTheme);
});
