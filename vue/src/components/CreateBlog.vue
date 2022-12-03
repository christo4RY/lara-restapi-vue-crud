<template>
  <div class="w-50 mx-auto mt-2">
    <h1 class="text-primary text-center mb-4">New Blog</h1>
    <form @submit.prevent="" class="w-75 mx-auto">
      <div class="mb-3">
        <label for="">New Title</label>
        <input
          type="text"
          class="form-control mt-3"
          v-model="title"
          placeholder="new title"
        />
      </div>
      <div class="mb-3">
        <label for="">New Slug</label>
        <input
          type="text"
          class="form-control mt-3"
          v-model="slug"
          placeholder="new slug"
        />
      </div>
      <div v-if="errors.slug">
        <p class="mt-2 text-danger">{{ errors.slug }}</p>
      </div>
      <div class="mb-3">
        <label for="">New Description</label>
        <textarea
          name=""
          v-model="description"
          id=""
          cols="30"
          rows="3"
          class="form-control mt-3"
          placeholder=" new description"
        ></textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button class="btn btn-primary text-white" @click="storeData">
          New Blog
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import blogs from "../composables/blogs";
const { newStoreBlog, errors } = blogs();
let title = ref("");
let slug = ref("");
let description = ref("");
let storeData = async () => {
  const newDatas = {
    title: title.value,
    slug: slug.value,
    description: description.value,
  };
  await newStoreBlog(newDatas);
};
</script>

<style>
</style>
