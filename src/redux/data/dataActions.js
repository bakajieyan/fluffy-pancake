// log
import store from '../store';

const fetchDataRequest = () => ({
  type: 'CHECK_DATA_REQUEST',
});

const fetchDataSuccess = (payload) => ({
  type: 'CHECK_DATA_SUCCESS',
  payload,
});

const fetchDataFailed = (payload) => ({
  type: 'CHECK_DATA_FAILED',
  payload,
});

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const totalSupply = await store
      .getState()
      .blockchain.smartContract.methods.totalSupply()
      .call();
    // let cost = await store
    //   .getState()
    //   .blockchain.smartContract.methods.cost()
    //   .call();

    dispatch(
      fetchDataSuccess({
        totalSupply,
        // cost,
      })
    );
  } catch (err) {
    console.log(err);
    dispatch(fetchDataFailed('Could not load data from contract.'));
  }
};
