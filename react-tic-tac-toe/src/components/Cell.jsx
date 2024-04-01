import styled from 'styled-components';

const StyledCell = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledCellContent = styled.p`
    font-size: 10em;
    font-weight: bold;
    color: white;
`

export const Cell = ({value, onClick}) => {
    return (
        <StyledCell onClick={onClick}>
            <StyledCellContent>{value}</StyledCellContent>
        </StyledCell>
    )
}