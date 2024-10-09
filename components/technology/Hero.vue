<template>
  <section class="bg__primary relative overflow-hidden" id="hero">
    <Nav />
    <div class="py-20 relative z-10">
      <div class="container__wrapper">
        <div
          class="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto"
        >
          <div class="flex flex-col items-center">
            <img
              v-show="props.iconPath != null"
              :src="props.iconPath"
              alt="React"
              height="80px"
              width="80px"
            />
            <h1 class="hero__heading">{{ props.title }}</h1>
          </div>
          <p class="hero__subheading">
            {{ props.subtitle }}
          </p>
          <nuxt-link
            href="https://calendar.app.google/So3CCei31oYjhoM47"
            target="_blank"
            class="contact__btn flex items-center justify-center justify-content-md-start"
          >
          {{ props.callToAction }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <img
      src="~/assets/images/acorn-watermark.png"
      alt="Acorn Globus Logo Watermark"
      class="hero-watermark"
    />
  </section>
</template>

<script setup>
  import { defineProps } from 'vue';
  const props = defineProps({
    iconPath: String, // Define data type for each prop
    title: String,
    subTitle: String,
    callToAction: String,
  });
</script>

<style>
.hero__heading {
  color: white;
  font-size: 72px;
  font-weight: 600;
  line-height: 86px;
  text-transform: capitalize;
}

.hero__subheading {
  color: white;
  font-size: 18px;
  line-height: 26px;
}

.contact__btn {
  text-decoration: none;
  display: flex;
  padding: 16px 20px;
  align-items: flex-start;
  gap: 12px;
  border-radius: 4px;
  background: white;
  color: #192a52;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  text-transform: capitalize;
}

.contact__btn:hover {
  color: #192a52;
}

.hero-watermark {
  position: absolute;
  right: -15%;
  top: -10%;
}

@media screen and (max-width: 992px) {
  .hero-watermark {
    right: -30%;
  }
}

@media screen and (max-width: 768px) {
  .hero__heading {
    font-size: 54px;
    line-height: 78px;
  }

  .hero-watermark {
    display: none;
  }

  .hero__subheading {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
}

@media screen and (max-width: 540px) {
  .hero__heading {
    font-size: 40px;
    line-height: 62px;
  }

  .hero {
    z-index: 1;
  }

  .contact__btn {
    padding: 12px 16px;
    font-size: 18px;
    line-height: 24px;
  }
}
</style>
