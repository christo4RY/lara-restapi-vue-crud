import axios from "axios";
import { reactive, ref, defineEmits } from "vue";
import { useRoute, useRouter } from "vue-router";
const blogs = (datas, id) => {
    let rs_blogs = ref([]);
    let rs_blog = ref([]);
    let errors = ref("");
    let router = useRouter();
    const emit = defineEmits(["updateState"]);

    axios.defaults.baseURL = "http://localhost:8000/api/testing/";

    const allBlogs = async () => {
        const response = await axios.get("blogs");
        rs_blogs.value = response.data.data;
    };

    const newStoreBlog = async (datas) => {
        try {
            await axios.post("blogs", datas);
            await router.push({ name: "blogs" });
        } catch (error) {
            errors.value = error.response.data.errors;
        }
    };

    const showBlog = async (id) => {
        const response_only = await axios.get("blogs/" + id);
        rs_blog.value = response_only.data.data;
    };

    const updateBlog = async (datas, id) => {
        await axios.put("blogs/" + id, datas);
        allBlogs();
    };

    const deleteBlog = async (datas) => {
        await axios.delete("blogs/" + datas);
        allBlogs();
    };

    return {
        allBlogs,
        rs_blogs,
        rs_blog,
        errors,
        newStoreBlog,
        deleteBlog,
        updateBlog,
        showBlog,
    };
};

export default blogs;
