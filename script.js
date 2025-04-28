// Define the *inner content* for each section
const sections = {
  home: `
      <h1>ABIR DAS</h1>
      <h2>Bachelor of Science in Artificial Intelligence</h2>
      <h3>Welcome to my Portfolio!</h3>
  `,
   about: `
      <h1>About Me</h1>
      <p>I am an AI Engineer with hands-on experience developing cutting-edge solutions in computer vision, natural language processing, and deep learning.</p>
      <p>Passionate about solving real-world challenges, I thrive on creating scalable AI models and deploying them using advanced tools like TensorFlow, PyTorch, and AWS SageMaker. With a strong foundation in algorithm development and a keen interest in exploring robotics and explainable AI, I am eager to contribute to impactful projects that push the boundaries of artificial intelligence.</p>
      <div class="social-icons">
          <a href="https://www.linkedin.com/in/abir-das-0042b1275/" target="_blank" aria-label="LinkedIn Profile"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/AbirDas-5151" target="_blank" aria-label="GitHub Profile"><i class="fab fa-github"></i></a>
          <a href="https://www.instagram.com/_abir_09" target="_blank" aria-label="Instagram Profile"><i class="fab fa-instagram"></i></a>
          <a href="https://scholar.google.com/citations?user=MlEmmggAAAAJ&hl=en" target="_blank" aria-label="Google Scholar Profile"><i class="fas fa-graduation-cap"></i></a>
          <a href="https://twitter.com/Abir_Das09" target="_blank" aria-label="Twitter Profile"><i class="fab fa-twitter"></i></a>
      </div>
  `,
  resume: `
       <div class="resume-section"> 
           <h1>Resume</h1>
           <h2>Download my resume to explore my skills and experience in detail. I am always eager to discuss how my expertise can contribute to your team.</h2>
           <a href="Resume.pdf" class="download-btn" download>Download Resume <i class="fas fa-download"></i></a>
       </div>
  `,
  publications: `
       <div class="publications">
          <h1>Publications</h1>
          <ul>
              <li>
                  <strong>Machine Fault Diagnosis Using Sensors Data and Explainable AI Techniques</strong> - Published in SCIE Journal (CMC)
                   <br/>
                   <a href="https://www.techscience.com/cmc/v80n3/57907" target="_blank">Read More</a>
              </li>
              <li>
                  <strong>Enhanced EEG Signal Classification in Brain Computer Interfaces Using Hybrid Deep Learning Models</strong> - Under Review (Springer Nature Scientific Reports)
                  <br/>
                   <em>(Under Review)</em>
              </li>
          </ul>
      </div>
  `,
  contact: `
      <h1>Contact Me</h1>
      <form action="send_message.php" method="POST" class="contact-form" id="portfolio-contact-form">
          <label for="name" class="sr-only">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required>

          <label for="email" class="sr-only">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required>

          <label for="message" class="sr-only">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
      </form>
  `
};

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

  const mainContent = document.getElementById('main-content');
  const navLinks = document.querySelectorAll('.sidebar nav a');
  const copyrightYearSpan = document.getElementById('copyright-year');

  // Function to handle section switching
  function switchSection(sectionKey) {
       const contentToShow = sections[sectionKey];

       // --- Content Alignment Fix ---
       // Set the innerHTML of the main container directly
       // This preserves the original #main-content element and its flex centering
       if (contentToShow) {
           mainContent.innerHTML = contentToShow;

           // Re-apply initial-content class specifically for home section if needed
           if (sectionKey === 'home') {
               mainContent.classList.add('initial-content');
           } else {
               mainContent.classList.remove('initial-content');
           }

       } else {
           mainContent.innerHTML = `<h1>Error</h1><p>Content not found.</p>`; // Fallback
           mainContent.classList.remove('initial-content');
       }


       // --- Update Active Link ---
       navLinks.forEach(nav => nav.classList.remove('active-link'));
       const activeLink = document.querySelector(`.sidebar nav a[data-section="${sectionKey}"]`);
       if (activeLink) {
           activeLink.classList.add('active-link');
       }


       // --- Accessibility & UX ---
       // Scroll main content area to top
       mainContent.scrollTop = 0;

       // Focus the new heading (defer slightly for rendering)
       const newHeading = mainContent.querySelector('h1');
       if(newHeading) {
           if (!newHeading.hasAttribute('tabindex')) {
               newHeading.setAttribute('tabindex', '-1');
           }
            setTimeout(() => {
               newHeading.focus({ preventScroll: true });
            }, 50); // Small delay might help ensure element is fully ready
       }
  }

  // Add click listeners to navigation links
  navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const sectionKey = this.getAttribute('data-section');
          switchSection(sectionKey);
      });
  });

  // Dynamically update copyright year
  if (copyrightYearSpan) {
      copyrightYearSpan.textContent = new Date().getFullYear();
  }

  // Initial state check (optional, HTML handles initial active class)
  // if (!document.querySelector('.sidebar nav a.active-link')) {
  //     document.querySelector('.sidebar nav a[data-section="home"]').classList.add('active-link');
  // }

}); // End DOMContentLoaded