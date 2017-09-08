(function ($) {
    'use strict';

    $.extend(true, $.trumbowyg, {
        langs: {
            en: {
                fontsize: 'Font size'
            },
            zh_cn: {
                fontsize: '字体'
            },
        }
    });

    function buildDropdown(trumbowyg) {
        const dropdown = [];
        const sizes = ['x-small', 'small', 'medium', 'large', 'x-large'];
        // const sizes = ['12px', '13px', '16px', '18px', '24px'];

        $.each(sizes, (index, size) => {
            trumbowyg.addBtnDef(`fontsize_${size}`, {
                text: `<span style="font-size: ${size};">${size}</span>`,
                hasIcon: false,
                fn() {
                    trumbowyg.execCmd('fontSize', index + 1, true);
                }
            });
            dropdown.push(`fontsize_${size}`);
        });

        return dropdown;
    }

    // Add dropdown with font sizes
    $.extend(true, $.trumbowyg, {
        plugins: {
            fontsize: {
                init (trumbowyg) {
                    trumbowyg.addBtnDef('fontsize', {
                        dropdown: buildDropdown(trumbowyg)
                    });
                }
            }
        }
    });
}(jQuery));
