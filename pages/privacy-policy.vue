<template>
  <div class="bg-primary">
    <Nav />
  </div>
  <div class="bg-[#fafbff]">
    <div class="container__wrapper py-12">
      <h1 class="text-3xl font-bold">Privacy Policy for AcornGlobus</h1>
      <h3 class="mt-6"><strong>Your Privacy Matters</strong></h3>
      <p class="my-1">
        At AcornGlobus, we are committed to protecting your privacy. This
        Privacy Policy outlines how we collect, use, disclose, and safeguard
        your personal information.
      </p>
      <h3 class="mt-3"><strong>Information We Collect</strong></h3>
      <p class="my-1">
        We collect personal information only when you voluntarily provide it
        through our website's contact forms. This information may include your
        name, email address, phone number, and address.
      </p>
      <p class="my-1">
        We also use Google Analytics and Microsoft Clarity to collect
        non-personal information about your website usage, such as:
      </p>
      <ul class="my-1">
        <li>IP address</li>
        <li>Browser type</li>
        <li>Device type</li>
        <li>Operating system</li>
        <li>Pages visited</li>
        <li>Time spent on pages</li>
        <li>Links clicked</li>
      </ul>
      <h3 class="mt-3"><strong>How We Use Your Information</strong></h3>
      <p class="my-1">We use the information we collect to:</p>
      <ul class="my-1">
        <li>Respond to your inquiries and requests</li>
        <li>Improve our website and services</li>
        <li>Analyze website traffic and user behavior</li>
        <li>Comply with legal obligations</li>
        <li>Sharing Your Information</li>
      </ul>
      <p class="my-1">
        We may share your personal information with third-party service
        providers, such as Google Analytics and Microsoft Clarity, to help us
        analyze website traffic and user behavior. However, we only share
        limited, non-personal information with these providers.
      </p>
      <h3 class="mt-3"><strong>Data Security</strong></h3>
      <p class="my-1">
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, or
        destruction. However, please be aware that no security system is
        perfect, and we cannot guarantee the absolute security of your
        information.
      </p>
      <h3 class="mt-3"><strong>Your Rights</strong></h3>
      <p class="my-1">You have the right to:</p>
      <ul class="my-1">
        <li>Access your personal information</li>
        <li>Correct any inaccuracies in your personal information</li>
        <li>Request the deletion of your personal information</li>
      </ul>
      <p class="my-1">
        To exercise these rights, please contact us using the information
        provided on our website.
      </p>
      <h3 class="mt-3"><strong>Changes to This Privacy Policy</strong></h3>
      <p class="my-1">
        We may update this Privacy Policy from time to time. We will notify you
        of any significant changes by posting a notice on our website.
      </p>
      <h3 class="mt-3"><strong>Contact Us</strong></h3>
      <p class="my-1">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at
        <a
          class="text-decoration-underline"
          href="mailto:business@acornglobus.com"
        >
          business@acornglobus.com
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
import getSiteMeta from "~/utils/getSiteMeta";

const metaData = {
  type: "website",
  url: "https://acornglobus.com/privacy-policy/",
  title: "Privacy Policy | Acorn Globus",
  description:
    "Learn how AcornGlobus collects, uses, and protects your personal information, along with your rights regarding data access, correction, and deletion. Your privacy is our priority.",
  mainImage: "https://acornglobus.com/acorn-globus.png",
  mainImageAlt: "Acorn Globus Logo",
};
const meta = getSiteMeta(metaData);

useHead({
  title: "Privacy Policy | Acorn Globus",
  meta: meta,
  link: [
    {
      hid: "canonical",
      rel: "canonical",
      href: "https://acornglobus.com/privacy-policy/",
    },
  ],
});
</script>

<style scoped></style>
