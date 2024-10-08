<template>
    <div class="card flex flex-col items-center lg:items-start">
      <img v-show="icon != null" class="card__img" :src="icon" :alt="title" />
      <div class="card__content">
        <p class="card__content-title">{{ title }}</p>
        <p class="card__content-description">
          {{ description }}
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps(["title", "description", "icon"]);
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .card {
    gap: 12px;
    flex: 1 0 0;
    border: none;
    background: #fff;
    outline: none;
  }
  .card__img {
    display: flex;
    width: 48px;
    height: 48px;
    padding: 6px;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    border: 8px solid #ecf1fc;
    background: #ecf1fc;
  }
  .card__content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .card__content-title {
    color: var(--clr-primary #192a52);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px; /* 133.333% */
    text-transform: capitalize;
  }
  .card__content-description {
    color: var(--Gray-600, #475467);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  
  @media screen and (max-width: 600px) {
    .card__img {
      width: 40px;
      height: 40px;
      border-radius: 24px;
      padding: 4px;
    }
    .card__content-title {
      font-size: 20px;
      line-height: 28px;
    }
    .card__content-description {
      font-size: 16px;
      line-height: 24px;
    }
  }
  </style>
  