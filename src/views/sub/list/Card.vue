<style lang="less" rel="stylesheet/less" scoped xmlns:v-touch="http://www.w3.org/1999/xhtml"
       xmlns:v-touch="http://www.w3.org/1999/xhtml">
  @import "../../../assets/styles/constants/colors";

  .layout-01 > li.card {
    width: calc(~"100% - 1em");
    padding-top: 120%;
  }

  .layout-02 > li.card {
    width: calc(~"calc(100% - 0.5em) / 2");
    padding-top: 60%;
    &:nth-child(2n) {
      margin-left: 0;
      margin-right: 0;
    }
    &:nth-child(2n+1) {
      margin-left: 0;
    }
  }

  .layout-03 > li.card {
    width: calc(~"calc(100% - 1em) / 3");
    padding-top: 40%;
    &:nth-child(3n) {
      margin-right: 0;
    }
    &:nth-child(3n), &:nth-child(3n-1), &:nth-child(3n+1) {
      margin-left: 0
    }
  }

  .layout-04 > li.card {
    width: calc(~"calc(100% - 1.5em) / 4");
    padding-top: 30%;
    &:nth-child(4n) {
      margin-right: 0;
    }
    &:nth-child(4n), &:nth-child(4n-1), &:nth-child(4n-2), &:nth-child(4n+1) {
      margin-left: 0
    }
  }

  .layout-05 > li.card {
    width: calc(~"calc(100% - 2em) / 5");
    padding-top: 25%;
    &:nth-child(5n) {
      margin-right: 0;
    }
    &:nth-child(5n), &:nth-child(5n-1), &:nth-child(5n-2), &:nth-child(5n-3), &:nth-child(5n+1) {
      margin-left: 0
    }
  }

  li.card {
    display: inline-block;
    position: relative;
    padding-top: 120%;
    overflow: hidden;

    margin: 0 0.5em 0.5em 0.5em;
    background-color: @color-gray;

    z-index: 10;

    & > * {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    & > [class^='wrapper-'] {
      background-size: cover;
      background-position: center center;
      & > * {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 11;
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: @color-black;
        opacity: 0.4;
        z-index: 0;
      }
      &[class$='-video'] {
        &:before {
          display: none;
        }
        .video {
          display: block;
        }
      }
      .video {
        display: none;
        background: rgba(0, 0, 0, 0.4) url('../../../assets/images/icon/play.png') no-repeat center center;
        background-size: 50%;
      }
      .remove {
        display: none;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 12;
        .remove-wrap {
          display: flex;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          justify-items: center;
          align-items: center;
          flex-wrap: wrap;
          .remove-row {
            width: 100%;
            text-align: center;
            img {
              width: 15%;
              margin-bottom: 1em;
            }
            button {
              background-color: @color-light-blue;
              padding: 0.3em 1em;
              border-radius: 3em;
              border: none;
              color: @color-white;
              font-weight: normal;
              font-size: 1.1em;
            }
          }
        }
      }
    }

    .header-wrap {
      text-align: right;
      button.btn-detail {
        position: relative;
        width: 30%;
        padding: 5%;
        background: none;
        border: 0;
        margin: 0;

        cursor: pointer;
        z-index: 11;

        &:hover {
          opacity: 0.9;
        }

        img {
          width: 100%;
        }
      }
    }
    .contents-wrap {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      flex-wrap: wrap;
      .memo {
        width: 100%;
        padding: 0.5em 1.5em;
        color: @color-white;
      }
      ul.tags {
        width: 100%;
        padding: 0.5em 1.5em 1.5em 1.5em;
        li.tag {
          display: inline-block;
          color: @color-white;
          margin-right: 0.5em;
          &:before {
            content: '#';
            font-size: 0.9em;
            color: @color-white;
          }
        }
      }
    }
  }
</style>

<template>
  <li class="card" @mouseleave="hideRemovePanel">
    <div is="v-touch" :class="'wrapper-' + item.type" @press="showRemovePanel"
         :style="{ 'background-image': 'url(' + item.thumbnail + ')' }">
      <div class="video"></div>
      <div class="remove">
        <div class="remove-wrap">
          <div class="remove-row">
            <img src="../../../assets/images/icon/trash.png">
            <br/>
            <button @click="removeCard">삭제하기</button>
          </div>
        </div>
      </div>
    </div>
    <div class="inner" is="v-touch" @press="showRemovePanel">
      <div class="header-wrap">
        <button class="btn-detail" title="자세히 보기" @click="showDetailLayout">
          <img src="../../../assets/images/icon/detail.png">
        </button>
      </div>
      <div class="contents-wrap">
        <div class="memo">{{ item.memo }}</div>
        <ul class="tags">
          <li v-for="tag in item.tags" class="tag">{{ tag.name }}</li>
        </ul>
      </div>
    </div>
  </li>
</template>

<script>
  import $ from 'jquery'

  const CONTENT_MAX_LENGTH = {
    withBackground: 70,
    withoutBackground: 80
  }

  export default {
    name: 'list-item',
    props: ['card'],
    methods: {
      showRemovePanel (event) {
        const $wrapper = $(event.target).closest('li.card')
        $('.remove').hide()
        $wrapper.find('.remove').show()
      },
      hideRemovePanel (event) {
        const $target = $(event.target)
        const $removeWrap = $target.closest('.remove')
        if ($removeWrap.length === 0) {
          $('.remove').hide()
          event.preventDefault()
          event.stopPropagation()
        }
      },
      removeCard () {
        confirm('삭제 하시겠습니까?')
      },
      showDetailLayout (event) {
        alert('detail')
      }
    },
    data () {
      const contentMaxLength = this.card.thumbnail ? CONTENT_MAX_LENGTH.withBackground : CONTENT_MAX_LENGTH.withoutBackground
      if (this.card.memo.length > contentMaxLength) {
        this.card.memo = this.card.memo.substring(0, contentMaxLength - 3) + '...'
      }

      return {
        item: this.card
      }
    }
  }
</script>
