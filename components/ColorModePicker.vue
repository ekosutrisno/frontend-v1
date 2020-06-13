<template>
  <div>
    <ul class="flex items-center space-x-2">
      <li
        @click="$colorMode.preference = 'system'"
        :class="getClasses('system')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-monitor prefered"
          data-v-04d1611e=""
        >
          <rect
            x="2"
            y="3"
            width="20"
            height="14"
            rx="2"
            ry="2"
            data-v-04d1611e=""
          ></rect>
          <line
            x1="8"
            y1="21"
            x2="16"
            y2="21"
            data-v-04d1611e=""
          ></line>
          <line
            x1="12"
            y1="17"
            x2="12"
            y2="21"
            data-v-04d1611e=""
          ></line>
        </svg>
      </li>
      <li
        @click="$colorMode.preference = 'light'"
        :class="getClasses('light')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-sun"
          data-v-04d1611e=""
        >
          <circle
            cx="12"
            cy="12"
            r="5"
            data-v-04d1611e=""
          ></circle>
          <line
            x1="12"
            y1="1"
            x2="12"
            y2="3"
            data-v-04d1611e=""
          ></line>
          <line
            x1="12"
            y1="21"
            x2="12"
            y2="23"
            data-v-04d1611e=""
          ></line>
          <line
            x1="4.22"
            y1="4.22"
            x2="5.64"
            y2="5.64"
            data-v-04d1611e=""
          ></line>
          <line
            x1="18.36"
            y1="18.36"
            x2="19.78"
            y2="19.78"
            data-v-04d1611e=""
          ></line>
          <line
            x1="1"
            y1="12"
            x2="3"
            y2="12"
            data-v-04d1611e=""
          ></line>
          <line
            x1="21"
            y1="12"
            x2="23"
            y2="12"
            data-v-04d1611e=""
          ></line>
          <line
            x1="4.22"
            y1="19.78"
            x2="5.64"
            y2="18.36"
            data-v-04d1611e=""
          ></line>
          <line
            x1="18.36"
            y1="5.64"
            x2="19.78"
            y2="4.22"
            data-v-04d1611e=""
          ></line>
        </svg>

      </li>
      <li
        @click="$colorMode.preference = 'dark'"
        :class="getClasses('dark')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-moon selected"
          data-v-04d1611e=""
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            data-v-04d1611e=""
          ></path>
        </svg>

      </li>
      <li
        @click="$colorMode.preference = 'sepia'"
        :class="getClasses('sepia')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-coffee"
          data-v-04d1611e=""
        >
          <path
            d="M18 8h1a4 4 0 0 1 0 8h-1"
            data-v-04d1611e=""
          ></path>
          <path
            d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
            data-v-04d1611e=""
          ></path>
          <line
            x1="6"
            y1="1"
            x2="6"
            y2="4"
            data-v-04d1611e=""
          ></line>
          <line
            x1="10"
            y1="1"
            x2="10"
            y2="4"
            data-v-04d1611e=""
          ></line>
          <line
            x1="14"
            y1="1"
            x2="14"
            y2="4"
            data-v-04d1611e=""
          ></line>
        </svg>

      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    getClasses(color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {};
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      };
    }
  }
};
</script>
