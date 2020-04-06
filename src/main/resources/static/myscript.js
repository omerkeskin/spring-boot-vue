var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

document.querySelector('#btn_mycustom').addEventListener('click', function () {
    console.log('btn_mycustom clicked');
})