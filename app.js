var app = new Vue({
    el: '#app',
    data: {
       emailNumber: 10,
       emailList: [],
    },
    created() {
       for(let i = 0; i < this.emailNumber; i++) {
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then( (res) => {
             if(res.data.success) {
                this.emailList.push( res.data.response );
             }
          });
       }
    }
 })