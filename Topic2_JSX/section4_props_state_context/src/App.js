import FnComponent from './Components/FnComponent';
import ClsComponent from './Components/ClsComponent';
import FetchAPI from './Components/FetchAPI_Demo';
import ClsState from './Components/ClsState';
import ClsCounterState from './Components/ClsCounterState';
import FnCounterState from './Components/FnCounterState';
import todosData from  "./Components/todos.json";

function App() {

  return (
    <div className="App">
      {/* Gọi component và truyền dữ liệu thông qua
          2 attributes: name và age */}
      {/* <FnComponent name="HoangNN" age="20"/> */}

      {/* <ClsComponent address="Nguyen Tuan, Thanh Xuan"
                    city="HaNoi"/> */}

      <FetchAPI todoData={todosData} />

      {/* Sử dụng component đã có state */}
      {/* <ClsState/> */}

      {/* <ClsCounterState/> */}

      {/* <FnCounterState/> */}

    </div>
  );
}

export default App;
