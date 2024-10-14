const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
  'am a software developer',
  'love solving problems',
  'develop complex web applications',
  "don't fix printers ",
  'am passionate about data',
];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing'))
      cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

function Download(url) {
  document.getElementById('my_iframe').src = url;
}

function downloadPDF() {
  const url = '/assets/files/resume.pdf'; // Replace with the actual path to your PDF file

  // Create a temporary link element
  const link = document.createElement('a');
  link.href = url;
  link.download = 'resume.pdf'; // Replace with the desired filename

  // Trigger a click event on the link to initiate the download
  link.click();
}

const downloadButton = document.getElementById('download-button');

// Add a click event listener to the button
downloadButton.addEventListener('click', downloadPDF);
