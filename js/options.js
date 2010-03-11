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
        /* validate stuff first */
        if ($('advcheck').checked == false) {
            clear = false;
            $$('.oneof').each(function (check) {
                if (check.checked == true)
                    clear = true;
            });
            if (!clear) {
                alert("You must select at least one of 'Uppercase', 'Lowercase', 'Numbers', or 'Special'");
                return false;
            }
        }
        else {
            if ($('custom').value == '') {
                alert("You must input characters you wish to be included in the password");
                return false;
            }
        }
    
        $L.setItem('length', $('length').value);
        $L.setItem('uppercase', $('uppercase').checked);
        $L.setItem('lowercase', $('lowercase').checked);
        $L.setItem('numbers', $('numbers').checked);
        $L.setItem('special', $('special').checked);
        $L.setItem('custom', $('custom').value);

        // Update status to let user know options were saved.
        $("status").show();
        $("status").fade({'duration': 3.0});
    });
    
    $('advcheck').observe('click', function () {
        set_disabled();
    });
});

var set_disabled = function () {
    if ($('advcheck').checked == true) {
        $('uppercase').disabled = true;
        $('lowercase').disabled = true;
        $('numbers').disabled = true;
        $('special').disabled = true;
        $('custom').disabled = false;
        $L.setItem('advanced', true);
    }
    else {
        $('uppercase').disabled = false;
        $('lowercase').disabled = false;
        $('numbers').disabled = false;
        $('special').disabled = false;
        $('custom').disabled = true;
        $L.setItem('advanced', false);
    }
}

var restore_options = function () {
    $('length').value = ($L.getItem('length') == undefined) ? 8 : $L.getItem('length');
    $('custom').value = ($L.getItem('custom') == undefined) ? '' : $L.getItem('custom');
    $('uppercase').checked = ($L.getItem('uppercase') == 'false') ? false : true;
    $('lowercase').checked = ($L.getItem('lowercase') == 'false') ? false : true;
    $('numbers').checked = ($L.getItem('numbers') == 'false') ? false : true;
    $('special').checked = ($L.getItem('special') == 'true') ? true : false;
    $('advcheck').checked = ($L.getItem('advanced') == 'true') ? true : false;
    set_disabled();
}
