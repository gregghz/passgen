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

function OptionsForm(ele) {
    this.options = new Options();
    this.initializeData();
}
OptionsForm.prototype.initializeData = function () {
    for (i in Options.fields) {
        var key = Options.fields[i];
        this[key] = document.getElementById(key);
        var event = 'change';
        
        if (this[key].type == 'checkbox') {
            this[key].checked = this.options.get(key);
        }
        else if (this[key].type == 'text') {
            event = 'keyup';
            this[key].value = this.options.get(key);
        }
        
        this[key].addEventListener(event, this.save.bind(this));
    }
}
OptionsForm.prototype.save = function (event) {
	var form_field = event.target;
	
	if (form_field.type == 'checkbox') {
		this.options.set(form_field.id, form_field.checked);
	}
	else if (form_field.type == 'text') {
		this.options.set(form_field.id, form_field.value);
	}
}

new OptionsForm('options_form');
