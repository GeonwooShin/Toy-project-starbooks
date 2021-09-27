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
        <div class="price">
          {{ book.price }}<span>원</span>
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
  width: 200px;
  .book {
    position: relative;
    $width: 150px;
    width: $width;
    height: $width * 3 / 2;
    background-size: cover;
    margin-left: 25px;
    overflow: hidden;
    background-position: center center;
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
    text-align: center;
    padding: 14px;
    font-size: 14px;
    font-weight: 700;
    .title {
      color: $black;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .author {
      color: #999;
    }
    .publisher {
      color: #999;
    }
    .price {
      color: $black;
      font-size: 12px;
    }
  }
  
}
</style>

.book {

  border-radius: 4px;
  background-color: $gray-400;
  background-size: cover;
  overflow: hidden;
  transition: .5s;
  
  &:hover {
    transition: 2s;
  }
  .info {
    background-color: rgba($black, .3);
    width: 100%;
    
    
    text-align: center;
    left: 0;
    bottom: 100px;
    backdrop-filter: blur(20px);
    
  }
}