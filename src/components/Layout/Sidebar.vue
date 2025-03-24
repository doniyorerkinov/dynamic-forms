<template>
  <div class="h-full bg-primary text-white w-[200px] p-5">
    <RouterLink to="/">Dynamic Forms</RouterLink>
    <div class="mt-6 w-full flex flex-col gap-4">
      <div class="w-full" v-for="menu in menus" :key="menu.link">
        <div
          @click="goLink(menu.link)"
          :class="{
            '!bg-secondary-light !text-primary rounded-sm tracking-widest transition-colors delay-300':
              route.path === menu.link,
          }"
          class="font-normal text-base text-secondary-light px-2 py-1 w-full hover:bg-secondary-light hover:text-primary rounded-sm tracking-widest transition-colors delay-100 cursor-pointer"
        >
          {{ menu.label }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { menus } from "./menus";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const goLink = (link: string) => {
  router.push(link);
};
</script>
