<template>
  <section class="signup">
    <div class="signup-container">
      <h2>회원가입</h2>
      <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">아이디</span>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              required />
          </div>
          <div class="input-box">
            <span class="details">비밀번호</span>
            <input
              type="text"
              placeholder="비밀번호를 입력하세요"
              required />
          </div>
          <div class="input-box">
            <span class="details">비밀번호 확인</span>
            <input
              type="text"
              placeholder="비밀번호를 확인하세요"
              required />
          </div>
          <div class="input-box">
            <span class="details">이름</span>
            <input
              type="text"
              placeholder="이름을 입력하세요"
              required />
          </div>
        </div>
        <div class="button">
          <input
            type="submit"
            value="가입하기" />
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.signup {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  .signup-container {
    position: absolute;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $white;
    border-radius: 10px;
    width: 500px;
    h2 {
      color: $primary;
      font-weight: 700;
      // text-align: center;
      padding: 0 0 10px 0;
      // border-bottom: 1px solid silver;
      font-family: 'Didact Gothic', sans-serif;
      position: relative;
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 30px;
        background: silver;
      }
    }
    form{
      .user-details{
        padding: 10px 0 10px;
        .input-box {
          display: flex;
          padding: 30px 0;
          height: 55px;
          width: 100%;
          align-items: center;
          justify-content: center;
          .details {
            width: 30%;
            justify-content: center;
          }
          input {
            width: 100%;
            height: 45px;
            border-radius: 3px;
            border: 1px solid #adadad;
            padding-left: 10px;
            font-size: 15px;
            outline: none;
            border-bottom-width: 2px;
            transition: all .3s ease;
            &:focus,
            &:valid {
              border-color: $primary;
              transition: .2s;
            }
          }
        }
      }
      .button {
        margin-top: 30px;
        height: 50px;
        input {
          width: 100%;
          height: 100%;
          outline: none;
          color: $secondary;
          background-color: $primary;
          border: 1px solid;
          border-radius: 7px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 1px;
          &:hover {
            border-color: $primary;
            transition: .5s;
          }
        }
      }
    }
  }
}
</style>