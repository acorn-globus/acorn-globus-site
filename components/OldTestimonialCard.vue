<template>
  <div class="card">
    <div>
      <img class="card__rating" :src="fiveStar" alt="Five Star Rating" />
      <h6 class="card__heading">“{{ title }}”</h6>
      <p class="card__text">
        {{ content }}
      </p>
    </div>
    <div class="card__user">
      <img class="card__user-image" :src="avatar" :alt="name" />
      <div class="card__user-info">
        <p class="card__user-info-name">{{ name }}</p>
        <p class="card__user-info-position">{{ position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import fiveStar from "~/assets/images/services/five-star.svg";

const props = defineProps(["name", "position", "avatar", "title", "content"]);
</script>

<style scoped>
.card {
  border: 1px solid rgba(18, 20, 29, 0.1);
  background: white;
  display: flex;
  padding: 16px 24px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4px;
  align-self: stretch;
}

.card__rating {
  width: 96px;
  height: 42px;
}

.card__heading {
  color: var(--Primary-Black, #12141d);
  font-size: 22px;
  font-weight: 600;
  line-height: 28px;
  margin: 8px 0;
}

.card__text {
  color: var(--Secondary-Black, #363636);
  font-size: 16px;
  line-height: 30px;
}

.card__user {
  display: flex;
  width: 100%;
  gap: 12px;
  margin-top: 48px;
  align-items: flex-start;
}

.card__user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.card__user-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0;
}

.card__user-info-name {
  color: var(--Primary-Black, #12141d);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}

.card__user-info-position {
  margin-top: 4px;
  color: var(--Secondary-Black, #363636);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  align-self: stretch;
}

@media screen and (max-width: 600px) {
  .card {
    width: 100%;
    padding: 12px 16px;
    gap: 0;
  }

  .card__rating {
    width: 72px;
    height: 32px;
  }

  .card__heading {
    font-size: 18px;
    line-height: 24px;
    height: auto;
  }

  .card__text {
    font-size: 14px;
    line-height: 24px;
    height: auto;
    margin-top: 8px;
  }

  .card__user {
    margin-top: 24px;
  }

  .card__user-info {
    gap: 4px;
  }

  .card__user-info-name {
    font-size: 14px;
    line-height: 18px;
  }

  .card__user-info-position {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
