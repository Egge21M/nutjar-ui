export function createStyle() {
  const style = document.createElement("style");
  style.textContent = `

@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");


#nutjar--action-open {
  padding: 0.6em 1em 0.6em 1em;
  font-size: var(--nutjar-button-size, 1em);
  flex-direction: row;
  background: var(--nutjar-button-background, #6b21a8);
  border-radius: 0.3em;
  color: var(--nutjar-button-text, #fafafa);
  border: none;
  cursor: pointer;
}

.nutjar-theme-light#nutjar--action-open {
  background: var(--nutjar-button-background, #fafafa);
  color: var(--nutjar-button-text, #171717);
}

.nutjar-theme-dark#nutjar--action-open {
  background: var(--nutjar-button-background, #6b21a8);
  color: var(--nutjar-button-text, #fafafa);
}


#nutjar--action-open:hover {
  background: var(--nutjar-button-hover, #9333ea);
}

#nutjar--modal-container {
  border-radius: 0.3em;
  border: none;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  font-family: "Inter", sans-serif;
}

#nutjar--modal-container.nutjar-theme-light {
  background-color: var(--nutjar-modal-background, #fafafa);
  color: var(--nutjar-modal-text, #171717);
}

#nutjar--modal-container.nutjar-theme-dark {
  background-color: var(--nutjar-modal-background, #262626);
  color: var(--nutjar-modal-text, #fafafa);
}

#nutjar--modal-container input {
  padding: 1em;
  font-family: "Inter";
  border: none;
  outline: none;
  border-radius: 0.3em;
  margin: none;
}

#nutjar--modal-container.nutjar-theme-light input {
  color: var(--nutjar-modal-input-text, #171717);
  background-color: var(--nutjar-modal-input-background, #e5e5e5);
}

#nutjar--modal-container.nutjar-theme-dark input {
  color: var(--nutjar-modal-input-text, #fafafa);
  background-color: var(--nutjar-modal-input-background, #171717);
}

#nutjar--modal-input-container {
  display: flex;
  flex-direction: row;
  gap: 1em;
  align-items: center;
  padding-right: 1em;
}

#nutjar--modal-input-container.nutjar-theme-dark {
  color: var(--nutjar-modal-input-text, #fafafa);
  background-color: var(--nutjar-modal-input-background, #171717);
}


#nutjar--modal-input-container.nutjar-theme-light {
  color: var(--nutjar-modal-input-text, #171717);
  background-color: var(--nutjar-modal-input-background, #e5e5e5);
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
  font-family: "Inter";
  font-weight: bold;
  border: none;
  padding: 0.6em 1em 0.6em 1em;
  border-radius: 0.3em;
  cursor: pointer;
}

#nutjar--modal-button.nutjar-theme-light {
  color: var(--nutjar-modal-input-text, #171717);
  background-color: var(--nutjar-modal-input-background, #e5e5e5);
}

#nutjar--modal-button.nutjar-theme-dark {
  color: var(--nutjar-modal-input-text, #fafafa);
  background-color: var(--nutjar-modal-input-background, #171717);
}

#nutjar--modal-button.nutjar-theme-light:hover {
  background-color: var(--nutjar-modal-button-hover, #a3a3a3);
  transition: 200ms;
}

#nutjar--modal-button.nutjar-theme-dark:hover {
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
