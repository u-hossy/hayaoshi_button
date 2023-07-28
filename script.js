// window.confirm("今から晴れるよ");
document.addEventListener('keydown', keydown);

function player1_ans() {
    msg.innerText = 'プレイヤー1(f)さん、お答えください！';
}

function player2_ans() {
    msg.innerText = 'プレイヤー2(g)さん、お答えください！';
}



let msg = document.getElementById('status_msg');
msg.innerText = '準備完了：解答がわかったらボタンを押そう！！';

