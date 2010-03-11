var PasswordGenerator = Class.create({
	initialize: function () {
	},
	getCharList: function () {
		if ($L.getItem('advanced') == 'true' && $L.getItem('custom').length > 0) {
		    return $L.getItem('custom');
		}

		chars = '';
		if ($L.getItem('uppercase') == undefined || $L.getItem('uppercase') == 'true') {
			chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		}
		if ($L.getItem('lowercase') == undefined || $L.getItem('lowercase') == 'true') {
			chars += 'abcdefghijklmnopqrstuvwxyz';
		}
		if ($L.getItem('numbers') == undefined || $L.getItem('numbers') == 'true') {
			chars += '1234567890';
		}
		if ($L.getItem('special') != undefined && $L.getItem('special') == 'true') {
			chars += '!@#$%^&*()_+-=~|:";\'<>,.?/';
		}
		return chars;
	},
	generate: function () {
		chars = this.getCharList();
		pass = '';
		len = ($L.getItem('length') == undefined) ? 8 : $L.getItem('length');
		for (i = 0; i < len; i++) {
			x = Math.floor(Math.random() * chars.length);
			pass += chars.charAt(x);
		}
	
		$('password').value = pass;
		Clipboard.copy(pass);
		//return pass;
	}
});

Clipboard = {}; 
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
}; 
// Can't get this to work. See the problem? 
Clipboard.paste = function() { 
    var txt = Clipboard.utilities.createTextArea(); 
    txt.focus(); 
    document.execCommand('Paste'); 
    var value = txt.value; 
    document.body.removeChild(txt); 
    return value; 
};

var Magic = Class.create({
	initialize: function () {
		this.show_options_link = $('show_options');
		this.settings = $('settings');
	},
	toggleOptions: function () {
		//this.settings.show();
		//Effect.blindDown(this.settings.identify());
		if (this.settings.style.display == 'none')
			Effect.BlindDown(this.settings.identify());
		//else {
		//	Effect.BlindUp(this.settings.identify());
		//	Effect.morph(window, { style: 'height: 100px' });
			//$$('body')[0].morph('height: 70px');
			//alert($$('body')[0]);
			//$$('body')[0].style.height = '70px';
		//}
	}
});

Event.observe(window, 'load', function () {
	var gen = new PasswordGenerator();
	var magic = new Magic();
	
    gen.generate();
    $('reload').observe('click', gen.generate.bind(gen));
    
    magic.show_options_link.observe('click', magic.toggleOptions.bind(magic));
});
