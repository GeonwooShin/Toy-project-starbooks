<template>
  <div class="Reviews container">
    <div class="ReviewsHeader">
      <div class="ReviewsHeaderRight">
        <div class="starRatingForm">
          <div class="starRating fillLeft">
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
      if(this.$store.state.loginService.UserInfoObj.id === '') {
        alert('로그인 후 이용할 수 있습니다.')
        return
      } else if(this.$store.state.commentService.comment.count < 10) {
        alert('최대 10자 이상의 코멘트를 입력해주세요.')
        return
      } else if(this.$store.state.commentService.starRate === '') {
        alert('별점과 함께 입력해주세요.')
        return
      }
      this.$store.dispatch('commentService/postComment', {
        id: this.$route.params.id,
        comment: this.$store.state.comment,
        starRate: this.$store.state.starRate
      })      
      this.$router.go(this.$router.currentRoute)
      console.log(this.$store.state.commentService.commentList)
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
  // margin: 0 120.5px;
  // padding: 0 12px;
  .ReviewsHeader {
    display: flex;
    width: 100%;
    border-top: solid 1px #ebebeb;
    padding: 40px 0;
    .ReviewsHeaderRight {
      padding-left: 50px;
      width: 100%;
      .starRatingForm {
        .fillLeft {
          display: flex;
        }
        .starRating {
          justify-content: center;
          text-align: center;
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