import './HorizontalSlider.css';
const HorizontalSlider = ({ items, title}) =>{
    if (!items) {
        return null;
      }
    const url='http://localhost:5000'

    return (
        <div>
            <div className="title">{title}</div>
            {items.map((item) => {
                return(
                    <div>
                        <hr></hr>
                        <div className="item-title">{item.title}</div>
                        <img src={url + '/' + item.thumbnail} className="image" />
                        <div>{item.d}</div>
                       
                    </div>
                )
            })}



        </div>
    )
} 
export default HorizontalSlider