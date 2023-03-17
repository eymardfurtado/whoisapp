import RecursiveCardRow from './CardRow/RecursiveCardRow';
import styles from '../../../styles/RawDataCard.module.css';


type RawDataCardProps = {
  label: string,
  json: Object;
};

const RawDataCard = ({ label, json }: RawDataCardProps) => {
  return (
    <div className={styles.resultsCard}>
      <h2 className={styles.heading}>{label}</h2>
      <RecursiveCardRow json={json} />
    </div>
  );
};

export default RawDataCard;