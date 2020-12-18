<template>
  <form @submit.prevent="validateBeforeSubmit">
    <h2 class="mt-5 text-3xl font-extrabold leading-9 text-center text-theme">
     Sign in
    </h2>

    <div class="mt-8 rounded-md shadow-sm">
      <div class="my-4">
        <sw-input-group label="Email">
            <sw-input v-model="loginData.email" type="email"/>
        </sw-input-group>
      </div>

      <div class="my-4">
        <sw-input-group
            label="Password"
            class="mt-5 md:mt-0"
        >
            <sw-input
                v-model="loginData.password"
                label="Password"
                type="password"
                tab-index="2"
            />
        </sw-input-group>
      </div>
    </div>
    <div class="flex justify-end mt-6">
      <sw-button
        type="submit"
        variant="primary"
      >
        Login In
      </sw-button>
    </div>
  </form>
</template>

<script>


export default {
  data() {
    return {
      loginData: {
        email: '',
        password: '',
        remember_me: false,
      },
      isLoading: false,
    }
  },
  methods: {
    validateBeforeSubmit() {
        let self = this
        window.axios.get('/sanctum/csrf-cookie').then((response) => {
            window.axios
                .post('/login', self.loginData)
                .then((response) => {
                    self.$router.push('/admin')
                })
                .catch((err) => {
                    console.log(err);
                })
        })
    },
  },
}
</script>
