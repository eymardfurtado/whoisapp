
import { RowCardData} from "./cardData"

export interface ResultsCardData {
  label: string;
  data?: RowCardData;
}

export interface ResultsCardDataWithLabel { 
  label: string, 
  data: ResultsCardData[] 
}