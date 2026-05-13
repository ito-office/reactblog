import FooterArea from "./components/footer/FooterArea/FooterArea";
import HeaderArea from "./components/header/HeaderArea/HeaderArea";
import MainArea from "./components/main/MainArea/MainArea";
import SectionHeader from "./components/main/SectionHeader/SectionHeader";

function App() {

  return (
    <>
      <h1 style={{color:'red'}}>テスト</h1>
      <HeaderArea />
      <MainArea />
      <FooterArea /> 
      <SectionHeader/>  
    </>
  )
}

export default App
