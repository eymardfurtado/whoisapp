import { useState } from 'react';
import styles from '../../../../styles/RawDataCard.module.css'

type RecursiveCardRowProps = {
  label?: string;
  json: Object;
};

const RecursiveCardRow = ({ label, json }: RecursiveCardRowProps) => {

  const [expanded, setExpanded] = useState<boolean>(false);

  const brackets = Array.isArray(json) ? ['[', ']'] : ['{', '}'];
  const propsCount = Array.isArray(json) ? `${json?.length && json?.length} items` : `${Object.keys(json).length} props`;
  const nestedItems: any[] = [];

  Object.entries(json).forEach(entry => {
    const [key, value] = entry;
    if (typeof value === 'object') {
      nestedItems.push(<RecursiveCardRow label={key} json={value} key={key} />);
    } else {
      nestedItems.push(<li key={key}>{`${key}: `}<span className={styles.value}>{typeof value === 'boolean' ? value ? 'true' : 'false' : value}</span></li>);
    }
  })


  return (
    <ul>
      <li key={Math.random()}>{label && `${label}: `}{brackets[0]}
        <button
          className={styles.button}
          onClick={() => setExpanded(prev => !prev)}>
          {expanded ? '-' : '+'}
        </button>
        <span className={styles.propCount}>{propsCount}</span>
        {expanded 
          ? nestedItems.length > 0 && <><ul>{nestedItems}</ul>{brackets[1]}</> 
          : brackets[1]}
      </li>
    </ul>
  );
};

export default RecursiveCardRow