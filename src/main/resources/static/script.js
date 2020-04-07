var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        x :1,
        y :2,
        counter :0
    },
    methods: {
        showAlert: function (event, name) {
            console.log('Event value: '+event.clientX + ' '+ name);
        },
        updateCoords: function (event) {
           this.x = event.clientX;
           this.y = event.clientY;
        },
        onTxtMyCustomKeyUp: function (event) {
            console.log('Target : '+event.target.value);
        },
        calculateResult:function () {
            console.log('Here we go calculateResult');
            return  this.counter > 10 ? '10 dan büyük' : '10 dan küçük';
        }
    },
    computed: {
        firstCounterResult : function () {
            console.log('Here we go firstCounterResult');
            return  this.counter > 10 ? '10 dan büyük' : '10 dan küçük';
        }
    }



});

/*document.querySelector('#p_mycustom').addEventListener('mousemove', function (event) {
   console.log('X : '+ event.clientX + ' | Y : '+ event.clientY)
});*/

/*function onTxtMyCustomChange(event){
    var txtValue = document.getElementById("txt_mycustom").value;
    console.log(txtValue);
}*/

document.querySelector('#btn_mycustom').addEventListener('click', function () {
    console.log('btn_mycustom clicked');
});