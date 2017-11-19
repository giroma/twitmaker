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
      $('.tweets').prepend(`<li class='tweet'><p>${response.message}</p><time>${response.created_at}</time></li>`)
      $('.new_tweet :input').val('')
      console.log($('#create-tweet'));
      $('#create-tweet').removeAttr('disabled')
    })

  })


})
