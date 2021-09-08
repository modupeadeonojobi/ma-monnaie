import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';


function App() {

  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="container">
      <h1 className="m-5 align-self-center">{account}</h1>
      <button className="btn btn-primary btn-sm" onClick={() => depositMoney(1000)}> Deposit </button>
      <button className="btn btn-primary btn-sm m-2" onClick={() => withdrawMoney(100)}> Withdraw </button>
    </div>
  );
}

export default App;
