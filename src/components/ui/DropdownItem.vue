<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const show = ref<boolean>(false)
    const hover = ref<boolean>(false)

    const onToggle = () => {
      show.value = !show.value
    }

    const onBlurDropdown = () => {
      if (!hover.value) show.value = !show.value
    }

    return {
      show,
      hover,
      onToggle,
      onBlurDropdown,
    }
  },
})
</script>

<template>
  <div class="dropdown" tabindex="1" :class="{ show }" @blur="onBlurDropdown">
    <a class="dropdown-btn profile d-center-flex" @click.prevent="onToggle">
      <slot name="button" />
    </a>
    <ul class="dropdown-menu" @mouseover="hover = true" @mouseleave="hover = false" @click="onToggle">
      <div class="dropdown-triangle" tabindex="1" />
      <slot />
    </ul>
  </div>
</template>

<style lang="scss">
/* dd container */
.dropdown {
  align-items: stretch;
  display: flex;
  outline: none;

  --dropdown-background: #232426;
  --dropdown-border-color: #44454a;

  .dropdown-divider {
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
  }

  hr {
    margin: 0.7rem 0;
    color: inherit;
    background-color: currentcolor;
    border: 0;
    opacity: 0.25;

    &:not([size]) {
      height: 1px;
    }
  }

  .dropdown-menu {
    list-style: none;
    inset: 0 auto auto auto;
    position: absolute;
    background-color: var(--dropdown-background);
    box-shadow: 0 0.2em 0.6em #0003;
    z-index: 1;
    visibility: hidden;
    opacity: 0;
    transition: 0.05s ease-out;
    border: 1px solid var(--dropdown-border-color);
    border-radius: 3px;
    transform: translate(-8.7em, 15px);
    min-width: 10em;
    padding: 0.5rem 0;

    a {
      cursor: pointer;
      display: block;
      font-size: 0.7rem;
      color: var(--user-titlebar-foregound);
      padding: 0.4em 0 0.4em 2.5em;
      text-decoration: none;
      transition: 0.02s ease-out;

      > svg {
        position: absolute;
        margin: 0.1em 0 0 -1.3em;
        font-size: 0.8rem;
      }

      &:hover {
        background-color: #eaeaea0f;
      }
    }
  }

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

  &.show {
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

  &:hover {
    .dropdown-btn {
      > * {
        outline-color: #ffffff40;
        outline-width: 3px;
      }
    }
  }
}
</style>
