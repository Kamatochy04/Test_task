type Props = {
  name: string;
  id: number | string;
  score: number | string;
  abundance: string | number;
  frequency: string | number;
};

export const Row = ({ name, id, score, abundance, frequency }: Props) => {
  return (
    <>
      <div className="table__box">{name}</div>
      <div className="table__box">{id}</div>
      <div className="table__box">{score}</div>
      <div className="table__box">{abundance}</div>
      <div className="table__box">{frequency}</div>
    </>
  );
};
