/*
	This file is part of Password Generator.

    Password Generator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Password Generator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Password Generator.  If not, see <http://www.gnu.org/licenses/>.
    
    Copyright 2010 Greggory Hernandez <greggory.hz@gmail.com>
*/

var OptionsForm = new Class({
	initialize: function (ele) {
		this.options = new Options();
		this.initializeData();
	},
	initializeData: function () {
		var fields = ['advanced_chars', 'len', 'lower', 'lower_count', 'number', 'number_count', 'special', 'special_count', 'upper', 'upper_count', 'use_advanced']
		fields.each(function (key) {
		    this[key] = $(key);
		    var event = 'change';
		    
		    if (this[key].type == 'checkbox') {
		        this[key].checked = this.options.get(key);
		    }
		    else if (this[key].type == 'text') {
		        /* since it's a text type, we want to watch for the keyup event */
		        event = 'keyup';
		        this[key].value = this.options.get(key);
		    }
		    
		    console.log(key + ' = ', this.options.get(key));
		    /* both type use the same event */
		    this[key].addEvent(event, this.save.bind(this));
		}.bind(this));
	},
	save: function (event) {
		var form_field = event.target;
		
		if (form_field.type == 'checkbox') {
			this.options.set(form_field.id, form_field.checked);
		}
		else if (form_field.get('type') == 'text') {
			this.options.set(form_field.id, form_field.value);
		}
	}
});

new OptionsForm('options_form');
