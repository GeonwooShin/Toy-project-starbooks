<template>
  <header>
    <nav class="navbar container">
      <div class="navbar__logo">
        <i class="fas fa-book-reader"></i>
        <Logo />
      </div>
      <ul class="navbar__menu">
        <li>
          <RouterLink
            to="/"
            active-class="active"
            class="nav-link">
            홈
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/BookSearch"
            active-class="active"
            class="nav-link">
            도서검색
          </RouterLink>
        </li> 
      </ul>
      <ul class="navbar__menu_nd">
        <li>
          <RouterLink
            to="/Login"
            active-class="active"
            class="nav-link">
            로그인
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/Join"
            active-class="active"
            class="nav-link">
            회원가입
          </RouterLink>
        </li> 
      </ul>
    </nav>
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
  }
}
</script>

<style lang="scss" scoped>
@import "~/scss/main";
header {
  background-color: $primary;
  border-bottom: 3.6px solid #808ea2;
}
.navbar {
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  align-items: center;
  background-color: $primary;
  padding: 8px 12px;
  .navbar__logo {
    font-size: 24px;
    justify-content: flex-start;
    i {
      color: $secondary;
      margin-right: 10px;
    }
  }
  .navbar__menu {
    display: flex;
    color: $white;
    font-weight: bold;
    padding-right: 625px;
    justify-content: flex-start;
    margin-bottom: 0;
    li {
      padding: 8px 12px;
      &:hover {
        background-color: $yellow;
        border-radius: 4px;
        transition: .2s;
      }
    }
  }
  .navbar__menu_nd {
    display: flex;
    font-weight: bold;
    justify-content: flex-end;
    margin-bottom: 0;
    li {
      padding: 8px 12px;
      &:hover {
        background-color: $yellow;
        border-radius: 4px;
        transition: .2s;
      }
    }
  }
  .nav-link {
      color: $white;
      &:hover {
        color: $primary;
        transition: .2s;
      }
    }
}
</style>