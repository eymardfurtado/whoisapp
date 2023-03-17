import styles  from '../../styles/Results.module.css'

type Props = {
    heading?: string;
    errorMessage?: string,
};

const ErrorMessage = ({ heading, errorMessage }: Props) => {
 return (
    <div className={styles.errorMessage}>
            <h3>{heading}</h3>
            <p>{errorMessage}</p>
          </div>
  );
};

// default forr something went wrong
export default ErrorMessage;



