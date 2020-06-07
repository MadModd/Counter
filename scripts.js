let count = 0;
$('#incb').click(() => {
    count++;
    $('h2').html('<h2>' + count + '<h2>');
    console.log(count);
});
$('#decr').click(() => {
    count = count - 1;
    $('h2').html('<h2>' + count + '<h2>');
    console.log(count);
});



// $('p').html('<strong>hello world ' + count + '</strong>');
