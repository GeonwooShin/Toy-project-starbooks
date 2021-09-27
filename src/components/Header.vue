<template>
  <header>
    <div class="container">
      <div class="navbar_logo">
        <i class="fas fa-book-reader"></i>
        <Logo />
      </div>
      <div class="navbar_nav">
        <ul class="navbar_menu">
          <li class="navbar_item">
            <RouterLink
              to="/"
              active-class="active"
              class="nav-link">
              홈
            </RouterLink>
          </li>
          <li class="navbar_item">
            <RouterLink
              to="/BookSearch"
              active-class="active"
              class="nav-link">
              도서검색
            </RouterLink>
          </li>
        </ul>
        <ul class="navbar_menu">
          <li class="navbar_item">
            <RouterLink
              v-if="$store.state.isLogin === false"
              to="/Login"
              active-class="active"
              class="nav-link">
              로그인
            </RouterLink>
            <button
              v-else
              type="button"
              @click="UserLogout"
              active-class="active"
              class="nav-link btn btn-primary btn-sm">
              로그아웃
            </button>
          </li>
          <li class="navbar_item">
            <RouterLink
              v-if="$store.state.isLogin === false"
              to="/Join"
              active-class="active"
              class="nav-link">
              회원가입
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: '홈',
          href: '/'
        },
        {
          name: '도서 검색',
          href: '/BookSearch'
        } ,
        {
          name: '로그인',
          href: '/Login'
        },
        {
          name: '회원가입',
          href: '/Join'
        }               
      ]
    }
  },
  methods: {
    UserLogout() {
      this.$store.commit('loginService/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
header {
  background-color: $primary;
  padding: 12px 0;
   border-bottom: 3.6px solid #295899;
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .fas {
      padding-right: 8px;
      color: $secondary;
      font-size: 20px;
    }
    .navbar_nav {
      display: flex;
      align-items: center;
      .navbar_menu {
        display: flex;
        align-items: center;
        margin: 0;
        .active {
          font-weight: bold;
          font-size: 17px;
        }
        .nav-link {
          align-items: center;
          color: $secondary;
          border-radius: 4px;
          &:hover {
            transition: .2s;
            color: $primary;
            background-color: $yellow;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>