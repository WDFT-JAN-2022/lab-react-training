import logo from './logo.svg';
import './App.css';
import IdCard from './component/IdCard';
import Greetings from './component/Greetings';

function App() {
  return (
    <div className="App">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">Eddie</Greetings>
      <Greetings lang="es">Eduardo</Greetings>
    </div>
  );
}

export default App;
