import { npubEncode, decode } from "nostr-tools/nip19";

type elementOptions = {
  id?: string;
  classList?: string[];
  text?: string;
};

type Settings = {
  relays: string[];
  npub: `npub1${string}`;
  mint: string;
};

export function extractSettings(el: HTMLElement): Settings {
  const mint = el.getAttribute("mint");
  if (!mint) {
    throw new Error("nutjar - must define a mint");
  }
  const nprofile = el.getAttribute("nprofile") as `nprofile1${string}`;
  if (nprofile) {
    const { data } = decode(nprofile);
    if (!data.relays || data.relays.length < 1) {
      throw new Error(
        "nutjar - provided nprofile does not contain relay hints",
      );
    }
    return { relays: data.relays, npub: npubEncode(data.pubkey), mint };
  }
  const npub = el.getAttribute("npub") as `npub1${string}`;
  const relays = el.getAttribute("relays")?.split(",");
  if (!npub || !relays) {
    throw new Error("nutjar - no pubkey or relays provided");
  }
  return { relays, npub, mint };
}

export function createElement(
  tag: string,
  { id, classList, text }: elementOptions = {},
) {
  const el = document.createElement(tag);
  if (id) el.id = id;
  if (classList) el.classList.add(...classList);
  if (text) el.innerText = text;
  return el;
}
