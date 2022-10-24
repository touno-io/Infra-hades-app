<!-- <script setup lang="ts">
console.log('setup')
</script>

<template>
  <div class="dropdown" tabindex="1">
    <a class="profile d-center-flex dropdown-btn">
      <fa icon="fa-solid fa-circle-user" />
    </a>
    <ul class="dropdown-menu">
      <div class="dropdown-triangle" tabindex="1" />
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.dropdown {
  align-items: stretch;
  display: flex;
  outline: none;

  --dropdown-background: #232426;
  --dropdown-border-color: #44454a;

  &:focus {
    .dropdown-menu {
      outline: none;
      visibility: visible;
      opacity: 1;
      transform: translate(-8.7em, 20px);
    }

    .dropdown-btn {
      > * {
        outline-width: 3px;
        outline-color: #ffffff10;
      }
    }
  }

  &:hover {
    .dropdown-btn {
      > * {
        outline-color: #ffffff40;
        outline-width: 3px;
      }
    }
  }

  .dropdown-triangle {
    width: 0;
    height: 0;
    z-index: 10;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--dropdown-border-color);
    inset: -6px 5px 0px auto;
    position: absolute;

    &::before {
      content: '';
      inset: 1px -6px 0px auto;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid var(--dropdown-background);
      position: absolute;
    }

    &:focus {
      .dropdown-menu {
        outline: none;
        visibility: hidden;
        opacity: 0;
      }
    }
  }

  /* button */
  .dropdown-btn {
    -webkit-app-region: no-drag !important;
    cursor: pointer;
    transition: 0.02s ease-out;

    > * {
      transition: outline 0.1s linear;
      outline: 0px solid transparent;
      border-radius: 32px;
    }
  }

  .dropdown-menu {
    list-style: none;
    inset: 0px auto auto auto;
    position: absolute;
    background-color: var(--dropdown-background);
    box-shadow: 0px 0.2em 0.6em rgba(0, 0, 0, 20%);
    z-index: 100000;
    visibility: hidden;
    opacity: 0;
    transition: 0.05s ease-out;
    border: 1px solid var(--dropdown-border-color);
    border-radius: 4px;
    transform: translate(-8.7em, 15px);
    min-width: 10em;
    padding: 0.5rem 0;

    a {
      cursor: pointer;
      display: block;
      font-size: 0.7rem;
      color: var(--user-titlebar-foregound);
      padding: 0.4em 0 0.4em 2.3em;
      text-decoration: none;
      transition: 0.02s ease-out;

      &:hover {
        background-color: #eaeaea0f;
      }
    }
  }
}
</style> -->
