<template>
  <div class="spin"></div>
</template>

<style>
.spin {
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  border: 3px solid transparent;
  border-radius: 50%;
  border-top-color: var(--clr-primary);
  animation: spin 0.75s ease infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotateZ(360deg);
  }
}
</style>
