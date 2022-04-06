
import './App.css';
import Layout from './api/layout/Layout';
import {DataProvider} from "./DataContext"
function App() {
  return (
    <>

<DataProvider>
    <Layout/>
    </DataProvider>
    </>
  );
}

export default App;
