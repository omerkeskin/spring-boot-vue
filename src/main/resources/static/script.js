var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        x :1,
        y :2
    },
    methods: {
        showAlert: function (event, name) {
            console.log('Event value: '+event.clientX + ' '+ name);
        },
        updateCoords: function (event) {
           this.x = event.clientX;
           this.y = event.clientY;
        }
    }
});

/*document.querySelector('#p_mycustom').addEventListener('mousemove', function (event) {
   console.log('X : '+ event.clientX + ' | Y : '+ event.clientY)
});*/

document.querySelector('#btn_mycustom').addEventListener('click', function () {
    console.log('btn_mycustom clicked');
});