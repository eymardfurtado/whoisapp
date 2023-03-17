import CardRow from './CardRow/CardRow';
import { ResultsCardData } from '@/models/resultsCard';
import styles from '../../../styles/ResultsCard.module.css';

type ResultsCardProps = {
  label: string;
  data: ResultsCardData[];
};

const ResultsCard = ({
  label,
  data,
}: ResultsCardProps) => {

  const Rows = data.map(
    (rowData, index) =>
      rowData.data &&
      <CardRow
        key={`${rowData.label}${index}`}
        label={rowData.label}
        data={rowData.data}
      />
  );
  
  return (
    <div className={styles.resultsCard}>
      <h2 className={styles.heading}>{label}</h2>
      {Rows}
    </div>
  )
};

export default ResultsCard