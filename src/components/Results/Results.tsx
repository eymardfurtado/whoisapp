import ResultsCard from './ResultsCard/ResultsCard'
import RawDataCard from './ResultsCard/RawDataCard'
import { WhoisRecord } from '@/models/whois';
import { ResultsCardData , ResultsCardDataWithLabel} from '@/models/resultsCard';
import { createContactObjArr, createDomainObjArr} from '../../utils';
import styles from '../../styles/Results.module.css';

type ResultsProps = {
  data: WhoisRecord;
};

const Results = ({
  data,
}: ResultsProps) => {

  const resultsCardsDataArr: ResultsCardDataWithLabel[] = [];
  
  resultsCardsDataArr.push(createDomainObjArr("Domain Information", data));
  data.registrant && resultsCardsDataArr.push(createContactObjArr("Registrant Contact", data.registrant));
  data.administrativeContact && resultsCardsDataArr.push(createContactObjArr("Administrative Contact", data.administrativeContact));
  data.technicalContact && resultsCardsDataArr.push(createContactObjArr("Technical Contact", data.technicalContact));
  const rawData = data.rawText || data.registryData.rawText;
  rawData && resultsCardsDataArr.push({ label: "Raw Text Data", data: [{ label: '', data: `${rawData}` }] });

  return (
    <div className={styles.results}>
      {resultsCardsDataArr.map(resultsCardData => <ResultsCard key={resultsCardData.label} label={resultsCardData.label} data={resultsCardData.data} />)}
      {data && <RawDataCard label={"Raw JSON Data"} json={data} />}
    </div>
  )
};

export default Results;