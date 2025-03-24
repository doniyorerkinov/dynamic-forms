<template>
  <form @submit.prevent="submitForm" class="flex flex-col gap-4">
    <div v-for="(field, index) in fields" :key="index" class="form-group">
      <div class="" v-if="field.type === 'input'">
        <Input
          v-if="!field.isCustom"
          v-model="field.value"
          :type="field.inputType || 'text'"
          :placeholder="field.placeholder"
          :id="field.id"
          :label="field.label"
          :class="['form-control', field.class]"
        />
        <slot :name="field.name"></slot>
      </div>
      <div class="" v-if="field.type === 'select'">
        <Select
          v-if="!field.isCustom"
          :data="field.options || []"
          :placeholder="field.placeholder"
          :label="field.label"
          v-model="field.value"
          :id="field.id"
          :class="['form-control', field.class]"
        >
        </Select>
        <slot :name="field.name"></slot>
      </div>
      <div v-if="field.type === 'button'">
        <button
          type="button"
          @click="handleButtonClick(field.name)"
          class="btn btn-primary"
        >
          {{ field.label }}
        </button>
        <slot :name="field.name"></slot>
      </div>
    </div>

    <!-- Footer Section (buttons for submit or cancel) -->
    <div v-if="showFooter" class="form-footer">
      <button type="submit" class="btn btn-success">Save</button>
      <button type="button" @click="cancelForm" class="btn btn-danger">
        Cancel
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import Select from "./Select.vue";
import type { IFormFields } from "@/interfaces";
import Input from "./Input.vue";

interface IProps {
  fields: IFormFields[];
  initialData?: Record<string, any>;
  showFooter: boolean;
}

// Props to accept the form fields and existing data
const props = defineProps<IProps>();

// Emitting events on form actions
const emit = defineEmits(["submitForm", "cancelForm"]);

// Two-way data binding for form input values
const formData = ref({ ...props.initialData });

// Handle form submission
const submitForm = () => {
  emit("submitForm", formData.value);
};

// Handle form cancellation
const cancelForm = () => {
  emit("cancelForm");
};

// Button click handler (for custom buttons in the form)
const handleButtonClick = (buttonName: string) => {
  console.log(`${buttonName} clicked`);
};
</script>

<style scoped>
.form-control {
  width: 100%;
}

.form-footer {
  display: flex;
  justify-content: space-between;
}
</style>
