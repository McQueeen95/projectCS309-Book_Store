import  {books} from'../../data/books.js'
import Slider from '../../component/Slider/slider.jsx';
import Services from "../../component/Services/services.jsx";
import BookSlider from "../../component/book-slider/BookSlider.jsx";
import HeadingTitle from "../../component/headingtitle/HeadingTitle.jsx";
const HomePage=()=>{
    return(

        <div className="home">
            <Slider/>
      <Services />
      <HeadingTitle title="Most Gift"/>
      <BookSlider data={books} />
      <HeadingTitle title="Best Sellar"/>
      <BookSlider data={books} />
      <HeadingTitle title="Most-Watched for"/>
      <BookSlider data={books} />
        </div>
    )
}
export default HomePage;