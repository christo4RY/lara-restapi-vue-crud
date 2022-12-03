<script setup>
import { onMounted, onUpdated, reactive, ref } from "@vue/runtime-core";
import blogs from "../composables/blogs";

const { allBlogs, rs_blogs, rs_blog, deleteBlog, updateBlog, showBlog } =
  blogs();
onMounted(async () => {
  allBlogs();
});

const show_Blog = async (id) => {
  showBlog(id);
};
</script>
<template>
  <h1 class="text-primary my-2">Blogs</h1>
  <div class="d-flex justify-content-end me-5 mt-3">
    <router-link to="/new-blog" class="btn btn-success">New Blog</router-link>
  </div>
  <table class="table table-hover text-center">
    <thead>
      <tr>
        <th>Title</th>
        <th>Slug</th>
        <th>Description</th>
        <th>Option</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="blog in rs_blogs" :key="blog.slug">
        <td>{{ blog.title }}</td>
        <td>{{ blog.slug }}</td>
        <td>{{ blog.description }}</td>
        <td>
          <button
            class="btn btn-warning me-2"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            @click="show_Blog(blog.id)"
          >
            Edit
          </button>
          <button class="btn btn-danger" @click="deleteBlog(blog.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">
            Edit {{ rs_blog.title }}
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="">
            <div class="mb-3">
              <label for="">Edit Title</label>
              <input
                type="text"
                class="form-control mt-3"
                v-model="rs_blog.title"
                placeholder="Edit title"
              />
            </div>
            <div class="mb-3">
              <label for="">Edit Slug</label>
              <input
                type="text"
                class="form-control mt-3"
                v-model="rs_blog.slug"
                placeholder="Edit slug"
              />
            </div>
            <div class="mb-3">
              <label for="">Edit Description</label>
              <textarea
                name=""
                v-model="rs_blog.description"
                id=""
                cols="30"
                rows="3"
                class="form-control mt-3"
                placeholder=" Edit description"
              ></textarea>
            </div>
          </form>
        </div>
        {{ closeUp }}
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            data-bs-dismiss="modal"
            type="button"
            class="btn btn-primary"
            @click="
              updateBlog(
                {
                  title: rs_blog.title,
                  slug: rs_blog.slug,
                  description: rs_blog.description,
                },
                rs_blog.id
              )
            "
          >
            Update
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
</style>
