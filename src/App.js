import logo from './logo.svg';
import './App.css';
import courseData from './Data/data';
import Header from './Header/Header';
import Courses from './Courses/Courses';

function App() {

  console.log(courseData);
  return (
    <div>
      <Header></Header>
      <Courses></Courses>
    </div>
  );
}

export default App;
