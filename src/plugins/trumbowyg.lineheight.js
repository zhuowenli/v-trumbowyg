(function ($) {
    'use strict';

    function getSelectionParentElement() {
        let parentEl = null;
        let selection;

        if (window.getSelection) {
            selection = window.getSelection();
            if (selection.rangeCount) {
                parentEl = selection.getRangeAt(0).commonAncestorContainer;
                if (parentEl.nodeType !== 1) {
                    parentEl = parentEl.parentNode;
                }
            }

            return parentEl;
        }

        if ((selection = document.selection) && (selection.type !== 'Control')) {
            parentEl = selection.createRange().parentElement();
        }

        return parentEl;
    }

    function buildDropdown(trumbowyg) {
        const dropdown = [];
        const sizes = ['0.9', '1', '1.3', '1.5', '1.7', '1.8', '2.0'];

        $.each(sizes, (index, size) => {
            trumbowyg.addBtnDef(`lineheight_${size}`, {
                text: `<span style="line-height: ${size};">${size}</span>`,
                hasIcon: false,
                fn() {
                    trumbowyg.saveRange();
                    const text = trumbowyg.getRangeText();
                    if (text.replace(/\s/g, '') !== '') {
                        try {
                            const parent = getSelectionParentElement();
                            $(parent).css('lineHeight', size);
                        } catch (e) {
                            console.log(e);
                        }
                    }
                }
            });
            dropdown.push(`lineheight_${size}`);
        });

        return dropdown;
    }

    $.extend(true, $.trumbowyg, {
        langs: {
            en: {
                lineheight: 'Line height'
            },
            zh_cn: {
                lineheight: '行高'
            }
        }
    });

    $.extend(true, $.trumbowyg, {
        plugins: {
            lineheight: {
                init (trumbowyg) {
                    trumbowyg.addBtnDef('lineheight', {
                        dropdown: buildDropdown(trumbowyg)
                    });
                }
            }
        }
    });
}(jQuery));
