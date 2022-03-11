const app = new Vue({
    el: '#app',
    data:{
      eMail: [],
    },
    created() {
  
      for (let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) =>{
            this.eMail.push(res.data.response);
            console.log(this.eMail)
          })
      }
    
    },
  })