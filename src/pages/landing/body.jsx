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

    // lose-nonLose
    const isLose = (homeAway, goals, shoots, shootsOnTarget, ballPossession, coners, fouls, yellowCards, redCards) => {
        
        // beta 값들(패 / 무패)
        const b = -2.24113704;
        const bHomeAway = 0.31626115;
        const bGoals = 0.92939801;
        const bShoots = 0.11244771;
        const bShootsOnTarget = -0.05462963;
        const bBallPossession = 0.03047337;
        const bConers = 0.06590369;
        const bFouls = 0.01557806;
        const bYellowCards = -0.0775908;
        const bRedCards = -0.8105;
        
        // y
        const y = b + homeAway * bHomeAway + goals * bGoals + shoots * bShoots + shootsOnTarget * bShootsOnTarget + ballPossession * bBallPossession + coners * bConers + fouls * bFouls + yellowCards * bYellowCards + redCards * bRedCards;
        
        // s
        const s = get_s(y);

        // s가 0.5를 못 넘기면
        if (s < 0.5){
            console.log(`패 ${s}`);
            // lose
            return true
        }
        // s가 0.5를 넘으면
        else{
            // nonlose
            return false
        }
    }

    // win-draw 판단
    const isWin = (homeAway, goals, shoots, shootsOnTarget, ballPossession,  coners, fouls, yellowCards, redCards) => {
        
        // beta 값들(승 / 무)
        const b = -1.40316245;
        const bHomeAway = 0.20682411;
        const bGoals = 1.34115998;
        const bShoots = 0.00690114;
        const bShootsOnTarget =  -0.19914884;
        const bBallPossession = 0.01611161;
        const bConers = 0.1495746;
        const bFouls = 	0.11146582;
        const bYellowCards = -0.82376688;
        const bRedCards = -0.12900036;

        // y
        const y = b + homeAway * bHomeAway + goals * bGoals + shoots * bShoots + shootsOnTarget * bShootsOnTarget + ballPossession * bBallPossession + coners * bConers + fouls * bFouls + yellowCards * bYellowCards + redCards * bRedCards;
        
        // s
        const s = get_s(y);

        // s 값이 0.5를 넘으면
        if (s >= 0.5){
            console.log(`승 ${s}`);
            // win
            return true
        }
        // 못넘으면
        else{
            console.log(`무 ${s}`);
            // draw
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
    // 패배 시
    if (isLose(homeAway, goals, shoots, shootsOnTarget, ballPossession, coners, fouls, yellowCards, redCards) && lose) {
        win.className = 'initial';
        draw.className = 'initial';
        lose.className = 'lose';
        comment.innerText = '주무시는게 정신건강에 좋을듯 합니다';
    }
    // 승리 시
    else if(isWin(homeAway, goals, shoots, shootsOnTarget, ballPossession, coners, fouls, yellowCards, redCards) && win){
        draw.className = 'initial';
        win.className = 'win';
        lose.className = 'initial';
        comment.innerText = '후반을 즐겨볼까요?';
    }
    // 무승부 시
    else if(draw){
        lose.className = 'initial';
        win.className = 'initial';
        draw.className = 'draw';
        comment.innerText = '졸리면 주무셔도...';
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