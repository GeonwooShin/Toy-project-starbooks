<template>
  <div class="container">
    <input
      v-model="title"
      type="text"
      class="form-control"
      placeholder="검색할 도서명을 입력하세요." 
      @keyup.enter="apply" />
    <button
      class="btn btn-primary"
      @click="apply">
      검색
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
    }
  },
  methods: {
    async apply() {
      console.log('123123')
      try {
        const res = await axios.get( `http://13.209.146.204:8080/api/books?page=3&size=5&sort=createdAt`)
        console.log(res)
        
      } catch (error) {
        console.log(error)
      }
      // const res = await axios.get('https://13.209.146.204:8080/api/books?page=3&size=1&sort=createdAt')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 700px;
  display: flex;
  padding-top: 40px;
  input {
    margin-right: 10px;  
  }
}
.btn {
  width: 120px;
  height: 50px;
  font-weight: 700;
}
</style>