<script setup lang="ts">
//-- Prop Handling
const { noteContent } = defineProps(["noteContent"]);

//-- Emit Handling
const emit = defineEmits(["saveNote", "cancelNote"]);

//-- Add note
const addNote = () => {
  emit("saveNote");
};

//-- Cancel note
const cancelNote = () => {
  emit("cancelNote");
};
</script>

<template>
  <section
    class="absolute top-[50%] translate-y-[-50%] w-[100%] flex justify-center items-center px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] xxxl:px-[10rem] xxxxl:px-[20rem]"
  >
    <form
      @submit.prevent="addNote"
      class="w-[100%] flex flex-col gap-[1rem] bg-textLight p-[1rem] rounded-[10px] sm:gap-[1.5rem] sm:p-[1.75rem] md:w-[700px]"
    >
      <textarea
        class="h-[150px] bg-textLight p-[.75rem] font-[500] border-[1.5px] border-textSemiDark rounded-[3px]"
        v-model="noteContent.text"
        placeholder="Enter your note here..."
      />

      <div class="flex flex-col gap-[.5rem]">
        <button
          id="addButton"
          type="submit"
          class="w-[100%] py-[.25rem] font-[500] bg-green-600 text-textLight rounded-[3px] md:py-[.375rem] md:text-[1.125rem]"
        >
          Add Note
        </button>
        <button
          id="cancelButton"
          type="button"
          @click="cancelNote"
          class="w-[100%] py-[.25rem] font-[500] bg-red-700 text-textLight rounded-[3px] md:py-[.375rem] md:text-[1.125rem]"
        >
          Cancel
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
textarea {
  resize: none;
}

::placeholder {
  color: #606060;
}
</style>
