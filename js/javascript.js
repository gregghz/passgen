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
Event.observe(window, 'load', function () {
    restore_options();
    
    $('save').observe('click', function () {
        window.localStorage.setItem('length', $('length').value);
        window.localStorage.setItem('uppercase', $('uppercase').checked);
        window.localStorage.setItem('lowercase', $('lowercase').checked);
        window.localStorage.setItem('numbers', $('numbers').checked);
        window.localStorage.setItem('special', $('special').checked);

        // Update status to let user know options were saved.
        $("status").show();
        $("status").fade({'duration': 3.0});
    });
});

var restore_options = function() {
    $('length').value = (window.localStorage.getItem('length') == undefined) ? 8 : window.localStorage.getItem('length');
    $('uppercase').checked = (window.localStorage.getItem('uppercase') == 'false') ? false : true;
    $('lowercase').checked = (window.localStorage.getItem('lowercase') == 'false') ? false : true;
    $('numbers').checked = (window.localStorage.getItem('numbers') == 'false') ? false : true;
    $('special').checked = (window.localStorage.getItem('special') == 'false') ? false : true;
}
