<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center z-50"
  >
    <!-- Modal Overlay -->
    <div
      class="fixed inset-0 bg-gray-500 opacity-40"
      @click="handleOutSideClick"
    ></div>

    <!-- Modal Content -->
    <div
      class="modal-content bg-white rounded-lg shadow-lg max-h-[90vh] w-96 z-[9998]"
    >
      <!-- Modal Header -->
      <div class="modal-header flex items-center justify-between p-4 border-b">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <button
          @click="handleClose"
          class="text-gray-500 hover:text-gray-800 focus:outline-none"
        >
          &times;
        </button>
      </div>

      <!-- Modal Body (Content Slot) -->
      <div class="modal-body overflow-y-auto p-4 flex-1">
        <slot></slot>
      </div>

      <!-- Modal Footer (Optional Slot) -->
      <div v-if="$slots.footer" class="modal-footer p-4 border-t">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  closeOnOutsideClick: {
    type: Boolean,
    default: true,
  },
});
const emits = defineEmits(["update:isOpen"]);
const handleClose = () => {
  emits("update:isOpen", false);
};

const handleOutSideClick = () => {
  if (props.closeOnOutsideClick) {
    emits("update:isOpen", false);
  }
};
</script>

<style scoped>
.modal-content {
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
}

.modal-header {
  background-color: #fff;
  z-index: 9999;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  border-bottom: 1px solid #ddd;
  z-index: 1;
}

.modal-footer {
  background-color: #f1f1f1;
  padding: 16px;
  border-top: 1px solid #ddd;
  z-index: 1;
}

.modal-body {
  padding: 16px;
  overflow-y: auto;
  flex-grow: 1;
}

.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
