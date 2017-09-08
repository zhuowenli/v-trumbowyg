<template>
    <div :id="id"></div>
</template>

<script>
    let index = 1;

    export default {
        name: 'trumbowyg',
        props: {
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
        },
        mounted() {
            $.trumbowyg.svgPath = this.svgPath;
            const $editor = $(`#${this.id}`);

            // $editor.trumbowyg('destroy');
            $editor.nextAll('.trumbowyg-box').remove();
            $editor
                .trumbowyg({
                    lang: this.language,
                    btns: this.btns,
                    removeformatPasted: true,
                })
                .on('tbwchange', this.onChange);

            if (this.value) {
                $editor.trumbowyg('html', this.value);
                $editor.html(this.value);
            }
        },
        destroyed() {
            $(`#${this.id}`).trumbowyg('destroy');
        },
        methods: {
            onChange() {
                const $editor = $(`#${this.id}`);
                const content = $editor.trumbowyg('html');

                this.$emit('input', content);

                if($editor.html() !== content) {
                    $editor.html(content);
                }
            }
        }
    };
</script>

<style lang="sass">
    .trumbowyg-box
        min-height: 200px
        margin: 0 auto
    .trumbowyg-editor
        min-height: 200px
        p
            font-size: 15px
            line-height: 1.5
            margin-bottom: 20px
        ul
            list-style-type: disc
        ol
            list-style-type: decimal
    .trumbowyg-button-pane
        padding: 0
        button
            width: 33px
        .trumbowyg-button-group
            padding: 0 4px
            border-right: 1px solid #d7e0e2
            &:last-child
                border: 0
            &:not(:empty) + .trumbowyg-button-group:before
                display: none
</style>
