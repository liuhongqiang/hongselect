(function ($) {
    var defaultOptions = {
        theme: "default"
    };

    //select object
    var HongSelect = function (element, options) {
        var that = this;
        that.origin = $(element);
        that.origin.hide();
        that.options = $.extend({}, defaultOptions, options);
        that.render();
    };

    HongSelect.prototype = {
        render: function () {
            var that = this;
            var theme = that.options.theme;
            that.container = that.container || that.origin.after("<div>").next();
            that.container.addClass(theme + "_hongselect");
            that.container.empty();
            var infoSpan = that.container.append("<span>").find("span");
            infoSpan.addClass(theme + "_info_span");
            var dl = that.container.append("<dl>").find("dl");
            dl.addClass(theme + "_dl");
            $(that.origin).find("option").each(function (i, option) {
                if (i == 0) {
                    infoSpan.text(option.text);
                }
                dl.append("<dd data-val=" + option.value + ">" + option.text + "</dd>");
            });

            //show selected value
            infoSpan.text($(that.origin).find('option:selected').text());

            //hide dd items
            dl.hide();
            var dd = dl.find("dd");
            dd.addClass(theme + "_dd");
            dd.hover(function () {
                $(this).addClass(theme + "_dd_hover");
            }, function () {
                $(this).removeClass(theme + "_dd_hover");
            });

            //show and hide
            infoSpan.click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                dl.show();
            });
            dd.each(function () {
                $(this).click(function () {
                    infoSpan.text($(this).text());
                    $(that.origin).val($(this).attr("data-val"));
                    $(that.origin).trigger("change");
                });
            });

            //click blank hide
            $(document).click(function () {
                dl.hide();
            });
        },
        setSelectVal: function (value) {
            this.origin.val(value);
            this.render();
        },
        refresh: function () {
            this.render();
        },
        hide: function () {
            this.container.hide();
        },
        show: function () {
            this.container.show();
        },
        destroy: function () {
            this.container.remove();
            this.origin.data('hongselect', null);
        }
    };

    $.fn.hongselect = function (option) {
        var args = Array.apply(null, arguments);
        args.shift();
        this.each(function () {
            var $this = $(this),
                data = $this.data('hongselect'),
                options = typeof option == 'object' && option;
            if (!data) {
                $this.data('hongselect', (data = new HongSelect(this, options)));
            }
            if (typeof option == 'string' && typeof data[option] == 'function') {
                data[option].apply(data, args);
            }
        });
        return this;
    };

})(jQuery);