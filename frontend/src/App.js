import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import PurchaseHistory from './page/purchasehistory/PurchaseHistory';
import Signup from './page/signup/SignUp';
import Signup2 from './page/signup/SignUp2';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/sign-up2' element={<Signup2 />} />
        {/* <Route path='/purchasehistory' element={<PurchaseHistory />} /> */}

      </Routes>
    </div>
  );
}

export default App;
