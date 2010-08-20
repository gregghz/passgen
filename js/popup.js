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
    
    Copyright 2010 Greggory Hernandez
*/
/*Clipboard = {}; 
Clipboard.utilities = {}; 
Clipboard.utilities.createTextArea = function(value) { 
    var txt = document.createElement('textarea'); 
    txt.style.position = "absolute"; 
    txt.style.left = "-100%"; 
    if (value != null) 
        txt.value = value; 
    document.body.appendChild(txt); 
    return txt; 
}; 
Clipboard.copy = function(data) { 
    if (data == null) return; 
    var passgen_txt = Clipboard.utilities.createTextArea(data); 
    passgen_txt.select();
    document.execCommand('Copy'); 
    document.body.removeChild(passgen_txt); 
};*/
var Clipboard = new Class({
    initialize: function (target) {
        this.target = $(target);
        this.txt = new Element('textarea');
        this.txt.style.position = 'absolute';
        this.txt.style.left = '-100%';
    },
    copy: function () {
        this.txt.value = this.target.value;
        document.body.appendChild(this.txt);
        this.txt.select();
        document.execCommand('Copy');
        document.boyd.removeChild(this.txt);
    }
});

var Password = new Class({
	initialize: function (elem, options) {
		this.text_box = $(elem);
		this.pass = '';
		
		this.setOptions(options);
		this.generate();
		this.output();
	},
	generate: function () {
		this.pass = Math.random();
		
	},
	get: function () {
		return this.pass;
	},
	output: function () {
		this.text_box.value = this.get();
	},
	setOptions: function (options) {
		this.options = {}
		var defaults = {
			len: 8,
			upper: true,
			lower: true,
			number: true,
			special: true,
			after_generate: function () {}
		}
		
		if (!options) {
			this.options = defaults;
			return;
		}

		this.options.len = options.len ? options.len : defaults.len;
		this.options.upper = options.upper ? options.upper : defaults.upeer;
		this.options.lower = options.lower ? options.lower : defaults.lower;
		this.options.number = options.number ? options.number : defaults.number;
		this.options.special = options.special ? options.special : defaults.special;
		this.options.after_generate = options.after_generate ? options.after_generate : defaults.after_generate;
	}
});

document.addEvent('domready', function () {
    var clipboard = new Clipboard('password');
	var pass = new Password('password', {
	    after_generate: clipboard.copy.bind(clipboard)
	});
});
