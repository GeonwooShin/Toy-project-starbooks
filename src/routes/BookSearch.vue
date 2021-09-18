<template>
  <BookList />
  <Pagination />
</template>

<script>
import BookList from '~/components/BookList'
import Pagination from '~/components/Pagination.vue'

export default {
  components: {
    BookList,
    Pagination
  }
}
</script>