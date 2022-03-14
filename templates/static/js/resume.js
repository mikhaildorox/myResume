document.onclick = function(e){
  if(e.target.tagName == 'A'){
      if(e.target.id == 'a1'){
          document.querySelector('#output').textContent = document.querySelector('#text').textContent + ' 150 символов';
      }
      if(e.target.id == 'a2'){
          document.querySelector('#output').textContent = document.querySelector('#text').textContent + ' 120 символов';
      }
      if(e.target.id == 'a3'){
          document.querySelector('#output').textContent = document.querySelector('#text').textContent + ' 200 символов';
      }
  }else
      document.querySelector('#output').textContent = 'Тут будет выводится текст из ссылок';
}