import Header from "../components/header/header";
import IndexBottom from "../components/main/indexBottom";
import IndexTop from "../components/main/indexTop";

const Index = () => {
  return (
    <>
      <Header/>
      <div>
        <IndexTop/>
      </div>
      <div>
        <IndexBottom/>
      </div>
    </>
  )
}

export default Index;