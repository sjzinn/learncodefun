const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', isFav: true },
                { title: 'dune', author: 'frank herbert', isFav: true },
                { title: 'obelisk gate', author: 'nk jemisin', isFav: true },
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks //truthy now becomes falsey & vice versa
        },
        toggleFav(book) {
            book.isFav != book.isFav
        }

    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount("#app")