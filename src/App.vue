<script setup lang="ts">
import { ref } from 'vue'
import { ipcRenderer } from 'electron'

const resizable = ref('16em')
</script>

<template>
  <div class="title">
    <div class="bar d-flex position-relative align-items-stretch">
      <a class="menu d-center-flex" @click.prevent="ipcRenderer.invoke('open-menu')">
        <div class="logo-menu" />
      </a>
      <div class="logo d-flex align-items-center justify-content-center flex-fill">
        <img src="./assets/logo.svg" height="22" width="22" alt="Infar Hades" />
        <span class="text">Infra.Hades</span>
      </div>
      <div class="dropdown" tabindex="1">
        <a class="profile d-center-flex dropdown-btn">
          <fa icon="fa-solid fa-circle-user" />
        </a>
        <ul class="dropdown-menu">
          <div class="dropdown-triangle" tabindex="1" />
          <li>
            <a href="#"><fa icon="fa-brands fa-github" /><span>Sign-In</span></a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li><a href="#">Options</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
      <div class="empty d-flex" style="width: 122px" />
    </div>
  </div>
  <div class="panel d-grid">
    <div class="pane pane1"></div>
    <div class="resizer" role="presentation"></div>
    <div class="pane pane2 container-fluid">
      <RouterView />
    </div>
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
    z-index: 100000;
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

#app {
  > .title {
    grid-area: title;
    user-select: none;

    .bar {
      -webkit-app-region: drag;
      gap: 4px;
      margin: -8px 0 0 -8px;
      width: 100%;
      height: 31px;

      > .logo > .text {
        font-size: 0.75rem;
        font-family: Mulish;
        font-weight: 700;
      }

      > a {
        -webkit-app-region: no-drag !important;
        border: none;

        *,
        ::after,
        ::before {
          animation: none !important;
        }

        &.menu {
          width: 45px;
          cursor: default;

          &:hover {
            background-color: #ffffff1f;
          }
        }

        > .logo-menu {
          margin-right: 1em;
          transform: scale(0.16) translateX(40px) translateY(-20px);
        }

        &.profile {
          font-size: 0.94rem;
          width: 2.4em;
        }
      }
    }
  }

  > .panel {
    margin: -8px;
    grid-area: panel;
    flex: 1 1 0%;
    height: calc(100% + 16px);
    outline: none;
    overflow: hidden;
    flex-direction: row;
    grid-template-columns: v-bind(resizable) 4px 1fr;
    justify-items: stretch;
    align-items: stretch;
    grid-template-areas: 'pane1 resizer pane2';

    .resizer {
      cursor: col-resize;
    }

    .resizer:hover {
      background-color: rgb(255 255 255 / 1%);
    }

    .pane {
      padding: 10px;
    }
  }
}
</style>
