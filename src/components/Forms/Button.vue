<template>
  <button
    :class="[
      'px-2 py-1 rounded inline-flex items-center transition-colors duration-300 cursor-pointer',
      variantClass,
    ]"
    v-bind="$attrs"
  >
    <!-- Left icon slot -->
    <slot name="icon-left"></slot>
    <!-- Button title -->
    <span class="mx-2">{{ title }}</span>
    <!-- Right icon slot -->
    <slot name="icon-right"></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, withDefaults } from "vue";

interface Props {
  title: string;
  variant?: "primary" | "success" | "warn" | "danger" | "outlined";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
});

const variantClass = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary hover:bg-indigo text-white";
    case "success":
      return "bg-green hover:brightness-90 text-white";
    case "warn":
      return "bg-yellow hover:brightness-90 text-black";
    case "danger":
      return "bg-red hover:brightness-90 text-white";
    case "outlined":
      return "border border-[var(--color-primary)] text-primary hover:bg-primary hover:text-white";
    default:
      return "";
  }
});
</script>
