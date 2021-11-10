<template>
  <div class="container">
    <div class="inner">
      <div class="book-poster-likey">
        <div
          class="book-poster"
          :style="{backgroundImage: `url(${requestDiffSizeImage(theBook.imgUrl)})`}">
        </div>
        <div
          class="book-liked">
          <div class="book-liked-container">
            <input
              value="true"
              @click="LikedOrCancle()"
              type="checkbox"
              name="like"
              id="liked" />
            <label
              :class="{ active: theLiked.check === true }"
              for="liked"
              class="fas fa-heart"></label>  
            <div class="likedNum">
              {{ theLiked.heartCount }}
            </div>
          </div>
        </div>
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
  <CommentBox />
</template>

<script>
import CommentBox from '~/components/CommentBox'
export default {
  data() {
    return {
      
    }
  },
  components: {
    CommentBox
  },
  computed: {
    theBook() {
      return this.$store.state.book.theBook
    },
    theLiked() {
      return this.$store.state.commentService.likedList
    }
  },
  created() {
    console.log(this.$route)
    this.$store.dispatch('book/searchBookWithId', {
      id: this.$route.params.id
    })
    this.$store.dispatch('commentService/getHeart', {
      id: this.$route.params.id
    })
  },
  methods: {
    requestDiffSizeImage(url, imgSize = "xxlarge") {
      return url.replace('large', `${imgSize}`)
    },
    LikedOrCancle() {
      if(this.$store.state.commentService.likedList.check === false) {
        this.bookLiked()
      } else {
        this.bookLikedCancle()
      }
    },
    bookLiked() {
      this.$store.dispatch('commentService/postHeart', {
        id: this.$route.params.id
      })
    },
    bookLikedCancle() {
      this.$store.dispatch('commentService/deleteHeart', {
        id: this.$route.params.id
      })
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
    .book-poster-likey {
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
      .book-liked {
        padding-top: 20px;
        margin-left: 25px;
        justify-content: center;
        text-align: center;
        align-items: center;
        .book-liked-container {
          border-color: #9c9c9c;
          display: block;
          margin-right: auto;
          margin-left: auto;
          width: 65px;
          height: 65px;
          background: #efefef;
          border-radius: 50%;
          input {
            display: none;
          }
          label {
            color: #9c9c9c;
            padding-top: 15px;
            font-size: 50px;
            justify-content: center;
            text-align: center;
            align-items: center;
            font-size: 20px;
            transition: all 0.2s ease;
            cursor: pointer;
          }
          .likedNum {
            font-weight: 700;
            color: #9c9c9c;
          }
          .active {
            color: #ff7868;
          }
        }
      }
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