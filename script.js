    <script>
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwo_mNOEdCz6sMd8G-wNXvy5j_YOsTUwJRT9zmlrhQ8NBk7N7D00LiBkb2yoYtSn2IK/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")
    
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {
              msg.innerHTML = "Message sent successfully"
              setTimeout(function(){
                  msg.innerHTML = ""
              }, 5000)
              form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })
    </script>