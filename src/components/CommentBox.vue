<template>
  <div class="Reviews container">
    <div class="ReviewsHeader">
      <div class="ReviewsHeaderLeft">
        <div class="HeartForm">
          <p>마음에 드신다면 하트를 눌러 찜해보세요!</p>
          <div class="HeartInput">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate" />
            <label
              class="form-check-label fas fa-heart"
              for="flexCheckIndeterminate"></label>
          </div>
        </div>
      </div>
      <div class="ReviewsHeaderRight">
        <div class="starRatingForm">
          <div class="starRating">
            <div class="starRatingInput">
              <input
                value="5"
                v-model="this.$store.state.starRate"
                type="radio"
                name="rate"
                id="rate-5" />
              <label
                for="rate-5"
                class="fas fa-star"></label>
              <input
                value="4"
                v-model="this.$store.state.starRate"
                type="radio"
                name="rate"
                id="rate-4" />
              <label
                for="rate-4"
                class="fas fa-star"></label>
              <input
                value="3"
                v-model="this.$store.state.starRate"
                type="radio"
                name="rate"
                id="rate-3" />
              <label
                for="rate-3"
                class="fas fa-star"></label>
              <input
                value="2"
                v-model="this.$store.state.starRate"
                type="radio"
                name="rate"
                id="rate-2" />
              <label
                for="rate-2"
                class="fas fa-star"></label>
              <input
                value="1"
                v-model="this.$store.state.starRate"
                type="radio"
                name="rate"
                id="rate-1" />
              <label
                for="rate-1"
                class="fas fa-star"></label>
            </div>
          </div>
          <div class="ratingWelcome">
            <p>책에 대한 리뷰를 남겨보세요!</p>
          </div>
        </div>
        <div class="ReviewForm">
          <textarea
            v-model="this.$store.state.comment"
            name=""
            id=""
            placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구는 삼가해 주시길 바랍니다."
            class="commentBox form-control"></textarea>
          <div class="ReviewFormButtonsWrapper">
            <div class="ReviewDanger">
              <button
                type="button"
                class="btn btn-danger btn-sm">
                리뷰 작성 유의사항
              </button>
            </div>
            <div class="ReviewPush">
              <button
                @click="newComment"
                type="button"
                class="btn btn-primary">
                리뷰 남기기
              </button>
            </div>
          </div>
          <div class="ReviewL">
            <p>{{ commentList.userId }}</p>
          </div>
        </div>
      </div>
    </div>
    <CommentEnter 
      v-for="comment in commentList"
      :key="comment.commentId"
      :comment="comment" />
    <div class="AfterComment"></div>
  </div>
</template>

<script>
import CommentEnter from '~/components/CommentEnter'
export default {
  components: {
    CommentEnter
  },
  data() {
    return {

    } 
  },
  computed: {
    commentList() {
      return this.$store.state.commentService.commentList
    }
  },
  methods: {
    async newComment() {
      this.$store.dispatch('commentService/postComment', {
        id: this.$route.params.id,
        comment: this.$store.state.comment,
        starRate: this.$store.state.starRate
      })
      console.log(this.$store.state.comment)
      console.log(this.$store.state.commentList)
    }
  },
  async created() {
    this.$store.dispatch('commentService/getComment', {
      id: this.$route.params.id
    })
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/main';
.container {
  margin: 0 120.5px;
  padding: 0 12px;
  .ReviewsHeader {
    display: flex;
    width: 100%;
    border-top: solid 1px #ebebeb;
    padding: 40px 0;
    .ReviewsHeaderLeft {
      padding-left: 18px;
      width: 20%;
      .HeartForm {
      justify-content: center;
      align-items: center;
      padding-top: 100px;
        p {
        padding-top: 10px;
        font-size: 12px;
        text-align: center;
        }
        .HeartInput { 
          justify-content: center;
          text-align: center;
          input {
            display: none;
            &:not(:checked) ~ label:hover,
            &:not(:checked) ~ label:hover ~ label {
              color: rgb(216, 96, 96);
            }
            &:checked ~ label {
              color: rgb(216, 96, 96);
            }
            &#liked:checked ~ label {
              color: rgb(216, 96, 96);
              text-shadow: 0 0 5px $primary;
            }
          }
          label {
            font-size: 70px;
            color: #444;
            transition: all 0.2s ease;
          }
        }
      }
    }
    .ReviewsHeaderRight {
      padding-left: 50px;
      width: 100%;
      .starRatingForm {
        .starRating {
          justify-content: center;
          text-align: center;
          padding: 20px 30px;
          margin: 0 200px 30px 0;
          input {
            display: none;
            &:not(:checked) ~ label:hover,
            &:not(:checked) ~ label:hover ~ label {
              color: #fd4;
            }
            &:checked ~ label {
              color: #fd4;
            }
            &#rate-5:checked ~ label {
              color: #fe7;
              text-shadow: 0 0 5px $primary;
            }
          }
          label {
            font-size: 30px;
            color: #444;
            padding: 5px;
            transition: all 0.2s ease;
            float: right;
          }
        }
        .ratingWelcome {
          text-align: center;
          font-size: 18px;
          font-weight: 700;
        }
      }
      .ReviewForm {        
        .commentBox {
          height: 200px;
        }
        .ReviewFormButtonsWrapper {
          padding-top: 15px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
  .AfterComment {
    height: 200px;
  }
}
</style>