import { ParagraphAdder } from "./components/ParagraphAdder/ParagraphAdder";
import { GearRotator } from "./components/GearRotator/GearRotator";
import { ColorPicker } from "./components/ColorPicker/ColorPicker";
import { WordCounter } from "./components/WordCounter/WordCounter";
import { CirclesGame } from "./components/CirclesGame/CirclesGame";
import { DogBreedChecker } from "./components/DogBreedChecker/DogBreedChecker";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ParagraphAdder />
      <GearRotator />
      <ColorPicker />
      <WordCounter />
      <CirclesGame />
      <DogBreedChecker />
    </div>
  );
}

export default App;
