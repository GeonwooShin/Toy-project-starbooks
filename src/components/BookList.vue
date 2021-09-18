<template>
  <div class="container">
    <div class="inner">
      <div class="books">
        <BookItem
          v-for="book in books"
          :key="book.isbn"
          :book="book" />
      </div>
    </div>
  </div>
</template>

<script>
import BookItem from '~/components/BookItem'
export default {
  components: {
    BookItem
  },
  computed: {
    books() {
      return this.$store.state.book.books
    }
  },
  async created () {
      this.$store.dispatch('book/searchBooks', {
        page: 1,
        size: 20
      })
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 75px;
  width: 1200px;
  .books {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>