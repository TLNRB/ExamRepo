import { defineStore } from "pinia";
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase.js";

const notesCollectionRef = collection(db, "notes");

type NoteId = string | number;

interface Note {
  id: NoteId;
  text: string;
  dateDay: number;
  dateMonth: number;
  dateYear: number;
  color: string;
}

interface NotesState {
  notes: Note[];
}

export const useStoreNotes = defineStore("storeNotes", {
  state: (): NotesState => {
    return {
      notes: [],
    };
  },

  actions: {
    // Get Notes
    async getNotes() {
      const unsubscribe = onSnapshot(
        notesCollectionRef,
        (querySnapshot: any) => {
          let notes: Note[] = [];
          querySnapshot.forEach((doc: any) => {
            let note: Note = {
              id: doc.id,
              text: doc.data().text,
              dateDay: doc.data().dateDay,
              dateMonth: doc.data().dateMonth,
              dateYear: doc.data().dateYear,
              color: doc.data().color,
            };
            notes.push(note);
          });
          this.notes = notes;
        }
      );
    },
    // Add Notes
    async addNotes(noteContent: Note) {
      await addDoc(notesCollectionRef, {
        text: noteContent.text,
        dateDay: noteContent.dateDay,
        dateMonth: noteContent.dateMonth,
        dateYear: noteContent.dateYear,
        color: noteContent.color,
      });
    },
    // Delete Notes
    async deleteNote(id: string) {
      await deleteDoc(doc(notesCollectionRef, id));
    },
  },
});
