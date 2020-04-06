var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        x :0,
        y :0
    },
    methods: {
        showAlert: function () {
            console.log('Vue showAlert function')
        }
    }
});

document.querySelector('#btn_mycustom').addEventListener('click', function () {
    console.log('btn_mycustom clicked');
})