const toggle = document.getElementById('darkToggle');


toggle.addEventListener('click', () => {
document.body.classList.toggle('dark');
document.body.classList.toggle('light');
});


function sendMessage(e) {
e.preventDefault();
alert('Message sent successfully!');
}


// ===== Image Slider =====
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);


const form = document.getElementById("contactForm");
const responseMsg = document.getElementById("responseMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = new URLSearchParams(formData);

  try {
    const response = await fetch("AKfycbzG3U22WIdsjXzwEH2xovTuP_gL6Zwrltt3NgN_NLBd", {
      method: "POST",
      body: data
    });

    const result = await response.json();

    if (result.result === "success") {
      responseMsg.textContent = "Message sent! ✅";
      form.reset();
    } else {
      responseMsg.textContent = "Error sending message ❌";
    }
  } catch (err) {
    responseMsg.textContent = "Error sending message ❌";
    console.error(err);
  }
});
