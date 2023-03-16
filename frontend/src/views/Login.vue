<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// Get i18n function
const { t } = useI18n()

// Change title
document.title = t('title.login')

// Reactive
const passwd = ref("")
const remember = ref(false)

// Actions
const signIn = ()=>{
  alert(passwd.value)
}
</script>

<template>
  <div class="flex flex-col items-center my-20">
    <div class="flex flex-col items-center select-none">
      <img class="w-20" src="/private_faas_logo.svg"/>
      <div class="font-bold text-3xl my-4">Private FaaS</div>
    </div>
    <div class="bg-white rounded-lg shadow-md shadow-gray-300 my-4 px-10 py-6">
      <div class="font-bold text-gray-600 mb-2 select-none">{{ t('common.password') }}</div>
      <input
        class="border-solid border-gray-300 border rounded-md shadow-sm shadow-gray-100 p-1 outline-none w-80 focus:border-gray-500"
        type="password"
        v-model="passwd"
      />
      <div class="flex justify-center my-4">
        <input type="checkbox" v-model="remember"/>
        <div class="font-bold text-gray-600 ml-2 select-none">{{ t('common.rememberMe') }}</div>
      </div>
      <div class="flex justify-center">
        <button
          class="font-bold text-white bg-green-500 rounded py-1 w-full select-none hover:bg-green-600"
          @click="signIn"
        >{{ t('common.signIn') }}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
