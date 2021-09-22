<template>
  <div class="container">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{ disabled: selectedPage === 1 }">
          <a
            class="page-link"
            @click="onClickPage(selectedPage - 1)">Previous</a>
        </li>
        <li
          v-for="page in this.$store.state.book.totalpage"
          :key="page"
          class="page-item"
          :class="{ active: page === selectedPage }">
          <a
            class="page-link"
            @click="onClickPage(page)">{{ page }}</a>
        </li>
        <li
          class="page-item"
          :class="{ disabled: selectedPage === 16 }">
          <a
            class="page-link"
            @click="onClickPage(selectedPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPage: 1
    }
  },
  methods: {
    onClickPage(page) {
      this.$store.dispatch('book/searchBooks', {
        page,
        size: 20
      })
      this.selectedPage = page
      window.scrollTo(0,0)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 100px;
  padding-bottom: 100px;
  nav {
    .pagination {
      justify-content: center;
      .page-item {
        cursor: pointer;
      }
      a {
        font-weight: 600;
      }
    }
  }
}
</style>