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

export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 700px;
  display: flex;
  padding-top: 70px;
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