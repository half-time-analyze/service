import { BodyDiv, Title, ResultBox, Comment } from "./style";
import useInput from "../../hooks/useInput";
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
                <div>승리</div>
                <div>무승부</div>
                <div>패배</div>
            </ResultBox>

            <Comment>
                꿀잠 주무십시오!
            </Comment>
        </BodyDiv>
    )
}

export default Body;