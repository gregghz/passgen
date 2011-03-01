<!--
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
-->
<html>
    <head>
        <title>Password Generator Options</title>
        <link type="text/css" rel="stylesheet" href="css/options.css" />
    </head>
    <body>

        <form id="options_form" action="javascript:void(0);">
            <fieldset id="options">
                <legend>Options</legend>
                <div><label for="len">Length</label><input id="len" class="small" type="text" /></div>
                <div><label for="upper">Uppercase</label><input class="oneof" id="upper" type="checkbox" /></div>
                <div><label for="lower">Lowercase</label><input class="oneof" id="lower" type="checkbox" /></div>
                <div><label for="number">Numbers</label><input class="oneof" id="number" type="checkbox" /></div>
                <div><label for="special">Special</label><input class="oneof" id="special" type="checkbox" /></div>
                <div><label for="exclude">Exclude</label><input class="medium" id="exclude" type="text" /></div>
            </fieldset>
            <fieldset id="advanced">
                <legend>Advanced</legend>
                <div><label for="use_advanced">Use advanced</label><input id="use_advanced" type="checkbox" /></div>
                <p class="note">
                    Characters enetered below will be used to generate new passwords.  If a character is repeated, it will increase its chances of occuring in a password. If it is empty, the checkboxes above will be used.
                </p>
                <p>
                    Characters:
                    <input id="advanced_chars" type="text" />
                </p>
            </fieldset>
            <fieldset id="copy_to_clipboard">
                <legend>Copy to Clipboard</legend>
                <div><label for="clipboard_copy">Password to clipboard</label><input class="oneof" id="clipboard_copy" type="checkbox" /></div>
            </fieldset>
        </form>
        
        <!-- load js last -->
        <script type="text/javascript" src="js/shared_classes.js"></script>
        <script type="text/javascript" src="js/options.js"></script>
    </body>
</html>