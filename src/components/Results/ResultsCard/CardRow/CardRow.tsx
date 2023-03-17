import { RowCardData } from '@/models/cardData';
import styles from '../../../../styles/CardRow.module.css';

type Props = {
  label?: string;
  data?: RowCardData;
};

const CardRow = ({
  label,
  data: value,
}: Props) => {

  return (
    <div className={styles.cardRow}>
      {label && <div className={styles.cardLabel}>{label}</div>}
      <pre className={styles.cardValue}>{Array.isArray(value) ?
        value.map((item, index) => <div key={`${item}${index}`} className={styles.cardValue}>{item}</div>)
        : value}
      </pre>
    </div>
  )
};

export default CardRow;