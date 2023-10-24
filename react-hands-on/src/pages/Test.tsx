import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import styled from 'styled-components';


const Test = () => {

	const [time, setTime] = useState<number>(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null)

	const Timer = styled.div`
		width: 240px;
		height: 200px;
		vertical-align: middle;
		margin: 0 auto;
		margin-top: 60px;
		padding-top: 20px;
		background-color: #CCFFFF;
		border-radius: 5px;
	`

	const TimerDisplay = styled.div`
		display: grid;
		place-items: center;
		width: 200px;
		height: 90px;
		background-color: #f5f4f4;
		vertical-align: center;
		margin: 0 auto;
		padding: 0 20px;
		border-radius: 5px;
	`

	const startTimer = () => {
    if (timerId) return;
    // 10ミリ秒ごとにtimeの変数を上書き
    const id: NodeJS.Timeout = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    setTimerId(id);
	}

  // Stopボタンを押した時の処理
  const stopTimer = () => {
    // 一定間隔ごとに実行する処理を解除
    if (timerId) clearInterval(timerId);
    setTimerId(null);
  }

  // リセットボタンを押した時の処理
  const resetTimer = () => {
    setTime(0);
    if (timerId) clearInterval(timerId);
    setTimerId(null);
  }

	const insertStr = (str:String, index:number, insStr: String) => {
		return str.slice(0, index) + insStr + str.slice(index, str.length);
	}

	const hhmmssmsms = (time:number) => {
		let timeStr:String = time.toString();
		while (timeStr.length < 8) {
			timeStr = '0' + timeStr;
		}
		for (let i = 0; i < 3; i++) {
			timeStr = insertStr(timeStr, i * 2 + i + 2, ':');
		}
		return timeStr;
	}

  return (
    //<Timer>
		<>
			<TimerDisplay>{hhmmssmsms(time / 10)}</TimerDisplay>
      <Button mt={'4'} colorScheme="teal" onClick={startTimer}>
        start
      </Button>
      <Button mt={'4'} colorScheme="red" onClick={stopTimer}>
        stop
      </Button>
      <Button mt={'4'} colorScheme="yellow" onClick={resetTimer}>
        reset
      </Button>
    </>
		//</Timer>
  )
}


export default Test