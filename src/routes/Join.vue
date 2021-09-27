<template>
  <div class="signup">
    <div class="signup-container">
      <h2>회원가입</h2>
      <Form @submit="submitForm">
        <div class="user-details">
          <div class="input-box">
            <span class="details">아이디</span>
            <div class="validate-box">
              <Field
                :class="[validateIdResult === true? 'good-validate' : 'bad-validate']"
                
                type="text"
                placeholder="아이디를 입력하세요"
                v-model="info.userId"
                name="userId"
                required />
              <ErrorMessage
                class="error-box"
                name="userId" />
            </div>
          </div>
          <div class="input-box">
            <span class="details">비밀번호</span>
            <div class="validate-box">
              <Field
                :class="[validatePwResult === true? 'good-validate' : 'bad-validate']"
                :rules="validatePassword"
                type="password"
                placeholder="비밀번호를 입력하세요"
                v-model="info.password"
                name="password"
                required />
              <ErrorMessage
                class="error-box"
                name="password" />
            </div>
          </div>
          <div class="input-box">
            <span class="details">비밀번호 확인</span>
            <div class="validate-box">
              <Field
                :class="[validatePwCoResult === true? 'good-validate' : 'bad-validate']"
                :rules="validatePasswordConfirm"
                type="password"
                placeholder="비밀번호를 확인하세요"
                v-model="info.passwordConfirm"
                name="passwordConfirm"
                required />
              <ErrorMessage
                class="error-box"
                name="passwordConfirm" />
            </div>
          </div>
          <div class="input-box">
            <span class="details">이름</span>
            <div class="validate-box">
              <Field
                :class="[validateNameResult === true? 'good-validate' : 'bad-validate']"
                :rules="validateName"
                type="text"
                placeholder="이름을 입력하세요"
                v-model="info.userName"
                name="userName"
                required />
              <ErrorMessage
                class="error-box"
                name="userName" />
            </div>
          </div>
          <div class="input-box">
            <span class="details">생년월일</span>
            <select
              v-model="info.year"
              class="form-select">
              <option
                v-for="item in filters[0].items"
                :key="item">
                {{ item }}
              </option>
            </select>
            <select
              v-model="info.month"
              class="form-select">
              <option
                v-for="item in filters[1].items"
                :key="item">
                {{ item }}
              </option>
            </select>
            <select
              v-model="info.day"
              class="form-select">
              <option
                v-for="item in filters[2].items"
                :key="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="input-box">
            <span class="details">전화번호</span>
            <div class="validate-box">
              <Field
                :class="[validatePhoneResult === true? 'good-validate' : 'bad-validate']"
                :rules="validatePhoneNumber"
                type="text"
                placeholder="하이픈(-)없이 입력"
                v-model="info.phoneNumber"
                name="phoneNumber"
                required />
              <ErrorMessage
                class="error-box"
                name="phoneNumber" />
            </div>
          </div>
          <div class="input-box">
            <span class="details">이메일</span>
            <div class="validate-box">
              <Field
                :class="[validateEmailResult === true? 'good-validate' : 'bad-validate']"
                :rules="validateEmail"
                type="email"
                placeholder="이메일을 입력하세요"
                v-model="info.email"
                name="email"
                required />
              <ErrorMessage
                class="error-box"
                name="email" />
            </div>
          </div>
        </div>
        <div class="button">
          <input
            type="submit"
            value="가입하기" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Field, Form, ErrorMessage } from 'vee-validate';
