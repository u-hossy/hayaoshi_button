// window.confirm("今から晴れるよ");

let msg = document.getElementById('status_msg');

document.addEventListener('keydown', function(e){
    // window.alert(e.key);
    switch(e.key){
        case 'f':
            msg.innerText = 'プレイヤー1（f）さん、解答をどうぞ！';
            break;
        
        case 'j':
            msg.innerText = 'プレイヤー2（j）さん、解答をどうぞ！';
            break;
    }
});

msg.innerText = '準備完了：解答がわかったらボタンを押そう！！';

