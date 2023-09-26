new Vue({
    el: '#app',
    data: {
        newItem: '',
        items: []
    },
    methods: {
        addItem() {
            if (this.newItem.trim() === '') return;
            this.items.push({ name: this.newItem, bought: false });
            this.newItem = '';
        },
        toggleItem(index) {
            this.items[index].bought = !this.items[index].bought;
        },
        removeItem(index) {
            this.items.splice(index, 1);
        }
    }
});
