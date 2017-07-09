<style lang="less" rel="stylesheet/less">
  @import "../assets/styles/constants/sizes";
  @import "../assets/styles/constants/colors";

  header#header {
    width: 100%;
    min-width: @size-mobile-s;
    padding: 0.5em 1em;
    background-color: @color-white;

    .inner {
      font-size: 0;
      width: 100%;
      max-width: @size-tablet;
      margin: 0 auto;
    }

    [class$="-inline-wrap"] {
      font-size: 1rem;
      display: inline-block;
      vertical-align: middle;
    }

    .btn-inline-wrap {
      button {
        width: 2.5rem;
        height: 2.5rem;

        padding: 0;
        margin: 0;
        background: none;
        border: 0;
        font-size: 0;
        img {
          width: 100%;
        }

        &.btn-get {
          padding: 0.1rem;
        }

        &.btn-search {
          padding: 0.5rem;
        }
      }
    }

    .logo-inline-wrap {
      width: calc(~"100% - 5rem");
      text-align: center;
      img {
        width: 6rem;
      }
    }

    .search-inline-wrap {
      padding: 0 1rem;
      input.txt-search {
        font-size: 2em;
        width: 100%;
        background: none;
        border: 0;
        border-bottom: 2px solid @color-cloud;
        &:hover {
          border-bottom-color: @color-light-blue;
        }
        &:active, &:focus {
          border-bottom-color: @color-light-blue-darker;
        }
      }
    }

    &:not(.search) {
      .search-inline-wrap {
        display: none;
      }
    }

    &.search {
      .btn-inline-wrap {
        button.btn-get {
          display: none;
        }
      }
      .logo-inline-wrap {
        width: auto;
        font-size: 0;
        padding: 0 1rem;
      }
      .search-inline-wrap {
        width: calc(~"100% - 10.5rem");
      }
    }

    @media screen and (max-width: @size-tablet) {
      .logo-inline-wrap {
        width: calc(~"100% - 4rem");
        img {
          width: 4rem;
        }
      }

      .btn-inline-wrap {
        button {
          width: 2rem;
          height: 2rem;

          padding: 0;
          margin: 0;
          background: none;
          border: 0;
          font-size: 0;
          img {
            width: 100%;
          }

          &.btn-search {
            padding: 0.3rem;
          }
        }
      }

      &.search {
        .btn-inline-wrap {
          button.btn-get {
            display: none;
          }
        }
        .logo-inline-wrap {
          padding: 0;
        }
        .search-inline-wrap {
          width: calc(~"100% - 6rem");
          font-size: 0.5rem;
        }
      }
    }
  }
</style>

<template>
  <header id="header">
    <div class="inner">
      <div class="btn-inline-wrap">
        <button class="btn-get">
          <img src="../assets/images/icon/get.png">
        </button>
      </div>
      <div class="logo-inline-wrap">
        <a href="/">
          <img src="../assets/images/logo_black.png">
        </a>
      </div>
      <div class="search-inline-wrap" v-on-click-outside="hideSearch">
        <input class="txt-search" type="text" title="검색">
      </div>
      <div class="btn-inline-wrap">
        <button class="btn-search" v-on:click="doSearch">
          <img src="../assets/images/icon/search.png">
        </button>
      </div>
    </div>
  </header>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'header',
    methods: {
      hideSearch (event) {
        if ($(event.target).closest('.btn-search').length === 0) {
          $('header#header').removeClass('search')
        }
      },
      doSearch () {
        const $header = $('header#header')
        if ($header.is('.search')) {
          alert('search')
        } else {
          $header.addClass('search')
        }
      }
    }
  }
</script>
