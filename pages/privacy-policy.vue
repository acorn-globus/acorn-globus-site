<template>
  <div>
    <!-- ===== HERO ===== -->
    <section class="hero">
      <div class="container-redesign">
        <div style="max-width: 720px;">
          <div class="hero-eyebrow">
            <span>Legal Information</span>
          </div>
          <h1 class="text-display-lg" style="margin-top: 24px;">Privacy Policy</h1>
          <p class="text-body-lg" style="margin-top: 24px; max-width: 600px;">Your privacy matters to us. Learn how we collect, use, and protect your information.</p>
          <p style="margin-top: 16px; font-size: 14px; color: var(--text-tertiary);">Last Updated: January 1, 2025</p>
        </div>
      </div>
    </section>

    <!-- ===== CONTENT ===== -->
    <section class="section-redesign">
      <div class="container-redesign">
        <div class="article-content">

          <!-- 1. Introduction -->
          <h2 class="headline">1. Introduction</h2>
          <p>At Acorn Globus, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

          <!-- 2. Information We Collect -->
          <h2 class="headline">2. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>

          <p class="subsection-title">Contact Information</p>
          <ul>
            <li>Name and email address</li>
            <li>Phone number</li>
            <li>Company information</li>
          </ul>

          <p class="subsection-title">Project Information</p>
          <ul>
            <li>Project requirements</li>
            <li>Technical specifications</li>
            <li>Communication preferences</li>
          </ul>

          <!-- 3. How We Use Your Information -->
          <h2 class="headline">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our services</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you updates and communications</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
            <li>Analyze usage patterns</li>
          </ul>

          <!-- 4. Information Sharing -->
          <h2 class="headline">4. Information Sharing</h2>
          <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.</p>

          <!-- 5. Security -->
          <h2 class="headline">5. Security</h2>
          <p>We implement appropriate technical and organizational measures to maintain the security of your personal information and protect it against unauthorized or unlawful processing and accidental loss, destruction, or damage. Our security measures include encryption, secure servers, and regular security audits.</p>

          <!-- 6. Contact Us -->
          <h2 class="headline">6. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>

          <div class="contact-card">
            <p><strong>Email:</strong> <a href="mailto:business@acornglobus.com">business@acornglobus.com</a></p>
            <p class="contact-card-note">We typically respond within 24 hours</p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
});

useSeoMeta({
  title: 'Privacy Policy - AcornGlobus',
  description: 'Learn how AcornGlobus collects, uses, and protects your personal information. Your privacy matters to us.',
  robots: 'index, follow',
  ogTitle: 'Privacy Policy - AcornGlobus',
  ogDescription: 'Learn how AcornGlobus collects, uses, and protects your personal information.',
  ogImage: 'https://acornglobus.com/acorn-globus.png',
  ogUrl: 'https://acornglobus.com/privacy-policy/',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Privacy Policy - AcornGlobus',
  twitterDescription: 'Learn how AcornGlobus collects, uses, and protects your personal information.',
  twitterImage: 'https://acornglobus.com/acorn-globus.png',
});

useHead({
  link: [{ rel: 'canonical', href: 'https://acornglobus.com/privacy-policy/' }],
});

useBreadcrumbSchema([
  { name: 'Privacy Policy', path: '/privacy-policy/' },
]);
</script>

<style scoped>
/* ===== ARTICLE CONTENT ===== */
.article-content {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 24px;
}

.article-content h2 {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.3;
  color: var(--on-surface);
  margin-top: 56px;
  margin-bottom: 16px;
}

.article-content h2:first-child {
  margin-top: 0;
}

.article-content p {
  font-size: 17px;
  line-height: 1.7;
  color: var(--on-surface-variant);
  margin-bottom: 20px;
}

.article-content ul {
  list-style: none;
  padding: 0;
  margin: 0 0 24px;
}

.article-content ul li {
  position: relative;
  padding-left: 28px;
  font-size: 17px;
  line-height: 1.7;
  color: var(--on-surface-variant);
  margin-bottom: 10px;
}

.article-content ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
}

.article-content strong {
  color: var(--on-surface);
  font-weight: 600;
}

.article-content .subsection-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--on-surface);
  margin-top: 28px;
  margin-bottom: 12px;
}

.article-content a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: opacity var(--duration-fast) var(--ease-premium);
}

.article-content a:hover {
  opacity: 0.8;
}

.contact-card {
  background: var(--surface);
  border-radius: var(--radius-card);
  padding: 32px;
  margin-top: 24px;
}

.contact-card p {
  margin-bottom: 8px;
}

.contact-card .contact-card-note {
  margin-bottom: 0;
  font-size: 14px;
  color: var(--text-tertiary);
  margin-top: 16px;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 640px) {
  .article-content {
    padding: 0;
  }

  .article-content h2 {
    font-size: 24px;
    margin-top: 40px;
  }
}
</style>
