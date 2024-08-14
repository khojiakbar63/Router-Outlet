import './style.scss'



function Paragraph({text, marginTop, marginBottom}){
  const paragraphStyle = {
    marginTop: `${marginTop}px`,
    marginBottom: `${marginBottom}px`
  }
  
  return <p style={paragraphStyle}>{text}</p>
}



export default Paragraph;