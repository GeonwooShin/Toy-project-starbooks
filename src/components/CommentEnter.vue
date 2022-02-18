<template>
  <div
    class="modal-show"
    tabindex="-1"
    v-show="delete_show">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            댓글 삭제
          </h5>
          <button
            type="button"
            class="btn-close"
            @click="changeModalStatus"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>댓글을 삭제하시겠습니까?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            @click="changeModalStatus"
            class="btn btn-secondary"
            data-bs-dismiss="modal">
            취소
          </button>
          <button
            type="button"
            @click="commentDelete"
            class="btn btn-primary">
            삭제
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="commentListWrapper">
      <ul class="commentBoxWrapper">
        <li class="comments">
          <div class="commentArea">
            <div class="commentAreaTop">
              <div class="commentUser">
                {{ userComment.userId }}
              </div>
              <div class="commentRating">
                {{ userComment.starRate }}
              </div>
            </div>
            <div
              class="commentText"
              v-if="edit">
              {{ userComment.comment }}
            </div>
            <div
              v-else
              class="commentFixArea">
              <textarea
                class="commentFixBox"
                v-model="userComment.comment"></textarea>
            </div>
            <div
              v-if=" userComment.userId === this.$store.state.loginService.UserInfoObj.id && edit"
              class="commentMethods">
              <div class="commentFix">
                <span @click="changeEdit">수정</span>
              </div>
              <div class="commentDelete">
                <span @click="changeModalStatus">삭제</span>
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
      edit: true,
      delete_show: false,
      userComment: [

      ]
    }
  },
  created() {
    this.userComment = this.comment
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
    changeModalStatus() {
      this.delete_show = !this.delete_show
    },
    async commentFix() {
      this.$store.dispatch('commentService/fixComment', {
        id: this.$route.params.id,
        commentId: this.comment.commentId,
        comment: this.comment.comment,
        starRate: this.comment.starRate
      })
      this.edit = true
      console.log(this.edit)
    },
    async commentDelete() {
        this.$store.commit('commentService/deleteComment', {
        id: this.$route.params.id,
        commentId: this.comment.commentId
        })
      this.$router.go(this.$router.currentRoute)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.modal-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    outline: 0;
    z-index: 1055;
}
.container {
  overflow: hidden;
  width: 100%;
  .commentListWrapper {
    border-top: 1px solid #ebebeb;
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