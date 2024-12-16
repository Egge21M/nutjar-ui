import { Nutjar, NutZapTransport } from "nutjar.js";
import QRCode from "qrcode";
import "./style.css";
import { createElement, extractNostrSettings } from "./utils";

const scriptEl = document.querySelector(
  'script[data-name="nutjar-button"]',
) as HTMLScriptElement;
const nostrSettings = extractNostrSettings(scriptEl);

const jar = new Nutjar(
  "https://mint.minibits.cash/Bitcoin",
  nostrSettings.npub,
  new NutZapTransport(nostrSettings.relays),
);

function createModal(): HTMLDialogElement {
  const modalContainer = createElement("dialog", {
    id: "nutjar--modal-container",
  }) as HTMLDialogElement;

  const modalInner = createElement("div", { id: "nutjar--modal-inner" });
  const modalHeading = createElement("h2", { text: "Send a Zap" });
  const modalInputContainer = createInputContainer();
  const modalInvoiceButton = createInvoiceButton(
    modalContainer,
    modalInputContainer,
  );

  modalInner.append(modalHeading, modalInputContainer, modalInvoiceButton);
  modalContainer.appendChild(modalInner);

  return modalContainer;
}

function createInputContainer(): HTMLElement {
  const container = createElement("div", {
    id: "nutjar--modal-input-container",
  });
  const input = createElement("input", {
    id: "nutjar--modal-input",
  }) as HTMLInputElement;
  input.type = "number";
  input.placeholder = "Enter amount...";

  const unit = createElement("span", { text: "SATS" });
  container.append(input, unit);

  return container;
}

function createInvoiceButton(
  modalContainer: HTMLDialogElement,
  modalInputContainer: HTMLElement,
): HTMLButtonElement {
  const button = createElement("button", {
    id: "nutjar--modal-button",
    text: "Request Invoice",
  }) as HTMLButtonElement;

  const invoiceContainer = createInvoiceContainer();
  const successMessage = createElement("div", {
    id: "nutjar--modal-invoice-success-box",
  });
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

function createInvoiceContainer(): HTMLElement {
  const container = createElement("div", {
    id: "nutjar--modal-invoice-container",
  });
  const canvas = document.createElement("canvas");
  const copyButton = createElement("button", { text: "Copy Invoice" });

  container.append(canvas, copyButton);
  return container;
}

function createDonationButton(modalContainer: HTMLDialogElement): HTMLElement {
  const button = createElement("button", { id: "nutjar--action-open" });
  const text = createElement("span", { id: "testid", text: "Send Nut Zap" });

  button.append(text);
  button.addEventListener("click", () => modalContainer.showModal());

  return button;
}

function init() {
  const modalContainer = createModal();
  const donationButton = createDonationButton(modalContainer);

  document.body.appendChild(modalContainer);

  if (scriptEl?.parentNode) {
    scriptEl.parentNode.replaceChild(donationButton, scriptEl);
  }
}

init();
