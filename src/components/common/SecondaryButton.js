import styled from "styled-components";

export const SecondaryButton = styled.button`
	display: block;
	padding: 5px 20px;
	border: none;
	border-radius: 2px;
	outline: none;
	background-color: #D45B78;
	color: ${p => p.theme.colors.white};
	cursor: pointer;

	@media screen and (max-width: 425px) {
		padding: 3px 10px;
		font-size: 9px;
	}
`;