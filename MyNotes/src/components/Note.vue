<script setup lang="ts">
//--Prop Handling
const { note } = defineProps(["note"]);

//-- Emit Handling
const emit = defineEmits(["deleteNote"]);

//-- Delete note
const deleteNote = () => {
  emit("deleteNote", note.id);
};
</script>

<template>
  <section
    class="flex flex-col gap-[2rem] min-w-[250px] p-[.75rem] rounded-[10px] drop-shadow-lg xs:w-[300px] md:w-[350px] lg:p-[1rem]"
    :style="{ backgroundColor: note.color }"
  >
    <div class="lg:text-[1rem]">{{ note.text }}</div>
    <div class="flex justify-between items-center">
      <div class="text-[.875rem] font-[500]">
        {{ note.dateDay }}/{{ note.dateMonth }}/{{ note.dateYear }}
      </div>
      <font-awesome-icon
        id="deleteNoteButton"
        @click="deleteNote"
        :icon="['fas', 'trash-can']"
        class="cursor-pointer hover:scale-[115%] duration-[.2s] ease-in-out"
      />
    </div>
  </section>
</template>

<style scoped></style>
