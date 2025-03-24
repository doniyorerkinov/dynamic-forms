<script setup lang="ts">
import Button from "@/components/Forms/Button.vue";
import Input from "@/components/Forms/Input.vue";
import Select from "@/components/Forms/Select.vue";
import CodeWrapper from "@/components/UI/CodeWrapper.vue";
import { ref } from "vue";

const codeButton = `
  <Button variant="primary" title="Click me">
    Click me
  </Button>
`;
const codeInput = `
  <Input
    v-model="inputValue"
    variant="primary"
    placeholder="Hello Dynamic Forms"
    label="Dynamic Forms"
    type="text"
  />
`;

const selectCode = `
  <Select
    v-model="selectedValue"
    :data="options"
    placeholder="Select option(s)"
    label="Choose option(s)"
    id="my-select"
    :multiple="true"
  />
`;

const inputValue = ref<string>("");
const selectedValue = ref<string | string[] | null>(null);
const options = [
  { text: "Option 1", value: "option1" },
  { text: "Option 2", value: "option2" },
  { text: "Option 3", value: "option3" },
];
</script>

<template>
  <div class="flex flex-col gap-6 w-full">
    <CodeWrapper title="Button" :code="codeButton">
      <div class="mt-4 w-full">
        <div class="flex gap-4">
          <span>Variants:</span>
          <span class="text-primary"> primary </span>
          <span class="text-green"> success </span>
          <span class="text-yellow"> warn </span>
          <span class="text-red"> danger </span>
          <span class=""> outlined </span>
        </div>
        <div class="flex gap-4 mt-4">
          <Button variant="primary" title="Click me" />
          <Button variant="success" title="Click me" />
          <Button variant="warn" title="Click me" />
          <Button variant="danger" title="Click me" />
          <Button variant="outlined" title="Click me" />
        </div>
      </div>
    </CodeWrapper>
    <hr />
    <CodeWrapper title="Input" :code="codeInput">
      <span class="mt-4"
        >Change type for all input types: text, password, radio, date, number
        etc...</span
      >
      <div class="mt-4 w-full">
        <Input
          v-model="inputValue"
          variant="primary"
          placeholder="Hello Dynamic Forms"
          label="Dynamic Forms"
          type="text"
        />
        <Input
          v-model="inputValue"
          variant="primary"
          placeholder="Hello Dynamic Forms"
          label="Dynamic Forms"
          type="checkbox"
        />
        <Input
          v-model="inputValue"
          variant="primary"
          placeholder="Hello Dynamic Forms"
          label="Dynamic Forms"
          type="color"
        />
        <Input
          v-model="inputValue"
          variant="primary"
          placeholder="Hello Dynamic Forms"
          label="Dynamic Forms"
          type="date"
        />
        <Input
          v-model="inputValue"
          variant="primary"
          placeholder="Hello Dynamic Forms"
          label="Dynamic Forms"
          type="radio"
        />
        <Input
          v-model="inputValue"
          variant="primary"
          placeholder="Hello Dynamic Forms"
          label="Dynamic Forms"
          type="search"
        />
        <!--  -->
      </div>
    </CodeWrapper>
    <hr />
    <CodeWrapper title="Custom Select" :code="selectCode" class="w-full flex">
      <Select
        class="mt-2"
        v-model="selectedValue"
        :data="options"
        placeholder="Select option(s)"
        label="Choose option(s)"
        id="my-select"
      />
      <div class="mb-8">
        It supports Variants: primary, success, warn, danger, outlined, and
        placeholder text, label, id, multiple, and data props.
      </div>
    </CodeWrapper>
    <div>I know I am awesome!!! 😎</div>
    <div>Feel free to contact me at https://t.me/DoniyorErkin</div>
  </div>
</template>
