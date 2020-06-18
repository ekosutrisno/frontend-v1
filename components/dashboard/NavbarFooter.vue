<template>
  <div class="nv-transition w-full bottom-0 left-0 right-0 fixed border-t bg-xsis-bg-light-primary dark:bg-xsis-bg-dark-primary border-gray-400 dark:border-xsis-bd-dark-primary lg:hidden z-10">
    <div class="mx-auto lg:mx-4 py-3 px-2  md:mx-6 md:py-5 flex justify-between">
      <div class="flex flex-col md:flex-row items-center justify-around">
        <nuxt-link
          to="/employee"
          class="hover:text-green-light hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="books"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-books fa-w-18 inline-block  h-5 fill-current mb-1"
                data-v-205c0e3c=""
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M96 0H32A32 32 0 0 0 0 32v64h128V32A32 32 0 0 0 96 0zM0 384h128V128H0zm0 96a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H0zm513.62-17.78L401.08 42.71l-60.26 16.14 112.35 418.8c.11.39.2.79.29 1.18l60.29-16.15c-.04-.15-.09-.3-.13-.46zM160 480a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-64H160zM256 0h-64a32 32 0 0 0-32 32v64h124.79l-8-29.65a23.94 23.94 0 0 1 11.17-27V32A32 32 0 0 0 256 0zm-96 384h128V128H160z"
                    opacity="0.4"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M0 416h128v-32H0zm0-288h128V96H0zm575.17 317.65L460.39 17.78a23.89 23.89 0 0 0-29.18-17h-.09L415.73 5a24 24 0 0 0-16.9 29.36l114.79 427.86a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.35zM160 416h128v-32H160zM338.39 49.78a23.89 23.89 0 0 0-29.18-17h-.09L293.73 37a24 24 0 0 0-16.9 29.36l8 29.65H160v32h128V108l103.62 386.22a23.89 23.89 0 0 0 29.18 17h.09l15.38-4.22a24 24 0 0 0 16.9-29.33z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex md:pl-3 text-xs md:text-base font-semibold">
              Employee
            </div>
          </div>
        </nuxt-link>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between">
        <nuxt-link
          to="/invitation"
          class="hover:text-green-light hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="clipboard-list"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                class="svg-inline--fa fa-clipboard-list fa-w-12 inline-block h-5 fill-current mb-1"
                data-v-205c0e3c=""
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M336 64h-80a64 64 0 0 1 64 64H64a64 64 0 0 1 64-64H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V112a48 48 0 0 0-48-48zM96 424a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24zm0-96a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24zm0-96a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24zm224 176a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8zm0-96a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8zm0-96a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8z"
                    opacity="0.4"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M96 376a24 24 0 1 0 24 24 23.94 23.94 0 0 0-24-24zm0-96a24 24 0 1 0 24 24 23.94 23.94 0 0 0-24-24zm0-96a24 24 0 1 0 24 24 23.94 23.94 0 0 0-24-24zM256 64a64 64 0 0 0-128 0 64 64 0 0 0-64 64h256a64 64 0 0 0-64-64zm-64 24a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex md:pl-3 text-xs md:text-base font-semibold">
              Invitations
            </div>
          </div>

        </nuxt-link>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between">
        <nuxt-link
          to="/schedule"
          class="hover:text-green-light hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="code"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                class="svg-inline--fa fa-code fa-w-20 inline-block h-5 fill-current mb-1"
                data-v-205c0e3c=""
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M422.12 18.16a12 12 0 0 1 8.2 14.9l-136.5 470.2a12 12 0 0 1-14.89 8.2l-61-17.7a12 12 0 0 1-8.2-14.9l136.5-470.2a12 12 0 0 1 14.89-8.2z"
                    opacity="0.4"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M636.23 247.26l-144.11-135.2a12.11 12.11 0 0 0-17 .5L431.62 159a12 12 0 0 0 .81 17.2L523 256l-90.59 79.7a11.92 11.92 0 0 0-.81 17.2l43.5 46.4a12 12 0 0 0 17 .6l144.11-135.1a11.94 11.94 0 0 0 .02-17.54zm-427.8-88.2l-43.5-46.4a12 12 0 0 0-17-.5l-144.11 135a11.94 11.94 0 0 0 0 17.5l144.11 135.1a11.92 11.92 0 0 0 17-.5l43.5-46.4a12 12 0 0 0-.81-17.2L117 256l90.6-79.7a11.92 11.92 0 0 0 .83-17.24z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex md:pl-3 text-xs md:text-base font-semibold">

              Schedules
            </div>
          </div>

        </nuxt-link>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between">
        <nuxt-link
          to="/profile"
          class="hover:text-green-light hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="comments-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                class="svg-inline--fa fa-comments-alt fa-w-18 inline-block h-5 fill-current mb-1"
                data-v-205c0e3c=""
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M352 287.9H162.3L79.5 350a9.7 9.7 0 0 1-15.5-7.8V288a64.06 64.06 0 0 1-64-64V64A64.06 64.06 0 0 1 64 0h288a64.06 64.06 0 0 1 64 64v160a63.91 63.91 0 0 1-64 63.9z"
                    opacity="0.4"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M576 224v160a64.06 64.06 0 0 1-64 64h-32v54.3a9.7 9.7 0 0 1-15.5 7.8L381.7 448H256a64.06 64.06 0 0 1-64-64v-64h160a96.15 96.15 0 0 0 96-96v-64h64a64.06 64.06 0 0 1 64 64z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex md:pl-3 text-xs md:text-base font-semibold">
              Profile
            </div>
          </div>

        </nuxt-link>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between">
        <nuxt-link
          to="/profile"
          class="hover:text-green-light hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="swatchbook"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="svg-inline--fa fa-swatchbook fa-w-16 inline-block h-5 fill-current mb-1"
                data-v-205c0e3c=""
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M64,256h64V192H64Zm370.66-88.29h0L344.5,77.36a31.83,31.83,0,0,0-45-.07h0l-.07.07L224,152.88V424L434.66,212.9A32,32,0,0,0,434.66,167.71ZM64,128h64V64H64ZM480,320H373.09L186.68,506.51c-2.06,2.07-4.5,3.58-6.68,5.49H480a32,32,0,0,0,32-32V352A32,32,0,0,0,480,320Z"
                    opacity="0.4"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M160,0H32A32,32,0,0,0,0,32V416a96,96,0,0,0,192,0V32A32,32,0,0,0,160,0ZM96,440a24,24,0,1,1,24-24A24,24,0,0,1,96,440Zm32-184H64V192h64Zm0-128H64V64h64Z"
                    class="fa-primary"
                  ></path>
                </g>
              </svg>
            </div>
            <div class="flex md:pl-3 text-xs md:text-base font-semibold">
              Resources
            </div>
          </div>

        </nuxt-link>
      </div>

      <div class="flex flex-col md:flex-row items-center justify-between">
        <nuxt-link
          to="/"
          class="hover:text-green-light hover:no-underline transition-colors duration-300 ease-linear"
        >
          <div class="flex flex-col md:flex-row items-center">
            <div class="flex">
              <svg
                viewBox="0 0 52 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="overflow-visible inline-block h-5 fill-current mb-1"
                data-v-205c0e3c=""
              >
                <path
                  d="M60.7927 6.73156L55.6246 1.57158C54.8484 0.79959 53.7974 0.36615 52.7017 0.36615C51.6061 0.36615 50.5551 0.79959 49.7788 1.57158L46.0298 5.31468C45.8366 5.50847 45.7281 5.7708 45.7281 6.04426C45.7281 6.31772 45.8366 6.58005 46.0298 6.77385L55.5823 16.3114C55.7764 16.5043 56.0391 16.6126 56.313 16.6126C56.5869 16.6126 56.8496 16.5043 57.0437 16.3114L60.7927 12.5683C61.5659 11.7932 62 10.7438 62 9.6499C62 8.55598 61.5659 7.50661 60.7927 6.73156ZM46.2734 31.8336L42.0373 36.0631C41.8021 36.3036 41.6692 36.6257 41.6666 36.9618V47.7259H7.77777V13.89H32.1142C32.4509 13.8874 32.7735 13.7548 33.0144 13.5199L37.2505 9.2904C37.4289 9.11293 37.5504 8.88657 37.5997 8.64003C37.649 8.39348 37.6238 8.13787 37.5274 7.90564C37.4309 7.6734 37.2676 7.47501 37.058 7.33563C36.8484 7.19625 36.6021 7.12217 36.3503 7.12278H6.08333C4.73515 7.12278 3.44218 7.65751 2.48887 8.60933C1.53556 9.56115 1 10.8521 1 12.1982L1 49.4177C1 50.7638 1.53556 52.0547 2.48887 53.0065C3.44218 53.9583 4.73515 54.4931 6.08333 54.4931H43.3611C44.7093 54.4931 46.0022 53.9583 46.9555 53.0065C47.9089 52.0547 48.4444 50.7638 48.4444 49.4177V32.7323C48.445 32.4809 48.3708 32.235 48.2312 32.0258C48.0916 31.8165 47.8929 31.6534 47.6603 31.5571C47.4277 31.4608 47.1717 31.4357 46.9248 31.4849C46.6779 31.5341 46.4512 31.6555 46.2734 31.8336Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M53.1889 18.6905C53.3821 18.8843 53.4906 19.1466 53.4906 19.4201C53.4906 19.6935 53.3821 19.9558 53.1889 20.1496L30.0598 43.2427L20.232 44.3317C19.9246 44.3662 19.6134 44.3311 19.3214 44.2291C19.0294 44.127 18.7642 43.9606 18.5455 43.7422C18.3268 43.5239 18.1601 43.2591 18.0579 42.9676C17.9557 42.6761 17.9205 42.3653 17.9551 42.0584L19.0459 32.246L42.175 9.15296C42.3691 8.96003 42.6319 8.85172 42.9058 8.85172C43.1796 8.85172 43.4424 8.96003 43.6365 9.15296L53.1889 18.6905Z"
                  fill="currentColor"
                  opacity="0.4"
                ></path>
              </svg>
            </div>
            <div class="flex md:pl-3 text-xs md:text-base font-semibold">
              Home
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarFooter'
};
</script>

<style scoped>
.nv-transition {
  animation: 0.5s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
