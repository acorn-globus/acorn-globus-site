<template>
  <section id="services" class="wrapper">
    <div class="container__wrapper">
      <div class="flex flex-col items-center justify-center">
        <span class="subtext">our services</span>
        <h2 class="section__heading mb-4">What we offer</h2>
        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-2 md:mt-8"
        >
          <div
            v-for="card in cards"
            class="service__card flex flex-col items-center text-center md:text-start md:items-start"
          >
            <div class="icon">
              <img :src="card.icon" :alt="card.title" />
            </div>
            <h3 class="service__title">{{ card.title }}</h3>
            <p class="service__description">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import webDevIcon from "~/assets/images/services/web-dev.svg";
import appDevIcon from "~/assets/images/services/app-dev.svg";
import enterpriseIcon from "~/assets/images/services/enterprise.svg";
import apiDevIcon from "~/assets/images/services/api-dev.svg";
import cloudIcon from "~/assets/images/services/cloud.svg";
import devopsIcon from "~/assets/images/services/devops.svg";
import maintainanceIcon from "~/assets/images/services/maintainance.svg";
import uiUxIcon from "~/assets/images/services/ui-ux.svg";

const cards = [
  {
    title: "Web Application Development",
    description:
      "Build robust and user-friendly web applications that streamline your business processes and enhance user experience.",
    icon: webDevIcon,
  },
  {
    title: "Mobile Application Development",
    description:
      "Develop feature-rich and engaging mobile applications for iOS and Android that bring your ideas to life and connect you with your audience on the go.",
    icon: appDevIcon,
  },
  {
    title: "Enterprise Software Development",
    description:
      "Development: Design and develop custom enterprise software solutions to automate workflows, manage data efficiently, and empower your organization for growth.",
    icon: enterpriseIcon,
  },
  {
    title: "API Development",
    description:
      "Integrate with existing systems and data sources through secure and efficient API development, channeling new functionalities and fostering collaboration.",
    icon: apiDevIcon,
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive and user-friendly interfaces (UI) and user experiences (UX) that not only look great but also provide a smooth and engaging interaction for your users.",
    icon: uiUxIcon,
  },
  {
    title: "Cloud Integration",
    description:
      "Leverage the scalability and security of cloud-based solutions by seamlessly integrating your applications with leading cloud platforms.",
    icon: cloudIcon,
  },
  {
    title: "DevOps",
    description:
      "Implement DevOps practices to automate software delivery and maintenance processes, ensuring faster development cycles and improved efficiency.",
    icon: devopsIcon,
  },
  {
    title: "Software Maintenance and Support",
    description:
      "Our comprehensive software maintenance and support plans ensure your applications stay up-to-date, secure, and functioning optimally. ",
    icon: maintainanceIcon,
  },
];
</script>

<style scoped>
.service__card {
  gap: 8px;
  padding: 16px;
  border: 0.25px solid transparent;
  transition: all 0.3s ease;
}

.service__card:hover {
  border-radius: 8px;
  border: 0.25px solid var(--Stroke, #e2e2e2);
  background: white;
  box-shadow: 0 4px 7px 0 rgba(0, 0, 0, 0.03);
}

.service__title {
  color: var(--clr-primary #192a52);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 160% */
  text-transform: capitalize;
}

.service__description {
  color: var(--Secondary-Black, #363636);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}
.icon {
  background-color: #f0f4ff;
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 0.5em;
}

.icon > img {
  aspect-ratio: 1/1;
}

@media screen and (max-width: 768px) {
  .service__card {
    max-width: 100%;
    gap: 4px;
  }
}
@media screen and (max-width: 480px) {
  .service__card {
    margin-top: 0;
    padding: 16px 24px 8px;
  }

  .service__title {
    font-size: 18px;
    line-height: 28px;
  }

  .service__description {
    font-size: 14px;
    line-height: 22px;
  }

  .icon {
    padding: 0.75rem;
  }

  .icon > img {
    width: 32px;
    height: 32px;
  }
}
</style>
