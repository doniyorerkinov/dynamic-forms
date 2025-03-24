<template>
  <div
    class="grid grid-cols-2 gap-2 border border-secondary-light rounded-lg p-4 bg-white shadow"
    v-show="user"
  >
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Fullname:
      </span>
      <span class="text-secondary">{{ user.fullName }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Birthdate:
      </span>
      <span class="text-secondary">{{ user.birthDate }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Location:
      </span>
      <span class="text-secondary">{{ user.location }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Company:
      </span>
      <span class="text-secondary">{{ user.company }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Position:
      </span>
      <span class="text-secondary">{{ user.position }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Salary:
      </span>
      <span class="text-secondary">{{
        Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(user.salary)
      }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Work Location:
      </span>
      <span class="text-secondary">{{
        user.isRemote ? "remote" : user.companyLocation
      }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Work Type:
      </span>
      <span class="text-secondary">{{
        user.isFullTime ? "Full-time" : "Part-time"
      }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base">Debt: </span>
      <span class="text-secondary">{{
        user.debt
          ? Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(user.debt)
          : "No debt"
      }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Credit:
      </span>
      <span class="text-secondary">{{
        user.debt
          ? Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(user.credit)
          : "No credit"
      }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Student:
      </span>
      <span class="text-secondary">{{ user.isStudent ? "Yes" : "No" }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Married:
      </span>
      <span class="text-secondary">{{ user.isMarried ? "Yes" : "No" }}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-black font-medium tracking-wide text-base"
        >Employed:
      </span>
      <span class="text-secondary">{{ user.isEmployed ? "Yes" : "No" }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IUser } from "@/interfaces";

interface IProps {
  user: IUser;
}
defineProps<IProps>();
</script>
