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
		this.initializeCheckboxes();
		this.initializeTextfields();
	},
	initializeCheckboxes: function () {
		var checkboxes = ['upper', 'lower', 'number', 'special', 'use_advanced']
		checkboxes.each(function (key) {
			this[key] = $(key);
			this[key].checked = this.options.get(key);
			this[key].addEvent('change', this.save.bind(this));
		}.bind(this));
	},
	initializeTextfields: function () {
		this.len = $('len');
		this.len.value = this.options.get('len');
		this.len.addEvent('change', this.save.bind(this));
		
		this.advanced_chars = $('advanced_chars');
		this.advanced_chars.value = this.options.get('advanced_chars');
		this.advanced_chars.addEvent('change', this.save.bind(this));
	},
	save: function (event) {
		var form_field = event.target;
		
		if (form_field.type == 'checkbox') {
			this.options.set(form_field.id, form_field.checked);
			console.log(form_field.id + ', ' + form_field.checked);
		}
		else if (form_field.get('type') == 'text') {
			this.options.set(form_field.id, form_field.value);
			console.log(form_field.id + ', ' + form_field.value);
		}
	}
});

new OptionsForm('options_form');
