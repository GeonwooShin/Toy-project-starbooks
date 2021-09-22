<template>
  <footer>
    <div class="footer-container">
      <div class="footer-menu">
        <i class="fas fa-book-reader"></i>
        <Logo />
        <li class="footer-items">
          (주) Star
        </li>
        <li class="footer-items">
          사업자등록 : 201-7454-49429
        </li>
        <li class="footer-items">
          사무실 : 전주시 송탄구 순천향로 22번길 204호
        </li>
      </div>
      <div class="footer-menu">
        <h2 class="info">
          Developer
        </h2>
        <li class="info-items">
          Front-End : 신건우
        </li>
        <li class="info-items">
          Front-End : 이세민
        </li>
        <li class="info-items">
          Back-End : 임희상
        </li>
        <li class="info-items">
          DB : 박유나
        </li>
        <li class="info-items">
          Android : 진혜윤
        </li>
      </div>
      <div class="footer-menu">
        <h2 class="about">
          Information
        </h2>
        <li class="about-items">
          고객지원 : 010-6655-9016
        </li>
        <li class="about-items">
          FAX : 02-7797-1537
        </li>
        <li class="about-items">
          기타문의 : dlagmltkd0904@naver.com
        </li>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'

export default {
    components:{
        Logo
    }
}
</script>

<style scoped lang="scss">
@import "~/scss/main";
footer {
  width: 100%;
  // height: 180px;
  bottom: 0;
  // position: fixed;
  margin-top: 12px;
  background-color: $primary;
  padding: 12px 0px;
  border-top: 3.6px solid #295899;
  padding: 12px 8px;
  .footer-container{
      display: flex;
      justify-content: center;
      .fas {
      display: inline;
      padding-right: 8px;
      color: $secondary;
      font-size: 20px;
      }
      .footer-menu {
        margin: 0 140px;
        align-items: center;
        .footer-items{
          list-style-type: none;
          padding-left: 12px;
          margin-top: 6px;
          align-items: center;
          font-size: 12px;
          color: $secondary;
          opacity: 70%;
          }
          .info {
          color: $secondary;
          font-size: 20px;
          font-weight: 700;
          font-family: 'Didact Gothic', sans-serif;
          }
          .info-items{
            padding-left: 12px;
            list-style-type: none;
            margin-top: 6px;
            align-items: center;
            font-size: 12px;
            color: $secondary;
            opacity: 70%;
          }
          .about {
            margin-right: 100px;
            color: $secondary;
            font-size: 20px;
            font-weight: 700;
            font-family: 'Didact Gothic', sans-serif;
          }
          .about-items{
            list-style-type: none;
            padding-left: 12px;
            margin-top: 6px;
            align-items: center;
            font-size: 12px;
            color: $secondary;
            opacity: 70%;
          }
        }
    }
}
.logo {
  font-family: 'Fredoka One', cursive;
  font-size: 20px;
  color: $yellow;
  text-decoration: none;
  &:hover {
    color: $yellow;
  }
  span {
    color: $white;
  }
}
</style>