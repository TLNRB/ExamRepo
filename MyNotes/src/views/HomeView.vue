<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
/*----- Impor Components -----*/
import Note from "@/components/Note.vue";
import DeleteNote from "@/components/DeleteNote.vue";
import AddNote from "@/components/AddNote.vue";
/*----- Store Handling -----*/
import { useStoreNotes } from "../stores/storeNotes";
const storeNotes = useStoreNotes();

/*===== Note handling =====*/
interface Note {
  id: string;
  text: string;
  dateDay: number;
  dateMonth: number;
  dateYear: number;
  color: string;
}

//-- Data binding
const noteContent: Note = reactive({
  id: "",
  text: "",
  dateDay: 0,
  dateMonth: 0,
  dateYear: 0,
  color: "",
});

//-- Value Clear
const valueClear = (): void => {
  noteContent.id = "";
  noteContent.text = "";
  noteContent.dateDay = 0;
  noteContent.dateMonth = 0;
  noteContent.dateYear = 0;
  noteContent.color = "";
};

//-- Get random color
function getRandomColor(): string {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

//-- Add note
const addNoteModal = ref(false);

const openAddNoteModal = (): void => {
  addNoteModal.value = true;
};
const closeAddNoteModal = (): void => {
  addNoteModal.value = false;
  valueClear();
};

const addNote = (): void => {
  const curentdate = new Date();
  noteContent.id = "";
  (noteContent.dateDay = curentdate.getDate()),
    (noteContent.dateMonth = curentdate.getMonth() + 1),
    (noteContent.dateYear = curentdate.getFullYear()),
    (noteContent.color = getRandomColor()),
    storeNotes.addNotes(noteContent);
  closeAddNoteModal();
};

//-- Delete note
const deleteNoteModal = ref(false);
let deleteNoteTempID: string = "";

const openDeleteNoteModal = (id: string): void => {
  deleteNoteModal.value = true;
  deleteNoteTempID = id;
};

const closeDeleteNoteModal = (): void => {
  deleteNoteModal.value = false;
  deleteNoteTempID = "";
};

const deleteNote = (): void => {
  storeNotes.deleteNote(deleteNoteTempID);
  closeDeleteNoteModal();
};

onMounted(() => {});
</script>

<template>
  <header
    class="my-[2rem] flex flex-col gap-[1.5rem] justify-center items-center w-[100%] px-[1rem] xs:flex-row xs:justify-between sm:px-[2rem] md:px-[4rem] lg:px-[6rem] lg:my-[3rem] xl:px-[8rem] xxxl:px-[10rem] xxxxl:px-[20rem]"
  >
    <h1
      class="text-[2.5rem] font-bold text-textSemiDark drop-shadow-md sm:text-[3rem] lg:text-[4rem] xxxl:text-[5rem]"
    >
      My Notes
    </h1>
    <div
      @click="openAddNoteModal"
      class="w-[40px] h-[40px] flex justify-center items-center bg-textDark text-textLight text-[1rem] font-regular rounded-full drop-shadow-md cursor-pointer hover:scale-[115%] duration-[.2s] ease-in-out xxxl:w-[50px] xxxl:h-[50px] xxxl:text-[1.125rem]"
    >
      +
    </div>
  </header>
  <main
    class="my-[4rem] flex flex-wrap gap-[1rem] justify-center items-center px-[1rem] sm:px-[2rem] md:px-[4rem] lg:px-[6rem] lg:my-[6rem] xl:px-[8rem] xxxl:px-[10rem] xxxxl:px-[20rem]"
  >
    <Note
      v-for="note in storeNotes.notes"
      :key="note.id"
      :note="note"
      @deleteNote="openDeleteNoteModal"
    />
    <div
      v-if="addNoteModal"
      class="h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 bottom-0 bg-bgModalOverlay"
    >
      <AddNote
        :noteContent="noteContent"
        @saveNote="addNote"
        @cancelNote="closeAddNoteModal"
      />
    </div>
    <div
      v-if="deleteNoteModal"
      class="h-[100%] w-[100%] z-[15] fixed top-0 left-0 right-0 bottom-0 bg-bgModalOverlay"
    >
      <DeleteNote @deleteNote="deleteNote" @cancelNote="closeDeleteNoteModal" />
    </div>
  </main>
</template>

<style scoped></style>
