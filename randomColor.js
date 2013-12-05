/*!
randomColor Commercial v1.0
*/
(function ($) {
    $.fn.randomColor = function (options) {
        var colors = ["#FB0A2A", "#02ADEA", "#00405D", "#FFCC33", "#FF6138", "#FF0000", "#FCD20B", "#E47911", "#A4C639", "#7FBB00", "#0060A3", "#003366", "#005CFF", "#97B538", "#EE6123", "#FC4F08", "#0039A6", "#003580", "#613854", "#FF7243", "#3D4944", "#8BA753", "#205CC0", "#3287C1", "#E54A4F", "#4E6252", "#2D72DA", "#FD0001", "#FEBD17", "#59A3FC", "#DB7132", "#EA4C89", "#3D9AE8", "#0C76AB", "#2A323A", "#89C507", "#F05E1B", "#00BDF6", "#528036", "#EB6D20", "#5BA525", "#DD0017", "#3B5998", "#E66000", "#0063DC", "#FF0084", "#5B9A68", "#25A0CA", "#007CC3", "#2D75A2", "#F70078", "#171515", "#0140CA", "#16A61E", "#DD1812", "#FCCA03", "#DD4B39", "#F77F00", "#82B548", "#FF6600", "#0085CA", "#C7C5E6", "#6567A5", "#003366", "#73BA37", "#EC6231", "#FFCC33", "#F3CE13", "#3F729B", "#0071C5", "#365EBF", "#76CC1E", "#E03500", "#00AF81", "#C3000D", "#0E76A8", "#CF0005", "#576396", "#A086D3", "#E51937", "#183693", "#76B900", "#CC0F16", "#E41F11", "#1E477A", "#3B7BBF", "#0000E6", "#C8232C", "#665CBE", "#EE4056", "#318BFF", "#0F71B4", "#A82400", "#66CEFF", "#008FD5", "#9C0000", "#CC0000", "#7EB400", "#0BA6AB", "#62B0D9", "#EE802F", "#1798C1", "#0C4DA2", "#96BF48", "#00AFF0", "#F47A20", "#008ACE", "#FF7700", "#F86960", "#81B71A", "#FEE100", "#121212", "#EF8236", "#CC0000", "#D7584F", "#008CDD", "#00AFE1", "#F74425", "#EA0A8E", "#40A800", "#EF4423", "#5CB868", "#5EAB1F", "#34526F", "#6441A5", "#00ACEE", "#FF8700", "#DD4814", "#3388FF", "#EF1D1D", "#86C9EF", "#00A478", "#06AFD8", "#CC0000", "#5B009C", "#21759B", "#D54E21", "#464646", "#2B88D9", "#9BC848", "#126567", "#720E9E", "#FFCC00", "#C41200", "#C4302B", "#5498DC", "#78A300", "#9DCC7A", "#5E8B1D"];
        var settings = $.extend({
            css: null,
            colors: null,
            random: true,
            complete: null
        }, options);
        this.each(function () {
            $(this).text();
            var accts = $(this).text();
            var split = accts.split(" ");
            var ret = [];
            if (settings.css) {
                $(this).css(settings.css);
            }
            if (settings.random == true) {

                if (settings.colors)
                    colors = settings.colors;

                for (var i = 0; i < split.length; i++) {
                    var randomColor = colors[Math.floor(Math.random() * colors.length)];
                    var span = $('<span/>', {
                        css: ({
                            'color': randomColor
                        }),
                        text: split[i] + " "
                    });

                    ret.push(span);
                }
                $(this).html(ret);
            }

        });
        if ($.isFunction(settings.complete)) {
            settings.complete.call(this);
        }
    }
} (jQuery));