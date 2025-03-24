<template>
  <div class="flex flex-col w-full">
    <h2 class="text-lg font-semibold text-gray-800">{{ props.title }}</h2>
    <div class="relative mt-2">
      <div
        @click="copy"
        class="absolute top-2 right-2 p-1 bg-gray-800 text-white text-xs rounded-bl-lg rounded-tl-lg cursor-pointer"
      >
        Click Me
      </div>
      <pre
        class="bg-gray-800 rounded-lg text-white text-sm"
      ><code>{{ props.code }}</code>
        </pre>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
interface CodeWrapperProps {
  title: string;
  code: string;
}
const props = withDefaults(defineProps<CodeWrapperProps>(), {
  title: "Code",
  code: "",
});

const copy = () => {
  navigator.clipboard.writeText(props.code);
  alert("Copied to clipboard!");
};
</script>
