<template>
  <div class="container d-flex flex-column">
    <h1>Welcome to Keyboard Build!</h1>
    <img id="keyboard-image" src="@/assets/images/mechanical-keyboard.svg" alt="keyboard">
    <p class="home-text">I developed this site for lovers of custom mechanical keyboards</p>
    <div class="made-with-love">
      <p>Made with ❤️</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }

  #keyboard-image {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  .container {
    margin-top: 2rem;
    padding-bottom: 2.5rem;
  }

  .home-text {
    text-align: center;
    font-size: 1.5rem;
  }

  .made-with-love {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    background-color: var(--color-background);

    p {
      text-align: center;
      font-size: 1.2rem;
      margin: 0;
    }
  }
</style>