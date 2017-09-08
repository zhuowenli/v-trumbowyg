# v-trumbowyg

## Usage

```bash
yarn add v-trumbowyg
```

```js
import 'trumbowyg';
import VueTrumbowyg from 'vue-trumbowyg';

Vue.component(VueTrumbowyg.name, VueTrumbowyg);
```

```html
<template lang="pug">
    trumbowyg(v-model="content" :btns="buttons")
</template>

<script>
    export default {
        data() {
            return {
                content: '',
                buttons: [
                    ['viewHTML'],
                    ['strong', 'em', 'underline', 'del'],
                    ['foreColor'],
                    ['fontsize', 'lineheight'],
                    ['insertImage', 'link'],
                    'btnGrp-justify',
                    'btnGrp-lists',
                    ['removeformat', 'undo', 'redo'],
                    ['fullscreen']
                ]
            }
        }
    };
</script>
```

## props

```js
{
    id: {
        type: [String, Number],
        default: () => `trumbowyg-editor-${index += 1}`
    },
    value: {
        type: [String],
        default: ''
    },
    language: {
        type: String,
        default: 'zh_cn'
    },
    svgPath: {
        type: String,
        default: '//st0.meiyaapp.com/libs/trumbowyg@2.5.1/ui/icons.svg?v1',
    },
    btns: {
        type: Array,
        default: () => [
            ['viewHTML'],
            ['strong', 'em', 'underline', 'del'],
            ['foreColor'],
            ['fontsize', 'lineheight'],
            ['insertImage', 'link'],
            'btnGrp-justify',
            'btnGrp-lists',
            ['removeformat', 'undo', 'redo'],
            ['fullscreen']
        ]
    }
}
```

## plugins

```js
import 'v-trumbowyg/src/plugins/trumbowyg.colors';
import 'v-trumbowyg/src/plugins/trumbowyg.fontsize';
import 'v-trumbowyg/src/plugins/trumbowyg.lineheight';
```
