// window.confirm("今から晴れるよ");
let msg = document.getElementById('status_msg');
let prev_command;
let ready = '準備完了：解答がわかったらボタンを押そう！！'

function player1() {
    msg.innerText = 'プレイヤー1（f）さん、解答をどうぞ！';
};

function planer2() {
    msg.innerText = 'プレイヤー2（j）さん、解答をどうぞ！';
};
function reset() {
    if(window.confirm('リセットしますか？')){
        msg.innerText = ready;
    }
}
// この辺のコードは後でシンプルなものに書き換える
document.addEventListener('keydown', function(e){
    // window.alert(e.key);
    if (prev_command !== 'player1' && prev_command !== 'player2' ){
        switch(e.key){
            case 'f':
                prev_command = 'player1';
                player1();
                break;
            
            case 'j':
                prev_command = 'player2';
                planer2();
                break;
        }
    }else if (e.key === 'Escape'){
        prev_command = 'reset';
        reset();
    }else{
        // 何もしない
    }
});

msg.innerText = ready;