import axios from 'axios'
export default {
  components: {
    Field,
    Form,
    ErrorMessage
  },
  data() {

    return {
      year: '',
      month: '',
      day: '',
      emails: '',
      validateIdResult: true,
      validatePwResult: true,
      validatePwCoResult: true,
      validateNameResult: true,
      validatePhoneResult: true,
      validateEmailResult: true,
      filters: [
        {
          name: 'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear()
            for(let i = thisYear; i >= 1940; i -= 1) {
              years.push(i)
            }
            return years
          })()
        },
        {
          name: 'month',
          items: (() => {
            const months = []
            for(let j = 1; j <= 12; j += 1 ) {
              months.push(j)
            }
            return months          
          })()
        },
        {
          name: 'day',
          items: (() => {
            const days = []
            for(let q = 1; q <= 31; q += 1) {
              days.push(q)
            }
            return days
          })()
        }
      ]
    }
  },
  methods: {
     validateId(value) {
      if(!value) {
        this.validateIdResult = false
        return '* 필수 입력 사항입니다.'
      }
      if(!/^[a-z0-9]{5,20}$/i.test(value)) {
        this.validateIdResult = false
        return '5~20자의 영문 소문자, 숫자만 사용 가능합니다'
      }
      return true
    },
     isUnique (value) {
       if(!value) {
         this.validateIdResult = false
        return '* 필수 입력 사항입니다.'
      }
      if(!/^[a-z0-9]{5,20}$/i.test(value)) {
        this.validateIdResult = false
        return '5~20자의 영문 소문자, 숫자만 사용 가능합니다'
      }
      return axios.get(`http://13.209.146.204:8080/api/check/${value}`)
      .then((res) => {
        console.log(value)
        let statusCode = res.data.code
        if(statusCode === "E0008") {
          console.log(res)
          this.validateIdResult = true
          return '사용가능한 아이디 입니다.'
        }else if(statusCode === "E0009") {
          console.log(res)
          this.validateIdResult = false
          return '이미 존재하는 아이디 입니다.'
        }
      })
    },
    validatePassword(value) {
      if(!value) {
        this.validatePwResult = false
        return '* 필수 입력 사항입니다.'
      }
      if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=])[A-Za-z\d~!@#$%^&*()+|=]{8,15}$/i.test(value)) {
        this.validatePwResult = false
        return '5~15자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'
      }
      this.validatePwResult = true
      return true
    },
    validatePasswordConfirm(value) {
      if(!value) {
        this.validatePwCoResult = false
        return '* 필수 입력 사항입니다.'
      }
      if( this.info.password != this.info.passwordConfirm ) {
        this.validatePwCoResult = false
        return '비밀번호가 일치하지 않습니다.'
      }
      this.validatePwCoResult = true
      return true
    },
    validateName(value) {
      if(!value) {
        this.validateNameResult = false
        return '* 필수 입력 사항입니다.'
      }
      if(!/^[가-힣A-Za-z]+$/i.test(value)) {
        this.validateNameResult = false
        return '실명을 입력해주세요.'
      }
      this.validateNameResult = true
      return true
    },
    validatePhoneNumber(value) {
      if(!value) {
        this.validatePhoneResult = false
        return '* 필수 입력 사항입니다.'
      }
      if(!/^01{1}[016789]{1}[0-9]{7,8}$/i.test(value)) {
        this.validatePhoneResult = false
        return '정확히 입력해 주세요.'
      }
      this.validatePhoneResult = true
      return true
    },
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        this.validateEmailResult = false
        return '* 필수 입력 사항입니다.'
      }

      // if the field is not a valid email
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        this.validateEmailResult = false
        return '이메일 형식이 아닙니다.'
      }

      // All is good
      this.validateEmailResult = true
      return true
    },
    async submitForm() {
      this.$store.commit('signup/birthChecking')
      console.log(this.$store.state)
      this.$store.dispatch('signup/addUsers', {
        userId: this.$store.state.userId,
        password: this.$store.state.password,
        passwordConfirm: this.$store.state.passwordConfirm,
        userName: this.$store.state.userName,
        birthDate: this.$store.state.birthDate,
        phoneNumber: this.$store.state.phoneNumber,
        email: this.$store.state.email
      })
      alert('회원가입이 완료되었습니다. 새로운 환경에서 로그인 해주세요.')
      this.$store.commit('signup/resetRegistration')
      this.$router.push('/')
    },
    async idCheck() {
      this.$store.dispatch('signup/idChecking', {
        userId: this.info.userId
      })
    }
  },
  computed: {
    ...mapState('signup',{
      info: 'Userinfo'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
.signup {
  height: 900px;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  .signup-container {
    position: absolute;
    top: 55%;
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
          height: 75px;
          width: 100%;
          align-items: center;
          justify-content: center;
          .validate-box {
            width: 100%;
            .bad-validate {
              border: 1px solid red;
            }
            .good-validate {
              border: 1px solid $primary;
            }
            .error-box {
              font-size: 12px;
              color: red;
            }
          }
          .form-select {
            width: 145px;
            margin-right: 10px;
            border: 1px solid #adadad;
            border-bottom-width: 2px;
            &:hover {
              border-color: $primary;
              transition: .5s;
            }
            &:last-child {
              margin-right: 0;
            }
          }
          .details {
            width: 30%;
            justify-content: center;
          }
          input {
            width: 100%;
            height: 40px;
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