<template>
  <div class="swiper-container">
    <h2>금주의 추천</h2>
    <div
      class="swiper-wrapper">
      <input
        type="radio"
        name="slide"
        id="slide2"
        checked />
      <input
        type="radio"
        name="slide"
        id="slide3" />
      <input
        type="radio"
        name="slide"
        id="slide4" />

      <div
        class="swiper-slide">
        <RouterLink
          :to="`/DetailedBook/${homeBooks1.id}`"
          class="book-zone">
          <div
            class="bookImage"
            :style="{backgroundImage: `url(${requestDiffSizeImage(homeBooks1.imgUrl)})`}">
          </div>
          <div class="book-detail">
            <p class="book-title">
              {{ homeBooks1.title }}
            </p>
            <p class="book-author">
              {{ homeBooks1.author }}
            </p>
            <p class="book-description">
              {{ homeBooks1.publisher }}
            </p>
          </div>
        </RouterLink>
      </div>
      <div
        class="swiper-slide">
        <label
          for="slide4"
          class="label-left2">◀</label>
        <RouterLink
          :to="`/DetailedBook/${homeBooks2.id}`"
          class="book-zone">
          <div
            class="bookImage"
            :style="{backgroundImage: `url(${requestDiffSizeImage(homeBooks2.imgUrl)})`}">
          </div>
          <div class="book-detail">
            <p class="book-title">
              {{ homeBooks2.title }}
            </p>
            <p class="book-author">
              {{ homeBooks2.author }}
            </p>
            <p class="book-description">
              {{ homeBooks2.publisher }}
            </p>
          </div>
        </RouterLink>
        <label
          for="slide3"
          class="label-right2">▶</label>
      </div>
      <div
        class="swiper-slide">
        <label
          for="slide2"
          class="label-left3">◀</label>
        <RouterLink
          :to="`/DetailedBook/${homeBooks3.id}`"
          class="book-zone">
          <div
            class="bookImage"
            :style="{backgroundImage: `url(${requestDiffSizeImage(homeBooks3.imgUrl)})`}">
          </div>
          <div class="book-detail">
            <p class="book-title">
              {{ homeBooks3.title }}
            </p>
            <p class="book-author">
              {{ homeBooks3.author }}
            </p>
            <p class="book-description">
              {{ homeBooks3.publisher }}
            </p>
          </div>
        </RouterLink>
        <label
          for="slide4"
          class="label-right3">▶</label>
      </div>
      <div
        class="swiper-slide">
        <label
          for="slide3"
          class="label-left4">◀</label>
        <RouterLink
          :to="`/DetailedBook/${homeBooks4.id}`"
          class="book-zone">
          <div
            class="bookImage"
            :style="{backgroundImage: `url(${requestDiffSizeImage(homeBooks4.imgUrl)})`}">
          </div>
          <div class="book-detail">
            <p class="book-title">
              {{ homeBooks4.title }}
            </p>
            <p class="book-author">
              {{ homeBooks4.author }}
            </p>
            <p class="book-description">
              {{ homeBooks4.publisher }}
            </p>
          </div>
        </RouterLink>
        <label
          for="slide2"
          class="label-right4">▶</label>
      </div>
      <div
        class="swiper-slide">
        <RouterLink
          :to="`/DetailedBook/${homeBooks5.id}`"
          class="book-zone">
          <div
            class="bookImage"
            :style="{backgroundImage: `url(${requestDiffSizeImage(homeBooks5.imgUrl)})`}">
          </div>
          <div class="book-detail">
            <p class="book-title">
              {{ homeBooks5.title }}
            </p>
            <p class="book-author">
              {{ homeBooks5.author }}
            </p>
            <p class="book-description">
              {{ homeBooks5.publisher }}
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
  
  <div class="topic-container">
    <div class="topic-section">
      <h2 class="topic-section-name">
        오늘, <span class="star">STAR</span> 의 발견
      </h2>
      <div class="topic-cell">
        <HomeBookItemStar
          v-for="book in searchHomeBooksIdStar"
          :key="book.isbn"
          :book="book" />
      </div>
    </div>
  </div>

  <div class="hot-container">
    <div class="hot-section">
      <h2 class="hot-section-name">
        지금, <span class="hot">HOT</span> 한 책
      </h2>
      <div class="hot-cell">
        <HomeBookItemHot
          v-for="book in searchHomeBooksIdHot"
          :key="book.isbn"
          :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeBookItemStar from '~/components/HomeBookItemStar'
import HomeBookItemHot from '~/components/HomeBookItemHot'

