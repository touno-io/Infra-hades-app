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
  <div id="demo-modal" class="modal">
    <div class="content">
      <h3>CSS Only Modal</h3>
      <p>You can use the :target pseudo-class to create a modals with Zero JavaScript. Enjoy!</p>
      <div class="footer">
        Made with <i class="fa fa-heart"></i>, by
        <a href="https://twitter.com/denicmarko" target="_blank">@denicmarko</a>
      </div>
      <a href="#" class="close">&times;</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  z-index: 2;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  inset: 31px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(12 12 12 / 25%);
  transition: all 0.2s;

  &:target {
    visibility: visible;
    opacity: 1;
  }

  > .content {
    color: var(--user-text-color);
    border-radius: 4px;
    background-color: var(--user-background-color);
    border: #363636 solid 1px;
    box-shadow: 0 0.2em 0.6em #00000054;
    position: relative;
    width: 500px;
    max-width: 90%;
    padding: 1em 2em;

    h3 {
      margin-top: 0;
    }

    > .footer {
      text-align: right;
      a {
        color: #585858;
      }
      i {
        color: #d02d2c;
      }
    }

    > .close {
      position: absolute;
      top: 10px;
      right: 10px;
      color: #585858;
      text-decoration: none;
    }
  }
}
</style>
