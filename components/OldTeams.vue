<template>
  <section id="our-team" class="wrapper">
    <div class="container__wrapper">
      <div class="head">
        <div>
          <span class="subtext">our team</span>
          <h2 class="subheading">Get to know us closer</h2>
        </div>
        <div class="team_btns">
          <button @click="handlePrev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#192A52"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button @click="handleNext">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#192A52"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <Carousel
        :breakpoints="breakPoints"
        snap-align="start"
        ref="teamsCarousel"
        style="padding: 0"
      >
        <Slide v-for="member in teamMembers" :key="member.name">
          <div class="team__card">
            <img
              :src="getImageSource(member.profileImage)"
              :alt="member.name"
              class="pr__img"
            />
            <h4 class="pr__name mt-4">{{ member.name }}</h4>
            <p class="pr__role">{{ member.role }}</p>
          </div>
        </Slide>
      </Carousel>

      <div class="team_btns2">
        <button @click="handlePrev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#192A52"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button @click="handleNext">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="#192A52"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { teamMembers } from "~/constants/team";

const breakPoints = {
  320: {
    itemsToShow: 1,
    itemsToScroll: 1,
  },
  768: {
    itemsToShow: 3,
    itemsToScroll: 3,
  },
  1024: {
    itemsToShow: 4,
    itemsToScroll: 4,
  },
};

const teamsCarousel = ref(null);

const handleNext = () => {
  teamsCarousel.value?.next();
};
const handlePrev = () => {
  teamsCarousel.value?.prev();
};

const getImageSource = (image) => {
  return new URL(`../assets/images/team/${image}.webp`, import.meta.url).href;
};
</script>

<style>
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.team_btns {
  display: flex;
  gap: 1rem;
}
.team_btns2 {
  display: none;
}
.team_btns button,
.team_btns2 button {
  height: 56px;
  width: 56px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid var(--Stroke, #e2e2e2);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
}

.team__card {
  margin: 1rem 0;
  padding: 1rem 1.5rem;
  transition: ease-in-out 300ms;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}

.team__card:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
}

.pr__img {
  border-radius: 0.25em;
  filter: grayscale(100%);
  height: auto;
  width: 100%;
}

.pr__name {
  font-size: 1.5rem;
  line-height: 32px;
  color: #333333;
  font-weight: 700;
  text-align: start;
}

.pr__role {
  font-size: 0.76rem;
  color: #192a52;
  font-weight: 600;
  width: 100%;
  text-align: start;
}

.socials {
  gap: 1em;
}

.socials img {
  width: 32px;
  height: 32px;
}

@media screen and (max-width: 544px) {
  .team__card {
    margin: 0;
  }
  .team_btns {
    display: none;
  }
  .team_btns2 {
    display: flex;
    gap: 0.5rem;
  }
  .team_btns2 button {
    height: 48px;
    width: 48px;
  }

  .subtext {
    font-size: 0.75rem;
  }
  .subheading {
    font-size: 32px;
    line-height: 40px;
  }
}
</style>
