import { npubEncode, decode } from "nostr-tools/nip19";

type elementOptions = {
  id?: string;
  classList?: string[];
  text?: string;
};

type NostrSettings = {
  relays: string[];
  npub: `npub1${string}`;
};

export function extractNostrSettings(el: HTMLElement): NostrSettings {
  const nprofile = el.getAttribute("data-nprofile") as `nprofile1${string}`;
  if (nprofile) {
    const { data } = decode(nprofile);
    if (!data.relays || data.relays.length < 1) {
      throw new Error(
        "nutjar - provided nprofile does not contain relay hints",
      );
    }
    return { relays: data.relays, npub: npubEncode(data.pubkey) };
  }
  const npub = el.getAttribute("data-npub") as `npub1${string}`;
  const relays = el.getAttribute("data-relays")?.split(",");
  if (!npub || !relays) {
    throw new Error("nutjar - no pubkey or relays provided");
  }
  return { relays, npub };
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
