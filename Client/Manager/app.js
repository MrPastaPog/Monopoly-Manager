$(function() {
  let userCount = 0
  usernames.forEach((usern) => {
    if (usern !== '') {
      userCount++
    }
  })
  for(let i = 0; i < userCount; i++) {
    $(`#input${i + 1}`).attr('placeholder', usernames[i])
  }
  $("#form1").submit(function(e){

    e.preventDefault()
    console.log(findCommand($('#input1').val()))

    if (findCommand($('#input1').val())!== undefined) {
      console.log('work')
      sessionStorage.setItem('arguments', JSON.stringify($('#input1').val()))
      findCommand($('#input1').val()).runCommand(usernames[0])
      
    } else {$('#output').text('Not a command')}


  });
  $("#form2").submit(function(e){

    e.preventDefault()
    
    if (findCommand($('#input2').val())!== undefined) {
      console.log('work')
      sessionStorage.setItem('arguments', JSON.stringify($('#input2').val()))
      findCommand($('#input2').val()).runCommand(usernames[1])
    } else {$('#output').text('Not a command')}


  });
  $("#form3").submit(function(e){

    e.preventDefault()
    
    if (findCommand($('#input3').val())!== undefined) {
      console.log('work')
      sessionStorage.setItem('arguments', JSON.stringify($('#input3').val()))
      findCommand($('#input3').val()).runCommand(usernames[2])
    } else {$('#output').text('Not a command')}


  });
  $("#form4").submit(function(e){

    e.preventDefault()
    
    if (findCommand($('#input4').val())!== undefined) {
      console.log('work')
      sessionStorage.setItem('arguments', JSON.stringify($('#input4').val()))
      findCommand($('#input4').val()).runCommand(usernames[3])
    } else {$('#output').text('Not a command')}


  });
})