export default {
  components: {
    HomeBookItemStar,
    HomeBookItemHot
  },
  data() {
    return {
    }
  },
  computed: {
    homeBooks1() {
      return this.$store.state.book.homeBooks1
    },
    homeBooks2() {
      return this.$store.state.book.homeBooks2
    },
    homeBooks3() {
      return this.$store.state.book.homeBooks3
    },
    homeBooks4() {
      return this.$store.state.book.homeBooks4
    },
    homeBooks5() {
      return this.$store.state.book.homeBooks5
    },
    searchHomeBooksIdStar() {
      return this.$store.state.book.searchHomeBooksIdStar
    },
    searchHomeBooksIdHot() {
      return this.$store.state.book.searchHomeBooksIdHot
    }
  },
  async created () {
    this.$store.dispatch('book/homeBooks1', {
      id: 4
    })
    this.$store.dispatch('book/homeBooks2', {
      id: 38
    })
    this.$store.dispatch('book/homeBooks3', {
      id: 121
    })
    this.$store.dispatch('book/homeBooks4', {
      id: 90
    })
    this.$store.dispatch('book/homeBooks5', {
      id: 109
    })
    this.$store.dispatch('book/searchHomeBooksIdStar', {
      page: 14,
      size: 6
    })
    this.$store.dispatch('book/searchHomeBooksIdHot', {
      page: 28,
      size: 8
    })
  },
  methods: {
    requestDiffSizeImage(url, imgSize = "xxlarge") {
      return url.replace('large', `${imgSize}`)
    },
    
  },
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";

.swiper-container {
  border-bottom: solid 1px #ebebeb;
  margin-top: 80px;
  padding: 0;
  width: 1280px;
  height: 350px;
  position: relative;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  h2{
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 700;
    font-family: sans-serif;
    word-spacing: -4px;
    color: black;
    &:after {
      content: "";
      margin-top: 1px;
      display: block;
      width: 1280px;
      border-bottom: solid 1px #ebebeb;
    }
  }
  .swiper-wrapper {
    padding: 0;
    width: 1260px;
    height: 280px;
    position: absolute;
    overflow: hidden;
    input {
      display: none;
    }
    #slide2:checked ~ .swiper-slide {
      transform: translateX(0%);
      .label-left3, .label-left4 {
        transform: translateX(-120%);
        opacity: 0;
      }
      .label-right3, .label-right4 {
        transform: translateX(120%);
        opacity: 0;
      }
      .label-left2, .label-right2 {
        visibility: visible;
      }
    }
    #slide3:checked ~ .swiper-slide {
      transform: translateX(-100%);
      .label-left2, .label-left4 {
        transform: translateX(-120%);
        opacity: 0;
      }
      .label-right2, .label-right4 {
        transform: translateX(120%);
        opacity: 0;
      }
      .label-left3, .label-right3 {
        visibility: visible;
      }
    }
    #slide4:checked ~ .swiper-slide {
      transform: translateX(-200%);
      .label-left3, .label-left2 {
        transform: translateX(-120%);
        opacity: 0;
      }
      .label-right3, .label-right2 {
        transform: translateX(120%);
        opacity: 0;
      }
      .label-left4, .label-right4 {
        visibility: visible;
      }
    }
    white-space: nowrap;
    .swiper-slide {
      padding: 0;
      margin: 0;
      width: calc(100% / 3);
      height: 280px;
      display: inline-block;
      transition: all .5s;
      vertical-align: middle;
      position: relative;
      overflow: hidden;
      .book-zone{
        height: 280px;
        display: flex;
        &:hover::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 3px solid $primary;
        }
        .bookImage{
          width: 50%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
        }
        .book-detail {
          top: 20%;
          left: 52%;
          position: absolute;
          font-size: 14px;
          font-weight: 700;
          font-family: sans-serif;
          word-spacing: -4px;
        }
      }
      .label-left2,.label-left3,.label-left4 {
        position: absolute;
        z-index: 5;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        font-size: 50px;
        transition: all .5s;
        color: $primary;
        opacity: 90%;
        &:hover{
          -webkit-text-stroke: 3px $primary;
          opacity: 100%;
        }
      }
      .label-right2,.label-right3,.label-right4 {
        position: absolute;
        z-index: 5;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        right: 8px;
        font-size: 50px;
        transition: all .5s;
        color: $primary;
        opacity: 90%;
        &:hover{
          -webkit-text-stroke: 3px $primary;
          opacity: 100%;
        }
      }
    }
  }
}

.topic-container {
  padding: 0;
  margin-top: 180px;
  width: 1200px;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  .topic-section {
    padding: 0;
    width: 1200px;
    height: 400px;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    .topic-section-name {
      &:after {
        content: "";
        margin-top: 1px;
        display: block;
        width: 1176px;
        border-bottom: solid 1px #ebebeb;
      }
      margin-bottom: 20px;
      padding-left: 24px;
      font-size: 24px;
      font-weight: 700;
      font-family: sans-serif;
      word-spacing: -4px;
      .star {
        color: #ffc107;
        -webkit-text-stroke: 0.5px $primary;
      }
    }
    .topic-cell {
      display: flex
    }
  }
}

.hot-container {
  padding: 0;
  margin-top: 40px;
  width: 1200px;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  .hot-section {
    padding: 0;
    width: 1200px;
    height: 500px;
    justify-content: center;
    overflow: hidden;
    position: absolute;
    .hot-section-name {
      &:after {
        content: "";
        margin-top: 1px;
        display: block;
        width: 1176px;
        border-bottom: solid 1px #ebebeb;
      }
      margin-bottom: 20px;
      padding-left: 24px;
      font-size: 24px;
      font-weight: 700;
      font-family: sans-serif;
      word-spacing: -4px;
      .hot{
        color: rgb(245, 76, 76);
        -webkit-text-stroke: 0.5px $primary;
      }
    }
    .hot-cell{
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>