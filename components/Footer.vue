<template>
  <footer class="footer__container text-center md:text-start">
    <div class="container__wrapper p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <div
          class="md:col-span-2 mb-4 mb-lg-0 flex flex-col items-center md:items-start"
        >
          <nuxt-link to="/">
            <img
              src="~/assets/images/acorn-globus-logo-dark.svg"
              alt="Company Logo"
              width="150px"
            />
          </nuxt-link>

          <p class="mt-4 max-w-96 mx-auto md:mx-0">
            We do more than just develop software for our partners - we help
            build their businesses. Our experience working with Fortune 500
            companies will help you meet your objectives and reach your goals
            faster than you ever thought possible.
          </p>
          <div class="social__icons flex md:justify-start justify-center mt-4">
            <a
              href="https://www.linkedin.com/company/acornglobus/about/"
              target="_blank"
            >
              <img src="~/assets/images/socials/linkedin.svg" alt="Linkedin" />
            </a>
          </div>
        </div>
        <div class="mb-4 mb-lg-0">
          <h5 class="footer__subheading mb-4">Quick Links</h5>
          <ul class="footer__items list-unstyled mb-0">
            <li>
              <nuxt-link to="/" class="footer__link text-black">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/services" class="footer__link text-black"
                >Services</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/projects" class="footer__link text-black"
                >Projects</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/blog" class="footer__link text-black"
                >Blog</nuxt-link
              >
            </li>
            <li>
              <nuxt-link to="/#cta" class="footer__link text-black"
                >Contact</nuxt-link
              >
            </li>
            <li>
              <a
                href="https://handbook.acornglobus.com"
                class="footer__link text-black"
                >Handbook</a
              >
            </li>
          </ul>
        </div>
        <div class="mb-4 mb-lg-0">
          <h5 class="footer__subheading mb-4">Reach Us</h5>
          <div class="flex md:justify-start justify-center">
            <ul
              class="footer__items list-unstyled flex flex-col align-items-start justify-center"
            >
              <li class="flex items-center">
                <a
                  class="footer__link flex items-center"
                  href="mailto:business@acornglobus.com"
                >
                  <img src="~/assets/images/icons/mail.svg" alt="E-Mail" />
                  <span class="ml-2">business@acornglobus.com</span>
                </a>
              </li>
              <li class="flex items-center">
                <a class="footer__link flex items-center" href="#">
                  <img src="~/assets/images/icons/phone.svg" alt="Phone" />
                  <span class="ml-2">+91-9545993951</span>
                </a>
              </li>
              <li class="flex items-center">
                <a class="footer__link flex items-center" href="#">
                  <img src="~/assets/images/icons/phone.svg" alt="Phone" />
                  <span class="ml-2">+91-8828207511</span>
                </a>
              </li>
              <li class="footer__link flex items-start">
                <img src="~/assets/images/icons/location.svg" alt="Location" />
                <span class="ml-2">49/D, Naya Bazar, Jamshedpur</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center p-3 copyright">
      © {{ currentYear }} Acorn Globus.
      <span class="text-black">All Rights Reserved</span>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style>
.footer__container {
  position: relative;
  z-index: 10;
  background: hsla(222, 58%, 90%, 1);
  padding-top: 48px;
  padding-bottom: 12px;
}

.footer__subheading {
  font-size: 1.5rem;
  line-height: 32px;
  font-weight: 600;
}

.footer__items {
  display: flex;
  flex-direction: column;
  gap: 0.75em;
}

.footer__link {
  color: var(--Secondary-Black);

  /* Body/default */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  text-decoration: none;
}

.social__icons {
  gap: 1em;
}

.copyright {
  font-size: 14px;
  line-height: 22px;
}
</style>
