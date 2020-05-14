
// 2nd event code runs at
$('document').ready(onReady);

function onReady(){
    console.log('jQ');
    $("#hello").append('Welcome to my Page!');
    // 3rd event: other event, or event driven programming
    // .on('click', function) // on click, we're firing off the function
    $('#hello').css('color', 'red'); // this is not best practice. instead of targeting .css, target the change
    $('#hello').addClass("blue")// dont need .blue because we're already telling it to target a class. best practice!
    $('#submit').on('click', handleSubmit);
}

// 1st event code runs at
console.log('js');

function handleSubmit(){
    console.log('button clicked')
    let firstName = $('#firstName').val();// this is left blank, meaning "get me whatever's the value inside the DOM text box"
    // getter

    console.log(firstName);
    $('#firstName').val('');
    // setter
}