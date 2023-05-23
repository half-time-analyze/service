import { BodyDiv, Title, ResultBox, Comment } from "./style";
import useInput from "../../hooks/useInput";
import { useState, useEffect } from "react";
function Body() {
    
    // 변수값들
    const [ homeAway, onChangeHomeAway, setHomeAway ] = useInput("0");
    const [ goals, onChangeGoals, setGoals ] = useInput(0);
    const [ shoots, onChangeShoots, setShoots ] = useInput(0);
    const [ shootsOnTarget, onChangeShootsOnTarget, setShootsOnTarget ] = useInput(0);
    const [ ballPossession, onChangeBallPossession, setBallPossession ] = useInput(0);
    const [ coners, onChangeConers, setConers ] = useInput(0);
    const [ fouls, onChangeFouls, setFouls ] = useInput(0);
    const [ yellowCards, onChangeYellowCards, setYellowCards ] = useInput(0);
    const [ redCards, onChangeRedCards, setRedCards ] = useInput(0);
    
    // s를 생성하는 함수
    const get_s = (y) => {
        const e = Math.E;
        return (e**y) / (1 + (e**y))
    }

    // win-nonwin 판단
    const isWin = (homeAway, goals, shoots, shootsOnTarget, ballPossession, coners, fouls, yellowCards, redCards) => {
        
        // beta 값들(승 / 무승)
        const b = -0.59;
        const bHomeAway = 0.2881;
        const bGoals = 1.1128;
        const bShoots = 0.0754;
        const bShootsOnTarget = -0.0095;
        const bBallPossession = 0.7155;
        const bConers = 0.1263;
        const bFouls = 0.1507;
        const bYellowCards = -0.4175;
        const bRedCards = -0.1675;
        
        // y
        const y = b + homeAway * bHomeAway + goals * bGoals + shoots * bShoots + shootsOnTarget * bShootsOnTarget + (ballPossession - 50) * bBallPossession + coners * bConers + fouls * bFouls + yellowCards * bYellowCards + redCards * bRedCards;
        
        // s
        const s = get_s(y);

        // s가 0.5를 넘기면
        if (s >= 0.5){
            console.log(`승리 ${s}`);
            // 승리
            return true
        }
        // 못넘으면
        else{
            return false
        }
    }

    // draw-lose 판단
    const isDraw = (homeAway, goals, shoots, shootsOnTarget, ballPossession,  coners, fouls, yellowCards, redCards) => {
        
        // beta 값들(무 / 패)
        const b = -0.71330266;
        const bHomeAway = 0.3265;
        const bGoals = 0.3745;
        const bShoots = 0.3210;
        const bShootsOnTarget = -0.1027;
        const bBallPossession = 0.3585;
        const bConers = -0.0431;
        const bFouls = 	-0.0727;
        const bYellowCards = 0.2767;
        const bRedCards = -0.2239;

        // y
        const y = b + homeAway * bHomeAway + goals * bGoals + shoots * bShoots + shootsOnTarget * bShootsOnTarget + (ballPossession - 50)* bBallPossession + coners * bConers + fouls * bFouls + yellowCards * bYellowCards + redCards * bRedCards;
        
        // s
        const s = get_s(y);

        if (s >= 0.5){
            console.log(`무승부 ${s}`);
            // 무승부
            return true
        }
        // 못넘으면
        else{
            console.log(`패 ${s}`);
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
    if (isWin(homeAway, goals, shoots, shootsOnTarget, ballPossession, coners, fouls, yellowCards, redCards) && win) {
        win.className = 'win';
        draw.className = 'initial';
        lose.className = 'initial';
        comment.innerText = '후반전을 즐겨볼까요?';
    }
    // 무승부 시
    else if(isDraw(homeAway, goals, shoots, shootsOnTarget, ballPossession, coners, fouls, yellowCards, redCards) && draw){
        draw.className = 'draw';
        win.className = 'initial';
        lose.className = 'initial';
        comment.innerText = '졸리면 주무셔도..';
    }
    // 패배 시
    else if(lose){
        lose.className = 'lose';
        win.className = 'initial';
        draw.className = 'initial';
        comment.innerText = '자라';
    }

    // 초기 설정
    if (homeAway === '0' && !goals  && !shoots  && !shootsOnTarget && !ballPossession  && !coners  && !fouls  && !yellowCards  && !redCards ){
        if (win && draw && lose && comment){
            win.className = 'initial';
            draw.className= 'initial';
            lose.className= 'initial';
            comment.innerText = '';
        }    
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
                        <option value="#">Home Away 선택</option>
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
                    점유율 <input type="number" onChange={onChangeBallPossession}/>
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