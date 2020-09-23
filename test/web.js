const { $, getCssProp, setCssProp } = window.donot;

$("#setcssprop").addEventListener('click', () => {
    const val = $("#val").value;
    setCssProp('root', 'color', val);

    $("output").innerHTML = 'Value is: ' + getCssProp('root', 'color');
});