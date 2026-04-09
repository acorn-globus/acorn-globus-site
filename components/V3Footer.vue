<template>
  <footer class="footer-redesign">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Brand column -->
        <div class="footer-brand">
          <div class="footer-logo">
            <img
              src="/images/acorn-globus-logo.svg"
              alt="AcornGlobus"
              class="h-6 w-auto"
            >
          </div>
          <p>
            We build products like they're our own. 20+ engineers, 80%+ client
            retention, and partnerships that last years.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><NuxtLink to="/about">About Us</NuxtLink></li>
            <li><NuxtLink to="/services">Services</NuxtLink></li>
            <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/how-we-work">How We Work</NuxtLink></li>
            <li><NuxtLink to="/blog">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><NuxtLink to="/services/resource-augmentation">Resource Augmentation</NuxtLink></li>
            <li><NuxtLink to="/services/full-project-delivery">Full Project Delivery</NuxtLink></li>
            <li><NuxtLink to="/services/maintenance-support">Maintenance &amp; Support</NuxtLink></li>
            <li><NuxtLink to="/services/mvp-development">MVP Development</NuxtLink></li>
          </ul>
        </div>

        <!-- Hire Developers -->
        <div class="footer-col">
          <h4>Hire Developers</h4>
          <ul>
            <li><NuxtLink to="/hire-react-developer">Hire React Developers</NuxtLink></li>
            <li><NuxtLink to="/hire-angular-developer">Hire Angular Developers</NuxtLink></li>
            <li><NuxtLink to="/hire-vuejs-developer">Hire Vue.js Developers</NuxtLink></li>
            <li><NuxtLink to="/hire-nodejs-developer">Hire Node.js Developers</NuxtLink></li>
            <li><NuxtLink to="/hire-rails-developer">Hire Rails Developers</NuxtLink></li>
            <li><NuxtLink to="/hire-python-developer">Hire Python Developers</NuxtLink></li>
            <li><NuxtLink to="/hire-flutter-developer">Hire Flutter Developers</NuxtLink></li>
          </ul>
        </div>

        <!-- Resources -->
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><NuxtLink to="/guides/it-staff-augmentation">IT Staff Augmentation Guide</NuxtLink></li>
            <li><NuxtLink to="/guides/mvp-development">MVP Development Guide</NuxtLink></li>
            <li><NuxtLink to="/case-studies/formester">Formester Case Study</NuxtLink></li>
            <li><NuxtLink to="/case-studies/performline">PerformLine Case Study</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <span>&copy; {{ currentYear }} AcornGlobus. All rights reserved.</span>
        <div class="footer-bottom-right">
          <NuxtLink to="/privacy-policy" class="footer-privacy">
            Privacy Policy
          </NuxtLink>
          <div class="footer-social">
            <a
              href="https://www.linkedin.com/company/acornglobus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://x.com/AcornGlobus"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.7)">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer-redesign {
  background: var(--on-surface);
  color: rgba(255, 255, 255, 0.7);
  padding: 80px 0 40px;
}

.footer-container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr repeat(4, 1fr);
  gap: 48px;
}

.footer-brand p {
  font-size: 15px;
  line-height: 1.6;
  margin-top: 16px;
  color: rgba(255, 255, 255, 0.5);
}

.footer-logo {
  font-size: 18px;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-col h4 {
  font-size: 14px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 10px;
}

.footer-col a {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  transition: color var(--duration-fast) var(--ease-premium);
}

.footer-col a:hover {
  color: rgba(255, 255, 255, 0.9);
}

.footer-bottom {
  margin-top: 64px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
}

.footer-bottom-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.footer-privacy {
  color: rgba(255, 255, 255, 0.5);
  transition: color var(--duration-fast) var(--ease-premium);
}

.footer-privacy:hover {
  color: rgba(255, 255, 255, 0.9);
}

.footer-social {
  display: flex;
  gap: 16px;
}

.footer-social a {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--duration-fast) var(--ease-premium);
}

.footer-social a:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* Responsive — Tablet */
@media (max-width: 1024px) {
  .footer-container {
    padding: 0 32px;
  }

  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  .footer-brand {
    grid-column: span 2;
  }
}

/* Responsive — Mobile */
@media (max-width: 640px) {
  .footer-container {
    padding: 0 20px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-brand {
    grid-column: span 1;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-bottom-right {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
