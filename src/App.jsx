import Accordian from "./components/Accordian"
import ImageSlider from "./components/ImageSlider"
import RandomColorGenerator from "./components/RandomColorGenerator"
import StarRating from "./components/StarRating"

function App() {

  return (
    <div>
      {/* <Accordian /> */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating noOfStar={10} /> */}
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        limit={10}
      />
    </div>
  )
}

export default App
