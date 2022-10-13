import * as S from './styles';

function StatusBoard() {
  return (
    <S.StatusBoard>
      Status
      <S.StatusButton>
        <S.Dot />
        Pending
      </S.StatusButton>
    </S.StatusBoard>
  );
}

export default StatusBoard;
