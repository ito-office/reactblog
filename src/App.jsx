import SimpleButton from "./components/commons/SimpleButton/SimpleButton";
import FooterArea from "./components/footer/FooterArea/FooterArea";
import HeaderArea from "./components/header/HeaderArea/HeaderArea";
import TextArea from "./components/main/Form/TextArea/TextArea";
import MainArea from "./components/main/MainArea/MainArea";
import SectionHeader from "./components/main/SectionHeader/SectionHeader";

function App() {

  return (
    <>
      <HeaderArea />
      <MainArea />
      <FooterArea /> 
      <SectionHeader/> 
      <SimpleButton />
    </>
  )
}

export default App
