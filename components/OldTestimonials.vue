<template>
  <section id="testimonials" class="testimonials container__wrapper">
    <h2 class="section__heading text-center max-w-screen-lg">
      What our satisfied clients say about Acorn Globus
    </h2>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg-gap-6">
      <TestimonialCard
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        v-bind="testimonial"
      />
    </div>
  </section>
</template>

<script setup>
import enzo from "~/assets/images/testimonials/enzo.jpeg";
import bogdan from "~/assets/images/testimonials/bogdan.jpeg";
import alon from "~/assets/images/testimonials/alon.jpeg";

const testimonials = [
  {
    name: "Alon Diamant",
    position: "CTO at Mayple",
    avatar: alon,
    title: "Proficient and Innovative Development Team",
    content:
      "Acorn Globus is a very proficient team, quick to learn new technologies and concepts. They quickly dove in deep and generated impressive results of high quality that are still operational to this day.",
  },
  {
    name: "Enzo Zadrima",
    position: "Chief Technology Officer at Viewber",
    avatar: enzo,
    title: "Exceptional Development and Vision",
    content:
      "Acorn Globus is a gifted team with a rare combination of attention to detail and an overall sense for the big picture. They are very passionate about what they do and come up proactively with improvement ideas..",
  },
  {
    name: "Bogdan Arsenie",
    position: "CTO at PerformLine & Social Impact Advocate",
    avatar: bogdan,
    title: "Reliable Front-End Solutions",
    content:
      "Acorn Globus is my go-to team when I need a trusted partner to execute any front-end project. They are super attentive, communicate effectively, and accurately manage your expectations for their time and involvement.",
  },
];
</script>

<style scoped>
.testimonials {
  display: flex;
  padding-block: 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  align-self: stretch;
}

.testimonials__header {
  display: flex;
  max-width: 640px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.testimonials__header > p {
  color: var(--Black, #12141d);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
}

.testimonials__header > button {
  display: none;
}

@media screen and (max-width: 768px) {
  .testimonials {
    padding-block: 64px 40px;
    gap: 48px;
  }

  .testimonials__header > p {
    font-size: 32px;
    line-height: 40px;
  }

  .testimonials__header > button {
    display: flex;
    padding: 16px 20px;
    align-items: flex-start;
    gap: 12px;
    border-radius: 4px;
    background: var(--clr-primary #192a52);
    color: white;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    text-transform: capitalize;
  }
}
</style>
