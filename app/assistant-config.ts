export let assistantId = "asst_1SJMrw4fJhuizmqJbVsNO3gL"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
