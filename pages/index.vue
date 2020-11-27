<template>
  <div class="box-border">
    <!-- Header  -->
    <div
      class="hidden lg:flex sticky top-0 left-0 items-center justify-between px-6 py-4 bg-white border-b"
    >
      <div class="flex items-center justify-between space-x-6">
        <img
          class="w-16"
          src="https://www.xsis.co.id/wp-content/uploads/2019/11/XSIS-LOGO-REV1-204X120.png"
          alt="logo-company"
        />
        <nuxt-link
          class="py-1 px-3 text-lg hover:text-green-secondary"
          v-for="link in url"
          :key="link.id"
          :to="link.link"
        >{{link.display}}</nuxt-link>
      </div>
      <div class="flex items-center space-x-5">
        <nuxt-link
          class="py-1 px-3 border-b-2 border-transparent hover:border-green-secondary"
          to="/home"
        >Contact Us</nuxt-link>
        <nuxt-link class="btn-util rounded" to="/home">Send Resume</nuxt-link>
      </div>
    </div>
    <!-- End header  -->

    <!-- Main hero-->
    <section class="hero-background flex items-start pt-12 justify-center lg:min-h-screen mx-auto">
      <div class="flex flex-col p-4 items-center justify-start mx-auto lg:w-1/2">
        <h1 class="font-semibold text-2xl lg:text-5xl">Hilang Arah?</h1>
        <h1 class="font-bold text-3xl lg:text-6xl">MOVE ON Aja</h1>
        <p
          class="text-sm lg:text-xl text-center my-5"
        >Established in 2005, PT. Xsis Mitra Utama (Xsis) is known as an IT Service company who provides IT Expert Services, Enterprise Application Service, IT Managed Service, and IT Learning & Training Service.</p>
        <h1 class="font-semibold text-xl lg:text-4xl">Through XSIS ACADEMY</h1>
        <p class="mt-3">Beminat belajar IT</p>
        <nuxt-link class="btn-util rounded my-4 shadow-lg" to="/home">
          Send Resume Now
          <i class="fa fa-fw fa-arrow-right"></i>
        </nuxt-link>
      </div>
    </section>
    <!-- End Main hero-->

    <!-- Service 1  -->
    <section
      class="flex flex-col items-center px-4 lg:flex-row lg:items-start mx-auto justify-center lg:py-10 lg:px-32 lg:space-x-16"
    >
      <div>
        <img src="https://www.xsis.co.id/wp-content/uploads/2019/12/400x400b.jpg" alt="img-01" />
      </div>
      <div class="flex flex-col items-start justify-center">
        <h1 class="font-semibold text-4xl">IT Expert Services</h1>
        <p
          class="text-xl my-5 w-auto"
        >With almost 15 years of experience in the field, we will deliver expert consultant for your IT projects and operations</p>
        <nuxt-link class="btn-util rounded my-4 shadow-lg" to="/home">
          Learn more
          <i class="fa fa-fw fa-arrow-right"></i>
        </nuxt-link>
      </div>
    </section>
    <!-- Ending sevice 1 -->

    <!-- Service 2  -->
    <section
      class="flex flex-col items-center px-4 lg:flex-row lg:items-start mx-auto justify-center lg:py-10 lg:px-32 lg:space-x-16 border-t-2 border-gray-300"
    >
      <div class="flex flex-col items-start justify-center">
        <h1 class="font-semibold text-4xl">Enterprise Application</h1>
        <p class="text-xl my-5 w-auto">
          With almost 15 years of experience in the field, we will deliver expert consultant for your IT projects and operations
          <span
            class="font-semibold"
          >We implement selected products that suit your needs</span>
        </p>
        <nuxt-link class="btn-util rounded my-4 shadow-lg" to="/home">
          Learn more
          <i class="fa fa-fw fa-arrow-right"></i>
        </nuxt-link>
      </div>
      <div>
        <img
          class="w-full h-full"
          src="https://www.xsis.co.id/wp-content/uploads/2019/12/400x400a.png"
          alt="img-02"
        />
      </div>
    </section>
    <!-- Ending sevice 2 -->

    <!-- Testimonial -->
    <section class="flex flex-col item-center mx-auto p-4 lg:p-10 hero-background">
      <div class="text-center text-4xl mb-10">Testimonial</div>
      <div class="flex flex-col md:flex-row items-center justify-between lg:space-x-10">
        <div
          v-for="testi in testimonial"
          :key="testi.id"
          class="w-full lg:w-1/3 h-full p-5 mb-5 lg:mb-0 flex flex-col cursor-pointer items-center shadow bg-gray-100 rounded transition-shadow ease-linear duration-100 hover:shadow-2xl"
        >
            <img :src="testi.img" class="w-32 h-32 object-cover rounded-full" alt="img-testimonial" />
          <div class="text-center text-2xl">{{testi.name}}</div>
          <div class="text-center text-lg text-blue-700 mb-5">{{testi.bootcamp}}</div>
          <div class="p-5 text-center">"{{testi.testimonial}}"</div>
          <div class="my-3 text-center text-gray-700 space-x-2">
            <span class="text-xl hover:text-green-secondary">
              <i class="fab fa-github"></i>
            </span>
            <span class="text-xl hover:text-green-secondary">
              <i class="fab fa-twitter"></i>
            </span>
            <span class="text-xl hover:text-green-secondary">
              <i class="fab fa-gitlab"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
    <!-- Ending Testimonial -->

    <!-- Readi join  -->
    <section class="flex items-center justify-center py-10 px-4 bg-custom-02 min-h-full">
      <div class="mx-auto">
        <h1 class="font-semibold text-3xl">Ready to join?</h1>
        <p
          class="text-xl w-full mb-8"
        >Wujudkan impianmu menjadi programmer handal dan berkarir profesional di dunia IT.</p>
        <nuxt-link class="btn-util rounded shadow-lg my-5" to="/home">
          Send your resume now
          <i class="fa fa-fw fa-arrow-right"></i>
        </nuxt-link>
      </div>
    </section>
    <!-- end ready join  -->

    <!-- Footer  -->
    <section
      class="h-full pt-16 pb-5 px-4 lg:px-0 flex flex-col lg:flex-row items-start justify-center lg:space-x-56"
    >
      <div class="mb-5 lg:mb-0">
        <span class="block">Satrio Tower Building, 25th Floor</span>
        <span class="block">Jl. Prof. Dr. Satrio Kav C4</span>
        <span class="block">Jakarta Selatan 12950</span>
        <span class="block">Indonesia</span>
        <a class="text-base hover:text-green-secondary" href="/home">Rodamap detail</a>
      </div>
      <div class="mb-5 lg:mb-0">
        <span class="block">
          Phone:
          <span class="text-green-secondary">(+62) 21 2788 3570</span>
        </span>
        <span class="block">
          Fax:
          <span class="text-green-secondary">(+62) 21 2788 3573</span>
        </span>
        <span class="block">
          Email:
          <span class="text-green-secondary">info@xsis.co.id</span>
        </span>
        <span class="block">
          Phone:
          <span class="text-green-secondary">(+62) 21 2788 3570</span>
        </span>
        <span class="text-green-secondary block">recruitment@xsis.co.id</span>
      </div>
      <div>
        <span class="block mb-3">PT Xsis Mitra Utama</span>
        <span class="text-2xl">
          <i
            class="fab fa-fw fa-twitter cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
          <i
            class="fab fa-fw fa-facebook cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
          <i
            class="fab fa-fw fa-instagram cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
          <i
            class="fab fa-fw fa-linkedin cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
          <i
            class="fab fa-fw fa-youtube cursor-pointer text-gray-600 hover:text-green-secondary transition-colors duration-150 ease-in-out"
          ></i>
        </span>
      </div>
    </section>
    <section class="flex py-8 items-center justify-center h-10 border-t-2 border-gray-200">
      <p
        class="text-sm"
      >&copy; {{(new Date()).getFullYear()}} Xsis Mitra Utama - All Rights Reserved</p>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    url: [
      {
        id: 1,
        display: 'Home',
        link: '/home'
      },
      {
        id: 2,
        display: 'About Us',
        link: '/home'
      },
      {
        id: 3,
        display: 'Services',
        link: '/home'
      },
      {
        id: 4,
        display: 'Careers',
        link: '/home'
      },
      {
        id: 5,
        display: 'News and Event',
        link: '/home'
      },
      {
        id: 6,
        display: 'Blog',
        link: '/home'
      }
    ],
    testimonial: [
      {
        id: 1,
        testimonial:
          "It's amazing, Right here you got best leader and pretty much friendly employer, Absolutly you just have to join super bootcamp if you wanna be a real programmer.",
        name: 'Yasdiqul Amin',
        bootcamp: 'PHP Bootcamp',
        img:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 2,
        testimonial:
          "It's amazing, Right here you got best leader and pretty much friendly employer, Absolutly you just have to join super bootcamp if you wanna be a real programmer.",
        name: 'Sahid Triambudi',
        bootcamp: 'PHP Bootcamp',
        img: 'https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 3,
        testimonial:
          "It's amazing, Right here you got best leader and pretty much friendly employer, Absolutly you just have to join super bootcamp if you wanna be a real programmer.",
        name: 'Anom Pradonggo',
        bootcamp: 'Java Bootcamp',
        img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60'
      }
    ]
  })
};
</script>

<style scoped>
.hero-background {
  background-position: center;
  background-repeat: repeat;
  background-size: 400px;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 70%,
      rgba(255, 255, 255, 1)
    ),
    url(https://webassets.mongodb.com/_com_assets/cms/dots_hero-i42f3gz25y.png);
}

.bg-custom-01 {
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  background-image: url('https://webassets.mongodb.com/_com_assets/cms/shadow-dots-41y54qfxqz.svg');
}
.bg-custom-02 {
  background: url(https://webassets.mongodb.com/_com_assets/cms/13x13-dot-dark@3x-wmem1vevpx.svg)
    repeat 6px;
}
</style>
