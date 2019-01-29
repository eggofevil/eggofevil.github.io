var linkListHeaders = Array.prototype.slice.call(document.getElementsByClassName('linkListHeader'));
var displayStatus;

linkListHeaders.forEach(function(element) {
    element.addEventListener('click', function() {
        if (element.nextElementSibling.style.display === '') {
            element.nextElementSibling.style.display = 'block';
        } else {
            element.nextElementSibling.style.display = '';
        }
    });
});