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
		if (!this.get('options_set')) {
			this.set('len', 8);
			this.set('upper', true);
			this.set('lower', true);
			this.set('number', true);
			this.set('special', true);
			this.set('use_advanced', false);
			this.set('advanced_chars', '');
			this.set('options_set', true);
		}
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
