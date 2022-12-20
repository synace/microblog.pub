import { createPicker } from 'https://cdn.jsdelivr.net/npm/picmo@5.7.2/dist/index.js';
import emojiData from 'https://cdn.jsdelivr.net/npm/emojibase-data@7.0.1/en/data.json' assert { type: "json" };
import messages from 'https://cdn.jsdelivr.net/npm/emojibase-data@7.0.1/en/messages.json' assert { type: "json" };

const pickerContainer = document.createElement("div");

const newTextArea = document.getElementsByTagName("textarea")[0];

newTextArea.parentNode.insertBefore(pickerContainer, newTextArea.nextSibling);

const picker = createPicker({
  rootElement: pickerContainer,
  emojiData,
  messages
});

picker.addEventListener('emoji:select', event => {
  newTextArea.focus();
  document.execCommand("insertText", false, event.emoji);
});
