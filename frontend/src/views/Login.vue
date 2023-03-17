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
      <div class="font-bold my-4 text-3xl">Private FaaS</div>
    </div>
    <div class="bg-white my-4 px-10 py-6 rounded-lg shadow-md shadow-gray-300">
      <div class="font-bold mb-2 select-none text-gray-600">{{ t('common.password') }}</div>
      <input
        class="border border-gray-300 border-solid outline-none p-1 rounded-md shadow-sm shadow-gray-100 w-80 focus:border-gray-500"
        type="password"
        v-model="passwd"
      />
      <div class="flex justify-center my-4">
        <input type="checkbox" v-model="remember"/>
        <div class="font-bold ml-2 select-none text-gray-600">{{ t('common.rememberMe') }}</div>
      </div>
      <div class="flex justify-center">
        <button
          class="bg-green-500 py-1 font-bold rounded select-none text-white w-full hover:bg-green-600"
          @click="signIn"
        >{{ t('common.signIn') }}</button>
      </div>
    </div>
  </div>
</template>
