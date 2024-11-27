<template>
  <section id="projects" class="wrapper">
    <div class="container__wrapper pb-3">
      <div class="text-center">
        <span class="subtext">our projects</span>
        <h2 class="section__heading mb-5">Few Projects we worked on</h2>
      </div>
      <div class="flex flex-col gap-8 mt-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import cayzenImage from "~/assets/images/projects/cayzen.png";
import cayzenLogo from "~/assets/images/projects/cayzen-logo.svg";
import rumieImage from "~/assets/images/projects/rumie.png";
import rumieLogo from "~/assets/images/projects/rumie-logo.png";
import formesterImage from "~/assets/images/projects/formester.png";
import formesterLogo from "~/assets/images/projects/formester-logo.png";

const projects = [
  {
    title: "Cayzen",
    description:
      "Cayzen is a communication tool for managers and frontline workers. It builds on the concept of Kaizen and help companies build product that are driven by the people who are on the frontline.",
    image: cayzenImage,
    logo: cayzenLogo,
    tags: ["design services", "web development", "strategy"],
  },
  {
    title: "Formester",
    description:
      "A form backend as a service. It makes creating form endpoints for websites very easy. It requires zero programming knowledge. The user has the full control over the look and feel of the form. In Formester validation, spam protection and integration with different CRMs are few clicks away.",
    image: formesterImage,
    logo: formesterLogo,
    tags: ["design services", "web development", "strategy"],
    imgPosition: "right",
  },
];
</script>

<style>
.projects {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
</style>
