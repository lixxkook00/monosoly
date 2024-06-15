import '../styles/result-text.scss'

interface Props {
  data: string
}

const ResultText: React.FC<Props>  = ({ data }) => {

  return <div className="result-text traps">{ data }</div>
}

export default ResultText;