(function($){
	
	//select object
	var HongSelect = function (element, options){
		var that = this;
		that.origin = $(element);
		that.origin.hide();
		that.container = that.origin.after("<div></div>").next();
		that.render();
	};

	HongSelect.prototype = {
		render : function(){
			var that = this;
			that.container.empty();
			var dl = that.container.append("<dl>").find("dl");
			var dd = null;
			$(that.origin).find("option").each(function(i,option){
				if (i == 0) {
					dl.append("<dt>" + option.text + "</dt>");
					dd = dl.append("<dd></dd>").find("dd");
				}
				dd.append("<a href='javascript:;' data-val=" + option.value + "><span><em>" + option.text + "</em></span></a>");
			});
			dl.find("dt").text($(that.origin).find('option:selected').text());

			dl.find("dt").click(function(e){
				e.preventDefault();
				e.stopPropagation();
				dl.find("dd").show();
			});
			dl.find("dd a").each(function(){
				$(this).click(function(){
					dl.find("dt").text($(this).text());
					$(that.origin).val($(this).attr("data-val"));
					$(that.origin).trigger("change");
				});
			});
			$(document).click(function(){
				dd.hide();
			});
		},
		setSelectVal : function(value){
			this.origin.val(value);
			this.render();
		},
		refresh : function(){
			this.render();
		}
	};

	$.fn.hongselect = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		this.each(function () {
			var $this = $(this),
			data = $this.data('hongselect'),
			options = typeof option == 'object' && option;
			if (!data) {
				$this.data('hongselect', (data = new HongSelect(this, $.extend({},options))));
			}
			if (typeof option == 'string' && typeof data[option] == 'function') {
				data[option].apply(data, args);
			}
		});
		return this;
	};

})(jQuery);