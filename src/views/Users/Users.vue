<template>
  <div>
    <div v-if="users.length > 0">
      <div class="flex items-center justify-between">
        <h2 class="text-xl text-primary">Users</h2>
        <Button
          @click="isModalOpen = true"
          variant="success"
          title="Add User"
        />
      </div>
      <div class="grid grid-cols-2 gap-4 mt-4">
        <UserCard v-for="user in users" :key="user.id" :user />
      </div>
    </div>
    <div v-else>
      <p>No users available.</p>
    </div>
    <Modal
      :isOpen="isModalOpen"
      @update:isOpen="isModalOpen = $event"
      title="Example Modal"
      :closeOnOutsideClick="false"
    >
      <!-- Content of the modal -->
      <div class="px-2">
        <FormGenerator :fields="Fields" :showFooter="false"> </FormGenerator>
      </div>

      <!-- Footer Slot -->
      <template #footer>
        <div class="w-full flex justify-between">
          <Button @click="Close" title="Cancel" variant="danger" />
          <Button @click="Submit" title="Confirm" variant="success" />
        </div>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { usersComposible } from "@/composibles/usersComposible";
import { useDataComposible } from "@/composibles/useDataComposible";
import UserCard from "@/components/UI/UserCard.vue";
import Modal from "@/components/UI/Modal.vue";
import { reactive, ref } from "vue";
import Button from "@/components/Forms/Button.vue";
import FormGenerator from "@/components/Forms/FormGenerator.vue";
import type { IFormFields, IUser } from "@/interfaces";

const { users, initUsers } = usersComposible();
const { companies, regions } = useDataComposible();
const isModalOpen = ref<boolean>(false);
initUsers();

const initialFields: IFormFields[] = [
  {
    type: "input",
    name: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
    id: "firstName",
    value: "",
    class: "w-full",
    isCustom: false,
  },
  {
    type: "input",
    name: "lastName",
    label: "Last Name",
    placeholder: "Enter your last name",
    id: "lastName",
    value: "",
    class: "w-full",
    isCustom: false,
  },
  {
    type: "input",
    name: "birthDate",
    label: "Birthdate",
    placeholder: "",
    id: "birthDate",
    value: "",
    class: "w-full",
    isCustom: false,
    inputType: "date",
  },
  {
    type: "input",
    name: "email",
    label: "E-mail",
    placeholder: "example@mail.com",
    id: "email",
    value: "",
    class: "w-full",
    isCustom: false,
    inputType: "email",
  },
  {
    type: "input",
    name: "age",
    label: "Age",
    placeholder: "Enter your age",
    id: "age",
    value: null,
    class: "w-full",
    isCustom: false,
    inputType: "number",
  },
  {
    type: "select",
    name: "location",
    label: "Location",
    placeholder: "Choose your location",
    id: "location",
    value: null,
    class: "w-full",
    isCustom: false,
    options: regions.value,
  },
  {
    type: "input",
    name: "status",
    label: "Family status, Is Married:",
    placeholder: "",
    id: "status",
    value: false,
    class: "",
    isCustom: false,
    inputType: "checkbox",
  },
  {
    type: "input",
    name: "isEmployed",
    label: "Is Employed:",
    placeholder: "",
    id: "isEmployed",
    value: false,
    class: "",
    isCustom: false,
    inputType: "checkbox",
  },
  {
    type: "select",
    name: "companyId",
    label: "Company",
    placeholder: "",
    id: "companyId",
    value: null,
    class: "",
    isCustom: false,
    options: companies.value,
  },
  {
    type: "input",
    name: "position",
    label: "Position",
    placeholder: "Enter your position",
    id: "position",
    value: "",
    class: "",
    isCustom: false,
    inputType: "text",
  },
  {
    type: "input",
    name: "hasCar",
    label: "Has Car:",
    placeholder: "",
    id: "hasCar",
    value: false,
    class: "",
    isCustom: false,
    inputType: "checkbox",
  },
  {
    type: "input",
    name: "hasHouse",
    label: "Has House:",
    placeholder: "",
    id: "hasHouse",
    value: false,
    class: "",
    isCustom: false,
    inputType: "checkbox",
  },
  {
    type: "input",
    name: "isStudent",
    label: "Is Student:",
    placeholder: "",
    id: "isStudent",
    value: false,
    class: "",
    isCustom: false,
    inputType: "checkbox",
  },
  {
    type: "input",
    name: "debt",
    label: "Debt",
    placeholder: "",
    id: "debt",
    value: false,
    class: "",
    isCustom: false,
    inputType: "number",
  },
  {
    type: "input",
    name: "credit",
    label: "Credit",
    placeholder: "",
    id: "credit",
    value: false,
    class: "",
    isCustom: false,
    inputType: "number",
  },
];

const Fields = reactive<IFormFields[]>(
  JSON.parse(JSON.stringify(initialFields))
);
const initialFieldValues = JSON.parse(JSON.stringify(initialFields));

const Submit = () => {
  // Create a new user object from form fields
  const newUser: IUser = {
    id:
      users.value.length > 0
        ? Math.max(...users.value.map((u) => u.id)) + 1
        : 1,
    fullName: `${Fields.find((f) => f.name === "firstName")?.value} ${
      Fields.find((f) => f.name === "lastName")?.value
    }`,
    firstName: Fields.find((f) => f.name === "firstName")?.value as string,
    lastName: Fields.find((f) => f.name === "lastName")?.value as string,
    birthDate: Fields.find((f) => f.name === "birthDate")?.value as string,
    email: Fields.find((f) => f.name === "email")?.value as string,
    age: Number(Fields.find((f) => f.name === "age")?.value),
    isMarried: Boolean(Fields.find((f) => f.name === "status")?.value),
    companyId: Number(Fields.find((f) => f.name === "companyId")?.value),
    company:
      companies.value.find(
        (c) => c.value === Fields.find((f) => f.name === "companyId")?.value
      )?.text || "",
    companyLocation:
      regions.value.find(
        (r) => r.value === Fields.find((f) => f.name === "location")?.value
      )?.text || "",
    locationId: Number(Fields.find((f) => f.name === "location")?.value),
    location:
      regions.value.find(
        (r) => r.value === Fields.find((f) => f.name === "location")?.value
      )?.text || "",
    salary: Number(Fields.find((f) => f.name === "salary")?.value),
    position: String(Fields.find((f) => f.name === "position")?.value),
    isRemote: Boolean(Fields.find((f) => f.name === "isRemote")?.value),
    isFullTime: Boolean(Fields.find((f) => f.name === "isFullTime")?.value),
    hasCar: Boolean(Fields.find((f) => f.name === "hasCar")?.value),
    hasHouse: Boolean(Fields.find((f) => f.name === "hasHouse")?.value),
    debt: Number(Fields.find((f) => f.name === "debt")?.value),
    credit: Number(Fields.find((f) => f.name === "credit")?.value),
    isStudent: Boolean(Fields.find((f) => f.name === "isStudent")?.value),
    isEmployed: Boolean(Fields.find((f) => f.name === "isEmployed")?.value),
  };

  // Add the new user to the users array
  const updatedUsers = [...users.value, newUser];

  // Update the reactive users
  users.value = updatedUsers;

  // Update localStorage
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  // Close the modal and reset the form
  Close();
};
const Close = () => {
  // Reset each field to its initial value
  Fields.forEach((field, index) => {
    if (initialFieldValues[index]) {
      field.value = initialFieldValues[index].value;
    }
  });
  isModalOpen.value = false;
};
</script>
