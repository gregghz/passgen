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
