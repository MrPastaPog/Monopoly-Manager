$(function() {
  $('#confirm').click(function() {
    sessionStorage.setItem('usernames', JSON.stringify([$('#user1').val(), $('#user2').val(), $('#user3').val(), $('#user4').val()]))
    location.href = location.href + '../Manager'
  })
})