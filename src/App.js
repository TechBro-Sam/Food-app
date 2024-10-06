
import { useState } from 'react';
import FoodList from './components/FoodList';
import './App.css';
import Search from './components/Search';
import NavBar from './components/NavBar';
import Container from './components/Container';
import InnerContainer from './components/InnerContainer';
import FoodDetail from './components/FoodDetail';

function App() {
  const [foodData,setFoodData] = useState([])
  const [foodId,setFoodId] = useState("")
  return (
    <div className="App">
      <NavBar />
      <Search foodData = {foodData} setFoodData ={setFoodData}/>
   <Container>
    <InnerContainer>
      <FoodList foodData={foodData} setFoodId ={setFoodId}/>
    </InnerContainer>
   
   <InnerContainer>
<FoodDetail foodId = {foodId} />
   </InnerContainer>
   </Container>

    </div>
  );
}

export default App;
