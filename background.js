document.addEventListener("DOMContentLoaded", () => {
  const matrixContainer = document.getElementById('matrix');
  const katakana = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'; 
  const baybayin = 'ᜀᜁᜂᜃᜄᜅᜆᜇᜈᜉᜊᜋᜌᜎᜏᜐᜑ';
  const vietnamese = 'ÁÂĂĐÊÍÔƠÚƯÝẮẰẲẴẶẤẦẨẪẬẾỀỂỄỆỐỒỔỖỘỚỜỞỠỢỨỪỬỮỰ'; 
  const hangul = 'ㅂㅈㄷㄱㅅㅁㄴㅇㄹㅎㅋㅌㅊㅍ';
  const hanzi = '電脳世界未来空城'; 
  const chars = (katakana + baybayin + vietnamese + hangul + hanzi).split('');

  const cols = Math.floor(window.innerWidth / 80);
  const rows = Math.floor(window.innerHeight / 80);
  const totalChars = cols * rows + 30; 

  let htmlStream = '';
  for (let i = 0; i < totalChars; i++) {
    htmlStream += `<span>${chars[Math.floor(Math.random() * chars.length)]}</span>`;
  }
  matrixContainer.innerHTML = htmlStream;
});