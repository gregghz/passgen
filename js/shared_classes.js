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

function Options() {
    var defaults = {
        len: 8,
		upper: true,
		lower: true,
		number: true,
		special: true,
		exclude: '',
		use_advanced: false,
		advanced_chars: '',
		upper_count: 0,
		lower_count: 0,
		number_count: 0,
		special_count: 0
    }
    
    for (i in Options.fields) {
        var key = Options.fields[i];
        if (!localStorage.getItem(key))
            this.set(key, defaults[key]);
    }
}
Options.fields = ['advanced_chars', 'exclude', 'len', 'lower', 'lower_count', 'number', 'number_count', 'special', 'special_count', 'upper', 'upper_count', 'use_advanced']
Options.prototype.set = function (key, value) {
    localStorage.setItem(key, value);
},
Options.prototype.get = function (key) {
    if (localStorage.getItem(key) == 'true' || localStorage.getItem(key) == 'false')
        return localStorage.getItem(key) == 'true' ? true : false;
    return localStorage.getItem(key);
}
