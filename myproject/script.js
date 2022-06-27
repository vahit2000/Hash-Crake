(function(w, d) {
  
    const sendBtn = d.querySelector('#sendBtn');
    const hashInput = d.querySelector('#hashInput')
    
    sendBtn.addEventListener('click', () => {
      
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({value: hashInput.value})
      }).then(data => {
        console.log('DATA :', data);
      })
    });
    
    
  })(window, document);