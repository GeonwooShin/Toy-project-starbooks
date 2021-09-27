<template>
  <div class="Reviews container">
    <div class="ReviewsHeader">
      <div class="ReviewsHeaderLeft">
        <div class="HeartForm"></div>
        <p>마음에 드신다면 하트를 눌러 찜해보세요!</p>
      </div>
      <div class="ReviewsHeaderRight">
        <p>책에 대한 리뷰를 남겨보세요!</p>
        <div class="ReviewForm">
          <textarea
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
                type="button"
                class="btn btn-primary">
                리뷰 남기기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ReviewsListWrapper">
      <div class="ReviewList">
        <p>리뷰를 남겨주세요!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    } 
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
    padding-top: 40px;
    .ReviewsHeaderLeft {
      padding-left: 18px;
      width: 20%;
      p {
        padding-top: 10px;
        font-size: 12px;
        text-align: center;
      }
    }
    .ReviewsHeaderRight {
      padding-left: 50px;
      width: 100%;
      p {
        text-align: center;
        font-size: 18px;
        font-weight: 700;
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
}
</style>