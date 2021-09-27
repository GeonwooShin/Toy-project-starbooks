<template>
  <div class="container">
    <div class="inner">
      <div
        class="book-poster"
        :style="{backgroundImage: `url(${requestDiffSizeImage(theBook.imgUrl)})`}">
      </div>
      <div class="book-detailed">
        <p class="book-title">
          {{ theBook.title }}
        </p>
        <p class="book-author-publisher">
          {{ theBook.author }} | {{ theBook.publisher }}
        </p>
        <p class="book-price">
          {{ theBook.price }}원
        </p>
        <p class="book-created">
          출판일자 | {{ theBook.createdAt }}
        </p>
        <p class="book-description">
          {{ theBook.description }}
        </p>
      </div>
    </div>
  </div>
  <Comment />
</template>

<script>
import Comment from '~/components/Comment'
export default {
  components: {
    Comment
  },
  computed: {
    theBook() {
      return this.$store.state.book.theBook
    }
  },
  created() {
    console.log(this.$route)
    this.$store.dispatch('book/searchBookWithId', {
      id: this.$route.params.id
    })
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
.container {
  padding-top: 150px;
  width: 900px;
  .inner {
    padding-top: 40px;
    border-top: solid 1px #ebebeb;
    display: flex;
    height: 430px;
    .book-poster {
      $width: 230px;
      width: $width;
      height: $width * 3 / 2;
      background-size: cover;
      margin-left: 25px;
      overflow: hidden;
      background-position: center center;
      border: 1px solid #ebebeb;
    }
    .book-detailed {
      width: 70%;
      height: 300px;
      text-align: center;
      padding-left: 30px;
      .book-title {
        font-size: 20px;
        text-align: left;
        font-weight: 800;
      }
      .book-author-publisher {
        text-align: left;
        font-size: 12px;
        color: #9c9c9c;
      }
      .book-created {
        text-align: left;
        font-size: 12px;
        color: #9c9c9c;
      }
      .book-price {
        text-align: left;
        font-weight: 800;
      }
      .book-description {
        font-size: 12px;
        color: #636363;
        text-align: left;
        overflow-y:hidden;
        text-overflow: ellipsis;
        max-height: 200px;
      }
    }
  }
}
</style>