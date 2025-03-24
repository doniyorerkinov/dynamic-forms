<template>
  <div
    class="input-wrapper"
    :class="
      $attrs.type == 'checkbox' || $attrs.type == 'radio'
        ? 'flex gap-2 items-center'
        : ''
    "
  >
    <!-- Render label if provided -->
    <label :for="id" v-if="label" class="block mb-1 font-medium text-sm">{{
      label
    }}</label>
    <div class="relative">
      <!-- Left icon slot (positioned absolutely) -->
      <div
        v-if="hasIconLeft"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <slot name="icon-left"></slot>
      </div>
      <input
        :class="[
          'input',
          variantClass,
          { 'pl-10': hasIconLeft, 'pr-10': hasIconRight },
        ]"
        :value="modelValue"
        @input="onInput"
        v-bind="$attrs"
        :placeholder="placeholder"
        :id="id"
      />
      <!-- Right icon slot (positioned absolutely) -->
      <div
        v-if="hasIconRight"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <slot name="icon-right"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, withDefaults, useSlots } from "vue";

interface Props {
  modelValue: (string | number) | (string | number)[] | null | boolean;
  placeholder?: string;
  variant?: "primary" | "success" | "warn" | "danger" | "outlined";
  label?: string;
  id?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  placeholder: "Placeholder",
  label: "",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// Access the slots to conditionally adjust padding if icons are provided
const slots = useSlots();
const hasIconLeft = computed(() => !!slots["icon-left"]);
const hasIconRight = computed(() => !!slots["icon-right"]);

// Compute dynamic border classes based on the variant prop
const variantClass = computed(() => {
  switch (props.variant) {
    case "primary":
      return "border-2 border-primary focus:border-indigo";
    case "success":
      return "border-2 border-green focus:border-green";
    case "warn":
      return "border-2 border-yellow focus:border-yellow";
    case "danger":
      return "border-2 border-red focus:border-red";
    case "outlined":
      return "border-2 border-primary focus:border-primary";
    default:
      return "";
  }
});

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<style scoped>
@reference "../../style.css";
.input {
  @apply px-2 py-1 text-sm rounded focus:outline-none transition-colors duration-300;
}
</style>
