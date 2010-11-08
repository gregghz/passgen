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

/**
 * Clipboard
 * Handles copying the newly generated password to user's clipboard
 */
var Clipboard = new Class({
    /**
     * initialize
     * Clipboard constructor
     * target - id or element that contains text to copy
     */
    initialize: function (target) {
        this.target = $(target);
        this.txt = new Element('textarea');
        this.txt.style.position = 'absolute';
        this.txt.style.left = '-100%';
    },
    /**
     * copy
     * triggers the copying of the value of this.target
     */
    copy: function () {
        this.txt.value = this.target.value;
        document.body.appendChild(this.txt);
        this.txt.select();
        document.execCommand('Copy');
        document.body.removeChild(this.txt);
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
	attachReloadButton: function (button) {
    	$(button).addEvent('click', function () {
    	    this.generate();
    	    this.output();
    	}.bind(this));
	},
	generate: function () {
	    /* figure out what characters we can use */
		var chars = '';
		if (this.options.upper)
		    chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		if (this.options.lower)
		    chars += 'abcdefghijklmnopqrstuvwxyz';
		if (this.options.number)
		    chars += '1234567890';
		if (this.options.special)
		    chars += '~!@#$%^&*()_+`-={}|[]\\:";\'<>?,./';
		
		this.pass = '';
		for (var i = 0; i < this.options.len; i++) {
		    var index = Math.floor(Math.random()*chars.length);
		    this.pass += chars.charAt(index);
		}
	},
	get: function () {
		return this.pass;
	},
	output: function () {
		this.text_box.value = this.get();
		this.options.on_output();
	},
	setOptions: function (options) {
		this.options = {}
		var defaults = {
			len: 8,
			upper: true,
			lower: true,
			number: true,
			special: true,
			on_output: function () {}
		}

		this.options.len = options.len ? options.len : defaults.len;
		this.options.upper = options.upper ? options.upper : defaults.upeer;
		this.options.lower = options.lower ? options.lower : defaults.lower;
		this.options.number = options.number ? options.number : defaults.number;
		this.options.special = options.special ? options.special : defaults.special;
		this.options.on_output = options.on_output ? options.on_output : defaults.on_output;
	}
});

$('wrap').setStyle('width', '235px');

var clipboard = new Clipboard('password');

var options = localStorage;
options.on_output = clipboad.copy.bind(clipboard);

var pass = new Password('password', options);
pass.attachReloadButton('reload');
