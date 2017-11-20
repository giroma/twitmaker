// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#new_tweet')
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    $.ajax({
      url: form.getAttribute('action'),
      method: form.getAttribute('method'),
      dataType: 'json',
      data: $(form).serialize()
    }).done(function (response) {
      form.reset()
      $('.tweets').prepend(`<li class='tweet'><p>${response.message}</p><time>${response.created_at}</time></li>`)
      console.log($('#create-tweet'));
      setTimeout(function(){
        $('#create-tweet').removeAttr('disabled')
      }, 0)

    })
  })
})
