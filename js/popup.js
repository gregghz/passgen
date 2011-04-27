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

/**
 * Clipboard
 * Handles copying the newly generated password to user's clipboard
 */
function Clipboard(target) {
    this.target = document.getElementById(target);
    this.txt = document.createElement('textarea');
    this.txt.style.position = 'absolute';
    this.txt.style.left = '-100%';
}
Clipboard.prototype.copy = function () {
    console.log('hi');
    if ((localStorage['clipboard_copy'] == true) || (localStorage['clipboard_copy'] == "true")) {
        //Proceed to copy
    } else {
        return;
    }
    this.txt.value = this.target.value;
    document.body.appendChild(this.txt);
    this.txt.select();
    document.execCommand('Copy');
    document.body.removeChild(this.txt);
}

function Password(elem, options, callbacks) {
    this.text_box = document.getElementById(elem);
    this.pass = '';
    this.options = options;
    this.callbacks = callbacks;
    
    this.generate();
    this.output();
}
Password.prototype.attachReloadButton = function (button) {
    button = document.getElementById(button);
    button.addEventListener('click', function () {
        this.generate();
        this.output();
    }.bind(this));
}
Password.prototype.generate = function () {
    var chars = this.options.get('use_advanced') ? this.options.get('advanced_chars') : '';
    
    if (chars == '') {
        if (this.options.get('upper'))
            chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (this.options.get('lower'))
            chars += 'abcdefghijklmnopqrstuvwxyz';
        if (this.options.get('number'))
            chars += '1234567890';
        if (this.options.get('special'))
            chars += '~!@#$%^&*()_+`-={}|[]\\:";\'<>?,./';
            
        if (this.options.get('exclude')) {
            console.log('exclude');
            var excluded_chars = this.options.get('exclude');
            for (var i = 0; i < excluded_chars.length; i++) {
                chars = chars.replace(excluded_chars.charAt(i), '');
            }
        }
    }
    
    console.log(chars);
    
    this.pass = '';
    
    // TODO:
    if (parseInt(this.options.get('upper_count')) > 0) {}

    var len = this.options.get('len');
    var rnd = new Uint32Array(len);
    if (!crypto || !crypto.getRandomValues) {
      // Too old version of Chrome that does not support
      // cryptographically secure PRNG.
      // TODO: remove this fallback when Chrome 11 released.
      for (var i = 0; i < len; i++) {
        rnd[i] = Math.floor(Math.random() * chars.length);
      }
    } else {
      crypto.getRandomValues(rnd);
    }
    for (var i = 0; i < len; i++) {
        var index = rnd[i] % chars.length;
        this.pass += chars.charAt(index);
    }
}
Password.prototype.get = function () {
    return this.pass;
}
Password.prototype.output = function () {
    this.text_box.value = this.get();
    this.callbacks.on_output();
}

/* fixing an annoying problem in Chrome 9 */
if (document.getElementById('wrap').style.width != '235px')
    document.getElementById('wrap').style.width = '235px';

var clipboard = new Clipboard('password');
var pass = new Password('password', new Options(), {
    on_output: clipboard.copy.bind(clipboard)
});
pass.attachReloadButton('reload');
