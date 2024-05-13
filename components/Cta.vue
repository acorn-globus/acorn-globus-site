<template>
  <div id="cta" class="wrapper cta__container">
    <div class="container">
      <div class="text-center text-white cta__wrapper mx-auto">
        <!-- <span class="subtext">contact us</span> -->
        <h2 class="subheading">Get in touch</h2>
        <p class="mt-2 contact-us__description">
          When you objectively analyze your business, you are likely to get a
          new perspective. These new perspectives propel your business up by
          infusing fresh strategy. We can support whenever new strategy is
          needed.
        </p>
        <!-- You can change the value for button-text, button-color, width and height with the value you want -->
        <formester-popup
          id="efd1648b-1621-41ff-ade9-59630c129567"
          url="https://bevdkbdf.formester.com/f/efd1648b-1621-41ff-ade9-59630c129567"
          width="900px"
          height="95%"
        ></formester-popup>
        <button
          class="cta__btn"
          onclick="Formester.openPopup('efd1648b-1621-41ff-ade9-59630c129567')"
        >
          Contact Now
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://bevdkbdf.formester.com/widget/popup.js",
          type: "module",
          defer: true,
        },
      ],
    };
  },
};
</script>

<style>
.cta__container {
  position: relative;
  z-index: 10;
}

.cta__wrapper {
  max-width: 40rem;
}

.cta__btn {
  background-color: white;
  font-weight: 600;
  color: var(--clr-primary);
  padding: 0.75em 1.25em;
  border-radius: 0.25em;

  display: inline-block;
  margin-top: 1em;
  text-decoration: none;
  transition: ease-in-out 300ms;
}

.cta__btn:hover {
  background: hsla(0, 0%, 95%, 1);
  color: var(--clr-primary);
}
</style>
