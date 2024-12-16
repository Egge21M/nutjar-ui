export function createStyle() {
  const style = document.createElement("style");
  style.textContent = `

@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

nutjar-ui {
  --nutjar-modal-background: blue;
}

#nutjar--action-open {
  padding: 0.6em 1em 0.6em 1em;
  font-size: var(--nutjar-button-size, 1em);
  flex-direction: row;
  background: var(--nutjar-button-background, #6b21a8);
  border-radius: 0.3em;
  color: var(--nutjar-button-text, #fafafa);
  border: none;
}

#nutjar--action-open:hover {
  background: var(--nutjar-button-hover, #9333ea);
  cursor: pointer;
}

#nutjar--modal-container {
  border-radius: 0.3em;
  border: none;
  background-color: var(--nutjar-modal-background, #262626);
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  color: var(--nutjar-modal-text, #fafafa);
  font-family: "Inter", sans-serif;
}

#nutjar--modal-container input {
  padding: 1em;
  font-family: "Inter";
  color: var(--nutjar-modal-input-text, #fafafa);
  background-color: var(--nutjar-modal-input-background, #171717);
  border: none;
  outline: none;
  border-radius: 0.3em;
  margin: none;
}

#nutjar--modal-input-container {
  display: flex;
  flex-direction: row;
  color: var(--nutjar-modal-input-text, #fafafa);
  gap: 1em;
  align-items: center;
  padding-right: 1em;
  background-color: var(--nutjar-modal-input-background, #171717);
}

#nutjar--modal-container h2 {
  margin: 0;
}

#nutjar--modal-container::backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}

#nutjar--modal-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 0.5em;
}

#nutjar--modal-button {
  background-color: var(--nutjar-modal-button-background, #171717);
  font-family: "Inter";
  font-weight: bold;
  border: none;
  color: white;
  padding: 0.6em 1em 0.6em 1em;
  border-radius: 0.3em;
  cursor: pointer;
}

#nutjar--modal-button:hover {
  background-color: var(--nutjar-modal-button-hover, #404040);
  transition: 200ms;
}

#nutjar--modal-invoice-container {
  position: relative;
  background-color: white;
  border-radius: 0.3em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

#nutjar--modal-invoice-container > button {
  border: none;
  padding: 0.6em 1em 0.6em 1em;
  background-color: var(--nutjar-modal-button-background, #171717);
  color: white;
  cursor: pointer;
}

#nutjar--modal-invoice-container > button:hover {
  background-color: var(--nutjar-modal-button-hover, #404040);
}

#nutjar--modal-invoice-success-box {
  inset: 0;
  position: absolute;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.8);
}
 `;

  return style;
}
