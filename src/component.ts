import { Nutjar, NutZapTransport } from "nutjar.js";
import QRCode from "qrcode";
import { createElement, extractSettings } from "./utils";
import { createStyle } from "./style";

function createModal(jar: Nutjar, theme: "dark" | "light"): HTMLDialogElement {
  const modalContainer = createElement(
    "dialog",
    {
      id: "nutjar--modal-container",
    },
    theme,
  ) as HTMLDialogElement;

  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      modalContainer.close();
    }
  });

  const modalInner = createElement("div", { id: "nutjar--modal-inner" }, theme);
  const modalHeading = createElement("h2", { text: "Send a Zap" }, theme);
  const modalInputContainer = createInputContainer(theme);
  const modalInvoiceButton = createInvoiceButton(
    modalContainer,
    modalInputContainer,
    jar,
    theme,
  );

  modalInner.append(modalHeading, modalInputContainer, modalInvoiceButton);
  modalContainer.appendChild(modalInner);

  return modalContainer;
}

function createInputContainer(theme: "dark" | "light"): HTMLElement {
  const container = createElement(
    "div",
    {
      id: "nutjar--modal-input-container",
    },
    theme,
  );
  const input = createElement(
    "input",
    {
      id: "nutjar--modal-input",
    },
    theme,
  ) as HTMLInputElement;
  input.type = "number";
  input.placeholder = "Enter amount...";

  const unit = createElement("span", { text: "SATS" }, theme);
  container.append(input, unit);

  return container;
}

function createInvoiceButton(
  modalContainer: HTMLDialogElement,
  modalInputContainer: HTMLElement,
  jar: Nutjar,
  theme: "dark" | "light",
): HTMLButtonElement {
  const button = createElement(
    "button",
    {
      id: "nutjar--modal-button",
      text: "Request Invoice",
    },
    theme,
  ) as HTMLButtonElement;

  const invoiceContainer = createInvoiceContainer(theme);
  const successMessage = createElement(
    "div",
    {
      id: "nutjar--modal-invoice-success-box",
    },
    theme,
  );
  successMessage.appendChild(
    createElement("p", { text: "Payment successful" }),
  );

  let clickHandler: () => void;

  button.addEventListener("click", () => {
    const amount = (
      modalInputContainer.querySelector(
        "#nutjar--modal-input",
      ) as HTMLInputElement
    ).valueAsNumber;

    jar.tip(amount, "Test", {
      onInvoice: (invoice) => {
        QRCode.toCanvas(invoiceContainer.querySelector("canvas"), invoice);
        modalInputContainer.remove();
        button.remove();

        clickHandler = () => navigator.clipboard.writeText(invoice);
        invoiceContainer
          .querySelector("button")
          ?.addEventListener("click", clickHandler);

        modalContainer
          .querySelector("#nutjar--modal-inner")
          ?.appendChild(invoiceContainer);
      },
      onSuccess: () => {
        invoiceContainer.appendChild(successMessage);
        invoiceContainer
          .querySelector("button")
          ?.removeEventListener("click", clickHandler);

        setTimeout(() => {
          modalContainer.close();
          successMessage.remove();
          invoiceContainer.remove();
          modalContainer
            .querySelector("#nutjar--modal-inner")
            ?.append(modalInputContainer, button);
        }, 5000);
      },
    });
  });

  return button;
}

function createInvoiceContainer(theme: "dark" | "light"): HTMLElement {
  const container = createElement(
    "div",
    {
      id: "nutjar--modal-invoice-container",
    },
    theme,
  );
  const canvas = document.createElement("canvas");
  const copyButton = createElement("button", { text: "Copy Invoice" }, theme);

  container.append(canvas, copyButton);
  return container;
}

function createDonationButton(
  modalContainer: HTMLDialogElement,
  theme: "dark" | "light",
): HTMLElement {
  const button = createElement("button", { id: "nutjar--action-open" }, theme);
  const text = createElement(
    "span",
    { id: "testid", text: "Send Nut Zap" },
    theme,
  );

  button.append(text);
  button.addEventListener("click", () => modalContainer.showModal());

  return button;
}

class NutjarButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const { relays, npub, mint } = extractSettings(this);
    const theme = (this.getAttribute("theme") as "light" | "dark") || "light";

    const jar = new Nutjar(mint, npub, new NutZapTransport(relays));

    const modalContainer = createModal(jar, theme);
    const donationButton = createDonationButton(modalContainer, theme);
    shadow.appendChild(modalContainer);
    shadow.appendChild(donationButton);

    const style = createStyle();
    shadow.appendChild(style);
  }
}

customElements.define("nutjar-button", NutjarButton);
