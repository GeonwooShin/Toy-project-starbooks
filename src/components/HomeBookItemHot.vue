<template>
  <RouterLink
    :to="`/DetailedBook/${book.id}`"
    class="book-zone">
    <div class="book-container">
      <div
        :style="{backgroundImage: `url(${requestDiffSizeImage(book.imgUrl)})`}"
        class="book">
      </div>
      <div class="info">
        <div class="title">
          {{ book.title }}
        </div>
        <div class="author">
          {{ book.author }}
        </div>
        <div class="publisher">
          {{ book.publisher }}
        </div>
      </div>
    </div> 
  </RouterLink>
</template>

<script>
export default {
  props: {
    book: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    requestDiffSizeImage(url, imgSize = "xxlarge") {
      return url.replace('large', `${imgSize}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.book-zone {
  text-decoration: none;
}
.book-container {
  width: 300px;
  display: flex;
  margin-bottom: 50px;
  .book {
    position: relative;
    $width: 100px;
    width: $width;
    height: $width * 3 / 2;
    background-size: cover;
    margin-left: 25px;
    overflow: hidden;
    background-position: center center;
    border : solid 1px #ebebeb;
    &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 6px solid $primary;
    }
  }
  .info {
    width: 160px;
    padding: 14px;
    font-size: 14px;
    font-weight: 700;
    position: relative;
    .title {
      color: $black;
      overflow: hidden;
      text-overflow: ellipsis;
      align-content: center;
    }
    .author {
      color: #999;
      margin-top: 16px;
      margin-bottom: -4px;
    //   border-bottom : solid 1px #ebebeb;
    //   border-width: 30%;
    //   width: 140px;
    &:after {
        content: "";
        margin-top: 1px;
        display: block;
        width:15px;
        border-bottom: solid 3px #ebebeb;
    }
    }
    .publisher {
      color: #999;
      margin-top: 6px;
    }
  }
  
}
</style>