<template>
  <div class="signin">
    <div class="signin-container">
      <h2>스타북스에 오신 것을 환영합니다!</h2>
      <form @submit.prevent="userLogin">
        <div class="txt_field">
          <input
            type="text"
            name="loginid"
            v-model="userObj.id"
            required />
          <span></span>
          <label>ID</label>
        </div>
        <div class="txt_field">
          <input
            type="password"
            name="loginpw"
            v-model="userObj.password"
            required />
          <span></span>
          <label>Password</label>
        </div>
        <input
          type="submit"
          class="login_button"
          value="로그인" />
        <div class="signup_link">
          회원이 아니십니까?
          <RouterLink
            to="/Join"
            class="nav-link">
            회원가입
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      navigations: [
        {
          name: '회원가입',
          href: '/Join'
        } 
      ]
    }
  },
  methods: {
    async userLogin() {
      this.$store.dispatch('loginService/login', {
        id: this.$store.state.id,
        password: this.$store.state.password
      })
      this.$router.replace('/')
    }
  },
  computed: {
    ...mapState('loginService', {
      userObj: 'UserInfoObj'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.signin {
  height: 860px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  .signin-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: $white;
    border-radius: 10px;
    h2 {
      color: $primary;
      font-weight: 700;
      text-align: center;
      padding: 0 0 20px 0;
      border-bottom: 1px solid silver;
      font-family: 'Didact Gothic', sans-serif;
    }
    form {
      padding: 0 40px;
      box-sizing: border-box;
      .txt_field {
        position: relative;
        border-bottom: 2px solid #adadad;
        margin: 30px 0;
        input {
          width: 100%;
          padding: 0 5px;
          height: 40px;
          font-size: 16px;
          border: none;
          background: none;
          outline: none;
          &:focus ~ label,
          &:valid ~ label {
            top: -5px;
            color: $primary;
          }
          &:focus ~ span::before,
          &:valid ~ span::before {
            width: 100%;
          }
        }
        label {
          position: absolute;
          top: 50%;
          left: 5px;
          color: #adadad;
          transform: translateY(-50%);
          font-size: 16px;
          pointer-events: none;
          transition: .5s;
        }
        span::before {
          content: '';
          position: absolute;
          top: 40px;
          left: 0;
          width: 0%;
          height: 2px;
          background: $primary;
          transition: .5s;
        }
      }
      .login_button {
        width: 100%;
        height: 50px;
        border: 1px solid;
        border-radius: 7px;
        background-color: $primary;
        color: $secondary;
        font-size: 18px;
        font-weight: 700;
        cursor: pointer;
        outline: none;
        letter-spacing: 1px;
        &:hover {
          border-color: $primary;
          transition: .5s;
        }
      }
    }
    .signup_link {
      display: flex;
      align-items: center;
      padding: 0 40px;
      margin: 30px 0;
      font-size: 16px;
      justify-content: space-around;
      color: #adadad;
      font-weight: 700;
      .nav-link {
        color: #2691d9;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>