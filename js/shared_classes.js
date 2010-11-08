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

var Options = new Class({
	initialize: function () {
		/* if localStorage options haven't been set, set the defaults */
        var defaults = {
            len: 8,
			upper: true,
			lower: true,
			number: true,
			special: true,
			use_advanced: false,
			advanced_chars: '',
			upper_count: 0,
			lower_count: 0,
			number_count: 0,
			special_count: 0
        }
		
		var fields = ['advanced_chars', 'len', 'lower', 'lower_count', 'number', 'number_count', 'special', 'special_count', 'upper', 'upper_count', 'use_advanced']
		fields.each(function (key) {
		    if (!localStorage.getItem(key))
		        this.set(key, defaults[key]);
		}.bind(this));
	},
	set: function (key, value) {
		localStorage.setItem(key, value);
	},
	get: function (key) {
		if (localStorage.getItem(key) == 'true' || localStorage.getItem(key) == 'false')
			return localStorage.getItem(key) == 'true' ? true : false;
		return localStorage.getItem(key);
	}
});
