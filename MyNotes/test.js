import { Selector } from "testcafe";

fixture`MyNotes test`.page("http://localhost:5173/");

test("Create new note", async (t) => {
  await t
    // Assert that there is no note
    .expect(Selector("#app > main > section").count)
    .eql(0)
    // Press the button to add to do
    .click(Selector("#addNoteButton"))
    // Focus textarea
    .click(Selector("#app > main > div > section > form > textarea"))
    // Type text
    .typeText(
      Selector("#app > main > div > section > form > textarea"),
      "New note"
    )
    // Add the new note
    .click(Selector("#addButton"))
    // Assert that there is one note
    .expect(Selector("#app > main > section").count)
    .eql(1);
});

test("Delete note", async (t) => {
  await t
    // Wait a second
    .wait(1000)
    // Assert that there is no note
    .expect(Selector("#app > main > section").count)
    .eql(0)
    // Press the button to add a note
    .click(Selector("#addNoteButton"))
    // Focus textarea
    .click(Selector("#app > main > div > section > form > textarea"))
    // Type text
    .typeText(
      Selector("#app > main > div > section > form > textarea"),
      "Delete this note."
    )
    // Add the new note
    .click(Selector("#addButton"))
    // Assert that there is one note
    .expect(Selector("#app > main > section").count)
    .eql(1)
    // Press the button to delete the note
    .click(Selector("#deleteNoteButton"))
    // Confirm the deletion
    .click(Selector("#yesButton"))
    // Assert that there is no note
    .expect(Selector("#app > main > section").count)
    .eql(0);
});
