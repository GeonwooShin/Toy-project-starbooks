<template>
  <div class="container">
    <div class="commentListWrapper">
      <ul class="commentBoxWrapper">
        <li class="comments">
          <div class="commentArea">
            <div class="commentAreaTop">
              <div class="commentUser">
                {{ comment.userId }}
              </div>
              <div class="commentRating">
                {{ comment.starRate }}
              </div>
            </div>
            <div
              class="commentText"
              v-if="edit">
              {{ comment.comment }}
            </div>
            <div
              v-else
              class="commentFixArea">
              <textarea
                class="commentFixBox"
                v-model="comment.comment"></textarea>
            </div>
            <div
              v-if=" comment.userId === this.$store.state.loginService.UserInfoObj.id && edit"
              class="commentMethods">
              <div class="commentFix">
                <span @click="changeEdit">수정</span>
              </div>
              <div class="commentDelete">
                <span>삭제</span>
              </div>
            </div>
            <div
              class="editButton"
              v-else-if="!edit">
              <button
                type="button"
                @click="commentFix"
                class="btn btn-primary btn-sm">
                저장
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      edit: true
    }
  },
  props: {
    comment: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    changeEdit() {
      this.edit = false
    },
    async commentFix() {
      console.log(this.$store.state.commentList)
      const getCommentId = this.$store.state.commentList.filter(function (commentList) {return commentList.userId == this.$store.state.loginService.UserInfoObj.id})
      console.log(getCommentId)
      this.$store.dispatch('commentService/fixComment', {
        id: this.$route.params.id,
        commentId: getCommentId[0].commentId,
        comment: this.$store.state.comment,
        starRate: this.$store.state.starRate
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.container {
  width: 100%;
  .commentListWrapper {
    border-top: 1px solid #ebebeb;
    width: 80%;
    margin-left: 65px;
    .commentBoxWrapper {
      .comments {
        padding-top: 20px;
        .commentAreaTop {
          display: flex;
          .commentUser {
            padding-right: 15px;
            font-size: 14px;
            font-weight: 800;
          }
        }
        .commentText {
          padding-top: 20px;
        }
        .commentFixArea {
          width: 100%;
          .commentFixBox {
            width: 100%;
            height: 200px;
            overflow-y: scroll;
          }
        }
        .commentMethods {
          justify-content: right;
          padding-right: 8px;
          display: flex;
          padding-top: 15px;
          font-size: 13px;
          // font-weight: 700;
          color: #999999;
          .commentFix {
            padding-right: 15px;
            &:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
          .commentDelete {
            &:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
        .editButton {
          right: 0;
          bottom: 0;
          justify-content: right;
          text-align: right;
          .btn {
            justify-content: right;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>