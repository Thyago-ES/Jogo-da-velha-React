import { useState } from "react";
import { StyledTable, TopRow, MiddleRow, BottomRow, Player } from "./styles";

export function Table() {
	const [player, setPlayer] = useState("X");
	const [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]);

	const handleGame = (num: number) => {
		if (game[num] === "") {
			game[num] = player;
		} else {
			return;
		}

		if (
			(game[0] === player && game[1] === player && game[2] === player) ||
			(game[3] === player && game[4] === player && game[5] === player) ||
			(game[6] === player && game[7] === player && game[8] === player) ||
			(game[0] === player && game[3] === player && game[6] === player) ||
			(game[1] === player && game[4] === player && game[7] === player) ||
			(game[2] === player && game[5] === player && game[8] === player) ||
			(game[0] === player && game[4] === player && game[8] === player) ||
			(game[2] === player && game[4] === player && game[6] === player)
		) {
			alert("Jogador " + player + " venceu!");
			setGame(["", "", "", "", "", "", "", "", ""]);
		}
		if (player === "X") {
			setPlayer("O");
		} else if (player === "O") {
			setPlayer("X");
		}
	};

	return (
		<>
			<StyledTable>
				<tbody>
					<TopRow>
						<td onClick={() => handleGame(0)}>{game[0]}</td>
						<td onClick={() => handleGame(1)}>{game[1]}</td>
						<td onClick={() => handleGame(2)}>{game[2]}</td>
					</TopRow>
					<MiddleRow>
						<td onClick={() => handleGame(3)}>{game[3]}</td>
						<td onClick={() => handleGame(4)}>{game[4]}</td>
						<td onClick={() => handleGame(5)}>{game[5]}</td>
					</MiddleRow>
					<BottomRow>
						<td onClick={() => handleGame(6)}>{game[6]}</td>
						<td onClick={() => handleGame(7)}>{game[7]}</td>
						<td onClick={() => handleGame(8)}>{game[8]}</td>
					</BottomRow>
				</tbody>
			</StyledTable>
			<Player>Jogador {player}</Player>
		</>
	);
}
