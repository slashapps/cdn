

(function($){
    
	console.log($)

	var settings = {
		
	};

	var QueryBuilder = function($el, options) {
		console.log()
	    // $el[0].queryBuilder = this;

	    // /**
	    //  * Element container
	    //  * @member {jQuery}
	    //  * @readonly
	    //  */
	    // this.$el = $el;

	    // /**
	    //  * Configuration object
	    //  * @member {object}
	    //  * @readonly
	    //  */
	    // this.settings = $.extendext(true, 'replace', {}, QueryBuilder.DEFAULTS, options);

	    // /**
	    //  * Internal model
	    //  * @member {Model}
	    //  * @readonly
	    //  */
	    // this.model = new Model();

	    // /**
	    //  * Internal status
	    //  * @member {object}
	    //  * @property {string} id - id of the container
	    //  * @property {boolean} generated_id - if the container id has been generated
	    //  * @property {int} group_id - current group id
	    //  * @property {int} rule_id - current rule id
	    //  * @property {boolean} has_optgroup - if filters have optgroups
	    //  * @property {boolean} has_operator_optgroup - if operators have optgroups
	    //  * @readonly
	    //  * @private
	    //  */
	    // this.status = {
	    //     id: null,
	    //     generated_id: false,
	    //     group_id: 0,
	    //     rule_id: 0,
	    //     has_optgroup: false,
	    //     has_operator_optgroup: false
	    // };

	    // /**
	    //  * List of filters
	    //  * @member {QueryBuilder.Filter[]}
	    //  * @readonly
	    //  */
	    // this.filters = this.settings.filters;

	    // /**
	    //  * List of icons
	    //  * @member {object.<string, string>}
	    //  * @readonly
	    //  */
	    // this.icons = this.settings.icons;

	    // /**
	    //  * List of operators
	    //  * @member {QueryBuilder.Operator[]}
	    //  * @readonly
	    //  */
	    // this.operators = this.settings.operators;

	    // /**
	    //  * List of templates
	    //  * @member {object.<string, function>}
	    //  * @readonly
	    //  */
	    // this.templates = this.settings.templates;

	    // /**
	    //  * Plugins configuration
	    //  * @member {object.<string, object>}
	    //  * @readonly
	    //  */
	    // this.plugins = this.settings.plugins;

	    // /**
	    //  * Translations object
	    //  * @member {object}
	    //  * @readonly
	    //  */
	    // this.lang = null;

	    // // translations : english << 'lang_code' << custom
	    // if (QueryBuilder.regional['en'] === undefined) {
	    //     Utils.error('Config', '"i18n/en.js" not loaded.');
	    // }
	    // this.lang = $.extendext(true, 'replace', {}, QueryBuilder.regional['en'], QueryBuilder.regional[this.settings.lang_code], this.settings.lang);

	    // // "allow_groups" can be boolean or int
	    // if (this.settings.allow_groups === false) {
	    //     this.settings.allow_groups = 0;
	    // }
	    // else if (this.settings.allow_groups === true) {
	    //     this.settings.allow_groups = -1;
	    // }

	    // // init templates
	    // Object.keys(this.templates).forEach(function(tpl) {
	    //     if (!this.templates[tpl]) {
	    //         this.templates[tpl] = QueryBuilder.templates[tpl];
	    //     }
	    //     if (typeof this.templates[tpl] == 'string') {
	    //         this.templates[tpl] = doT.template(this.templates[tpl]);
	    //     }
	    // }, this);

	    // // ensure we have a container id
	    // if (!this.$el.attr('id')) {
	    //     this.$el.attr('id', 'qb_' + Math.floor(Math.random() * 99999));
	    //     this.status.generated_id = true;
	    // }
	    // this.status.id = this.$el.attr('id');

	    // // INIT
	    // this.$el.addClass('query-builder form-inline');

	    // this.filters = this.checkFilters(this.filters);
	    // this.operators = this.checkOperators(this.operators);
	    // this.bindEvents();
	    // this.initPlugins();
	};

	$.fn.queryBuilder = function(option) {
	    // if (this.length === 0) {
	    //     Utils.error('Config', 'No target defined');
	    // }
	    // if (this.length > 1) {
	    //     Utils.error('Config', 'Unable to initialize on multiple target');
	    // }
	    return this.each(function(){
		    var data = this.data('queryBuilder');
		    var options = (typeof option == 'object' && option) || {};

		    if (!data && option == 'destroy') {
		        return this;
		    }
		    if (!data) {
		        var builder = new QueryBuilder(this, options);
		        this.data('queryBuilder', builder);
		        builder.init(options.rules);
		    }
		    if (typeof option == 'string') {
		        return data[option].apply(data, Array.prototype.slice.call(arguments, 1));
		    }
		 }
		    // return this;
	};

}(jQuery));