<template>
<div class="container-fluid">
  <h1 class= "display-4">About Me</h1>
</div>
<div class="container-fluid">
  <img class="" src="../assets/port-picture.jpg" style="max-height: 700px; max-width: 50%; float:left; margin: 1rem;">
  <p class="">
    Welcome to my portfolio website! I'm Levi, a passionate and experienced 
    web developer dedicated to crafting exceptional digital experiences. With 
    a strong background in coding and a keen eye for design, I specialize in 
    creating innovative and user-friendly websites that not only meet my 
    clients' needs but also exceed their expectations.
  </p>
  <p>
    In today's fast-paced digital world, having a powerful online presence 
    is essential for businesses and individuals alike. As a web developer, 
    I understand the significance of a well-designed and fully functional 
    website in capturing the attention of visitors and conveying the right 
    message. Whether it's an e-commerce platform, a corporate website, or a 
    personal blog, I am committed to delivering high-quality solutions 
    tailored to each unique project.
  </p>
  <p>
    My journey as a web developer began several years ago when I discovered 
    my passion for coding and designing intuitive user interfaces. Since 
    then, I have honed my skills in various programming languages, such as 
    HTML, CSS, JavaScript, and PHP, to name a few. I stay up to date with 
    the latest industry trends and technologies to ensure that my work 
    remains cutting-edge and ahead of the curve.
  </p>
  <p>
    What sets me apart is my ability to combine technical expertise with a 
    creative mindset. I believe that successful web development is not just 
    about writing code; it's about creating seamless and enjoyable user 
    experiences. By paying meticulous attention to detail and employing a 
    user-centric approach, I strive to build websites that are not only 
    visually appealing but also highly functional, responsive, and optimized 
    for performance across all devices.
  </p>
  <p>
    Collaboration and open communication are integral to my work philosophy. 
    I value the input of my clients and believe that a strong partnership is 
    the key to achieving exceptional results. I pride myself on actively 
    listening to your ideas, understanding your goals, and translating them 
    into tangible digital solutions that resonate with your target audience.
  </p>
  <p>
    I invite you to explore my portfolio, where you'll find a collection of 
    projects that showcase my technical skills, creativity, and versatility 
    as a web developer. Whether you're a business looking for a new website 
    or an individual seeking to establish an online presence, I am confident 
    that my expertise can help bring your vision to life.
  </p>
  <p>
    Thank you for visiting my portfolio website. I look forward to 
    collaborating with you and creating remarkable digital experiences 
    that leave a lasting impact.
  </p>
</div>
</template>

<script>

import { gsap } from 'gsap';

export default {
  mounted(){
    window.scrollTo(0, 0)
    gsap.from('img', {opacity:0})
    gsap.from('p', {x: '100%', stagger: 0.5,})
  },
  props: ['cards']



}




</script>

<style scoped>

p {
  padding: 1rem;
  margin: 1rem;
}


</style>
