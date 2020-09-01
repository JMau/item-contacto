```js script
import { html } from '@open-wc/demoing-storybook';
import '../componente-prueba.js';

export default {
  title: 'ComponentePrueba',
  component: 'componente-prueba',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# ComponentePrueba

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add componente-prueba
```

```js
import 'componente-prueba/componente-prueba.js';
```

```js preview-story
export const Simple = () => html`
  <componente-prueba></componente-prueba>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <componente-prueba title="Hello World"></componente-prueba>
`;
```
