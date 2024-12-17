# nutjar-ui

nutjar-ui allows you to easily integrate Lightning tips on your website, utilizing nostr and Cashu. It is a batteries-included Web Component, that does the heavy lifting for you. If you are looking to build your own UI around the nutjar logic, take a look at [nutjar.js](https://github.com/Egge21M/nutjar).

> [!WARNING]  
> nutjar-ui is in active development!! Proceed carefully and at your own risk

## Getting started

In order to use the custom Web Component in your HTML you have to load it first.

```html
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/nutjar-ui@0.3.0"
></script>
```

Then you can add the custom component anywhere in your HTML. Make sure to adjust the elements attributes to your needs

```html
<nutjar-button
  npub="npub1mhcr4j594hsrnen594d7700n2t03n8gdx83zhxzculk6sh9nhwlq7uc226"
  relays="wss://nostr.mom,wss://relay.damus.io"
  mint="https://mint.minibits.cash/Bitcoin"
></nutjar-button>
```

## Configuration

The element takes in some attributes to configure the donations:

- npub: The npub of the donation receiver
- relays: The relays a donation event (NIP-61) should be published to
- nprofile (optional, instead of `npub` and `relays`): The nprofile of the donation receiver (relays will be extracted from this)
- mint: The cashu mint used to mint the donation token

## Customization

You can adjust the appearance of the Web Component using CSS variables

```css
nutjar-button {
  --nutjar-button-background: red;
  --nutjar-button-hover: black;
  --nutjar-button-text: green;
  --nutjar-button-size: 1px;
  --nutjar-modal-background: blue;
  --nutjar-modal-input-background: red;
  --nutjar-modal-input-text: teal;
  --nutjar-modal-button-background: red;
  --nutjar-modal-button-hover: red;
  --nutjar-modal-text: orange;
}
```
