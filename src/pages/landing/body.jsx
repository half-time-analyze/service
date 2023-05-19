import { BodyDiv, Title, ResultBox, Comment } from "./style";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
function Body() {
    
    // 변수값들
    const [ homeAway, onChangeHomeAway, setHomeAway ] = useInput(0);
    const [ goals, onChangeGoals, setGoals ] = useInput(0);
    const [ shoots, onChangeShoots, setShoots ] = useInput(0);
    const [ shootsOnTarget, onChangeShootsOnTarget, setShootsOnTarget ] = useInput(0);
    const [ coners, onChangeConers, setConers ] = useInput(0);
    const [ fouls, onChangeFouls, setFouls ] = useInput(0);
    const [ yellowCards, onChangeYellowCards, setYellowCards ] = useInput(0);
    const [ redCards, onChangeRedCards, setRedCards ] = useInput(0);

    const isWin = (homeAway, goals, shoots, shootsOnTarget, coners, fouls, yellowCards, redCards) => {
        // beta 값들(승 / 무승)
        const b0 = 0
        const b1 = 0;
        const b2 = 0;
        const b3 = 0;
        const b4 = 0;
        const b5 = 0;
        const b6 = 0;
        const b7 = 0;
        const b8 = 0;
        
        // k (기준점)
        const k = 0;
        // y
        const y = b0 + homeAway * b1 + goals * b2 + shoots * b3 + shootsOnTarget * b4 + coners * b5 + fouls * b6 + yellowCards * b7 + redCards * b8;

        // y가 기준점을 넘거나 같으면
        if (y >= k){
            // 승리
            return true
        }
        // 못넘으면
        else{
            return false
        }
    }
    const isDraw = (homeAway, goals, shoots, shootsOnTarget, coners, fouls, yellowCards, redCards) => {
        // beta 값들(무 / 패)
        const b0 = 0;
        const b1 = 0;
        const b2 = 0;
        const b3 = 0;
        const b4 = 0;
        const b5 = 0;
        const b6 = 0;
        const b7 = 0;
        const b8 = 0;
        
        // k (기준점)
        const k = 0;
        // y
        const y = b0 + homeAway * b1 + goals * b2 + shoots * b3 + shootsOnTarget * b4 + coners * b5 + fouls * b6 + yellowCards * b7 + redCards * b8;
        
        // y가 기준점을 넘거나 같으면
        if (y >= k){
            // 무승부
            return true
        }
        // 못넘으면
        else{
            return false
        }
    }

    // win, draw, lose, comment
    const [ win, setWin ] = useState('');
    const [ draw, setDraw ] = useState('');
    const [ lose, setLose ] = useState('');
    const [ comment, setComment ] = useState('');

    const findWin = () => {
        const target = document.getElementById('win');
        setWin(target);
    };

    const findDraw = () => {
        const target = document.getElementById('draw');
        setDraw(target);
    };
    const findLose = () => {
        const target = document.getElementById('lose');
        setLose(target);  
    };
    const findComment = () => {
        const target = document.getElementById('comment');
        setComment(target);  
    };

    useEffect(() => {
        findWin();
        findDraw();
        findLose();
        findComment();
    }, []);

    // 예측치
    // 승리 시
    if (isWin(homeAway, goals, shoots, shootsOnTarget, coners, fouls, yellowCards, redCards) && win) {
        win.className = 'win';
        draw.className = '';
        lose.className = '';
        comment.innerText = '후반전을 즐겨볼까요?';
    }
    // 무승부 시
    else if(isDraw(homeAway, goals, shoots, shootsOnTarget, coners, fouls, yellowCards, redCards) && draw){
        draw.className = 'draw';
        win.className = '';
        lose.className = '';
        comment.innerText = '졸리면 주무셔도..';
    }
    // 패배 시
    else if(lose){
        lose.className = 'lose';
        win.className = '';
        draw.className = '';
        comment.innerText = '자라';
    }

    return (
        <BodyDiv>
            <Title>
                <p>왜 영국 사람들은</p>
                <p>새벽에 축구를 하조?</p>
                <p>주무세요..</p>
                <p>예측은..</p>
                <p>저희가할게요..</p>
            </Title>
            
            <form>
                <p>
                    <select onChange={onChangeHomeAway}>
                        <option value="">Home Away 선택</option>
                        <option value="1">Home</option>
                        <option value="0">Away</option>
                    </select>
                </p>
                
                <p>
                    골 <input type="number" onChange={onChangeGoals}/>
                </p>

                <p>
                    슈팅 <input type="number" onChange={onChangeShoots}/>
                </p>                
                
                <p>
                    유효슈팅 <input type="number" onChange={onChangeShootsOnTarget}/>
                </p>
                
                <p>
                    코너킥 <input type="number" onChange={onChangeConers}/>
                </p>
                
                <p>
                    파울 <input type="number" onChange={onChangeFouls}/>
                </p>
                
                <p>
                    경고 <input type="number" onChange={onChangeYellowCards}/>
                </p>
                
                <p>
                    퇴장 <input type="number" onChange={onChangeRedCards}/>
                </p>
            </form>

            <ResultBox>
                <div id="win">승리</div>
                <div id="draw">무승부</div>
                <div id="lose">패배</div>
            </ResultBox>

            <Comment id="comment"></Comment>
        </BodyDiv>
    )
}

export default Body;