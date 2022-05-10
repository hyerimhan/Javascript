function newRegister() {
    var newP = document.createElement('p'); // 새로운 p요소를 만들기
    var userName = document.querySelector('#userName');
    var text = document.createTextNode(userName.value); // 새로운 텍스트 노드를 만드는 것
    newP.appendChild(text); // p노드가 상위요소가 되고 text라는 하위 요소를 연결

    var nameList = document.querySelector('#nameList');
    nameList.appendChild(newP); // p노드가 #nameList의 하위요소가 된다.
    userName.value = ''; // 텍스트 필드 지우기
}