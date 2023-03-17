<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { useI18n } from 'vue-i18n'

// Get i18n function
const { t } = useI18n()

// Get router
const route = useRoute()
const router = useRouter()
onBeforeRouteUpdate((to) => {
  currentRoute.value = to.name
})

// Change title
document.title = t('title.default')

// Reactive
const currentRoute = ref(route.name)

// Computed
const overviewClass = computed(() => ({
  side_btn_current: currentRoute.value === 'overview'
}))
const instancesClass = computed(() => ({
  side_btn_current: currentRoute.value === 'instances'
}))
const trafficClass = computed(() => ({
  side_btn_current: currentRoute.value === 'traffic'
}))
const settingsClass = computed(() => ({
  side_btn_current: currentRoute.value === 'settings'
}))

// Actions
const routerTo = (name)=>{
  router.push({ name })
}
</script>

<template>
  <div class="flex h-full w-full">
    <aside class="bg-white flex flex-col items-center shadow-md shadow-gray-400">
      <div class="flex items-center mx-8 my-4 select-none">
        <img class="w-10" src="/private_faas_logo.svg"/>
        <div class="font-bold text-xl ml-4">Private FaaS</div>
      </div>
      <div class="side_btn" :class="overviewClass" @click="routerTo('overview')">{{ t('section.overview') }}</div>
      <div class="side_btn" :class="instancesClass" @click="routerTo('instances')">{{ t('section.instances') }}</div>
      <div class="side_btn" :class="trafficClass" @click="routerTo('traffic')">{{ t('section.traffic') }}</div>
      <div class="side_btn" :class="settingsClass" @click="routerTo('settings')">{{ t('section.settings') }}</div>
    </aside>
    <router-view/>
  </div>
</template>

<style lang="postcss" scoped>
.side_btn {
  @apply cursor-pointer font-bold my-4 py-4 select-none text-center text-lg w-full
}

.side_btn:not(.side_btn_current) {
  @apply bg-white duration-200 transition hover:bg-green-100
}

.side_btn_current {
  @apply bg-green-300
}
</style>
