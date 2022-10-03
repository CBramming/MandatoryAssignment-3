Vue.createApp({
    data() {
        return {
            word1: null,
            number1: null,
            result: null,

        }
    },
    methods: {
        DoIt() {
            this.result = this.word1

            if (this.number1 == null || this.number1 <= 0) {
                this.result = "Must be non-negative number!"
            }
            else {
                this.result
            }
        }
    }
}).mount("#app")