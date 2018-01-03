(function () {

    if ('placeholder' in document.createElement('input')) {
        return;
    }

    const placeHolderClassName = 'placeholderShimClass';

    /*  the css maybe like below :
    .placeholderShimClass {
        color:#C7C7CD;
    }
    */


    function trim(string) {
        return string.trim ? string.trim() : string.replace(/^\s+|\s+$/g, "");
    }

    function hasClassName(element, className) {
        const elClassName = element.className;
        return elClassName && new RegExp("(^|\\s)" + className + "(\\s|$)").test(elClassName);
    }

    function removeClassName(element, className) {
        const elClassName = element.className;
        if (elClassName) {
            element.className = elClassName.replace(
                new RegExp("(^|\\s+)" + className + "(\\s+|$)"), ' ');
        }
    }

    function addClassName(element, className) {
        element.className += element.className ? ` ${className}` : `${className}`
    }

    const addEvent = document.addEventListener ? 'addEventListener' : 'attachEvent';
    const eventPrefix = document.addEventListener ? '' : 'on';


    function placeHolderEle(textField) {
        let placeHolder = textField.getAttribute('placeholder');
        if (!placeHolder)
            return;

        placeHolder = trim(placeHolder);
        if (placeHolder === '')
            return;

        const onBlur = function () {
            if (textField.value !== '') //a space is a valid input..
                return;
            textField.value = placeHolder;
            addClassName(textField, placeHolderClassName);
        };

        textField[addEvent](eventPrefix + 'blur', onBlur, false);

        //the focus event - removes the place holder if required..
        textField[addEvent](eventPrefix + 'focus', function () {
            if (hasClassName(textField, placeHolderClassName)) {
                removeClassName(textField, placeHolderClassName);
                textField.value = "";
            }
        }, false);

        //the submit event on the form to which it's associated - if the
        //placeholder is attached set the value to be empty..
        const form = textField.form;
        if (form) {
            form[addEvent](eventPrefix + 'submit', function () {
                if (hasClassName(textField, placeHolderClassName))
                    textField.value = '';
            }, false);
        }

        onBlur(); //call the onBlur to set it initially..
    };

}());