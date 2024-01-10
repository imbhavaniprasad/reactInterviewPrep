import React,{useState} from 'react'
import "./index.css"
const TicTacToe = () => {
    let timerId;
    const [data,setData] = useState(Array(9).fill(""));
    const [currPlayer,setCurrPlayer]=useState('X');
    const [winner,setWinner]=useState("");
    const winCombo=[
        [0,1,2],[0,3,6],[2,5,8],[6,7,8],
        [0,4,8],[2,4,6],
        [3,4,5],[6,7,8],
        [1,4,7]
    ]
    const move = (idx)=>{
        if(winner || data[idx]) return;
          data[idx]=currPlayer;
          setData(data)
          checkWinner();
    }
    const checkWinner=()=>{
        winCombo.forEach(combo=>{
            if(data[combo[0]] && data[combo[0]]==data[combo[1]] && data[combo[1]]==data[combo[2]]){
                setWinner(currPlayer);
                resetGame(5000);
                return;
            }
        })
        if(!winner && data.every(x=>x)){
            setWinner("no one");
            resetGame(5000)
        }
        setCurrPlayer(currPlayer=="X" ? "O" : "X");
    }
    function resetGame(timer){
        clearTimeout(timerId);
       timerId = setTimeout(() => {
            setWinner("");
            setData(Array(9).fill(""))
            setCurrPlayer("X");
        }, timer);
    }
  return (
    <div className='tic-tac-toe'>
        <h2>TicTacToe</h2>
        <div className='game__zone'>
        {data.map((val,idx)=>{
            return <div key={idx} onClick={()=>move(idx)} className='square'>{val}</div>
        })}
        </div>
        <div>
            <p>{winner ? `Winner is Player ${winner}` : `Start Playing ${currPlayer}`}  </p>
        </div>
        <div>
            <button onClick={()=>resetGame(0)}>Reset</button>
        </div>
        </div>
  )
}

export default TicTacToe