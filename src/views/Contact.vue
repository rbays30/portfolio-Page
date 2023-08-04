<template>
  <h1 class="display-4">Let's Get in Touch!</h1>
  <!-- Wrapper container -->
<div class="container py-4 m-auto">

<!-- Bootstrap 5 starter form -->
<form ref="form" @submit.prevent="sendEmail" id="contactForm">

  <!-- Name input -->
  <div class="mb-3">
    <label class="form-label" for="nameakslfj">Name</label>
    <input class="form-control" id="nameakslfj" type="text" name="nameakslfj" placeholder="Name" required />
  </div>

  <!-- Email address input -->
  <div class="mb-3">
    <label class="form-label" for="emailakslfj" >Email Address</label>
    <input class="form-control" id="emailakslfj" name="emailakslfj" type="email" placeholder="Email Address" required />
  </div>

  <!-- Message input -->
  <div class="mb-3">
    <label class="form-label" for="messageakslfj">Message</label>
    <textarea class="form-control" id="messageakslfj" type="text" name="messageaklsfj" placeholder="Message" required style="height: 10rem;"></textarea>
  </div>

  <!-- Form submit button -->
  <div class="d-grid">
    <button class="btn btn-dark btn-lg" type="submit" value="Send">Submit</button>
  </div>

  <!-- h o n e y p 0 t -->
  <label class="ohnohoney" for="name"></label>
  <input class="ohnohoney" v-model="nameSpam" autocomplete="off" type="text" id="name" name="name" placeholder="Your name here">
  <label class="ohnohoney"  for="email"></label>
  <input class="ohnohoney" v-model="emailSpam" autocomplete="off" type="email" id="email" name="email" placeholder="Your e-mail here">

</form>

</div>

</template>

<script>
import emailjs from '@emailjs/browser'


export default {
  data() {
    return {
      emailSpam: '',
      nameSpam: ''
    }
  },
  props: ['cards'],
  methods: {
    sendEmail() {
      
      console.log(this.emailSpam);      
      console.log(this.nameSpam);
      if(!this.nameSpam && !this.emailSpam) {
        emailjs.sendForm('service_kua6uji', 'template_va1t0fn', this.$refs.form, 'zzemGvCPr6pmIhZUO')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
      }
  
      this.$router.push('/success')

        
    }
  },
  mounted () {
  window.scrollTo(0, 0)
}
}
    
</script>

<style>

.ohnohoney {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        height: 0;
        width: 0;
        z-index: -1;
    }
</style>

