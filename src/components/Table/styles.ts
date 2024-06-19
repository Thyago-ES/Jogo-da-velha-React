import styled from "styled-components";

export const StyledTable = styled.table`
	width: 420px;
	height: 420px;
	font-size: 1.8rem;

	border-collapse: collapse;

	margin: 0 auto;
	margin-top: 70px;

	tr {
		text-align: center;
	}

	td {
		width: 140px;
		height: 140px;
		cursor: pointer;
	}
`;

export const TopRow = styled.tr`
	td {
		border-bottom: 2px solid #fff;
	}

	td:nth-child(2n) {
		border-right: 2px solid #fff;
		border-left: 2px solid #fff;
	}
`;

export const MiddleRow = styled.tr`
	td {
		border-bottom: 2px solid #fff;
	}

	td:nth-child(2n) {
		border-right: 2px solid #fff;
		border-left: 2px solid #fff;
	}
`;

export const BottomRow = styled.tr`
	td:nth-child(2n) {
		border-right: 2px solid #fff;
		border-left: 2px solid #fff;
	}
`;

export const Player = styled.h2`
	margin-top: 30px;
	text-align: center;
`;
