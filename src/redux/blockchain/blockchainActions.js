// constants
import Web3EthContract from 'web3-eth-contract';
import Web3 from 'web3';
// log
import { fetchData } from '../data/dataActions';

const connectRequest = () => ({
  type: 'CONNECTION_REQUEST',
});

const connectSuccess = (payload) => ({
  type: 'CONNECTION_SUCCESS',
  payload,
});

const connectFailed = (payload) => ({
  type: 'CONNECTION_FAILED',
  payload,
});

const updateAccountRequest = (payload) => ({
  type: 'UPDATE_ACCOUNT',
  payload,
});

export const connect = () => async (dispatch) => {
  dispatch(connectRequest());
  const abiResponse = await fetch('/config/abi.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const abi = await abiResponse.json();
  const configResponse = await fetch('/config/config.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const CONFIG = await configResponse.json();
  const { ethereum } = window;
  const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
  if (metamaskIsInstalled) {
    Web3EthContract.setProvider(ethereum);
    const web3 = new Web3(ethereum);
    try {
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      const networkId = await ethereum.request({
        method: 'net_version',
      });
      if (networkId === CONFIG.NETWORK.ID) {
        const SmartContractObj = new Web3EthContract(
          abi,
          CONFIG.CONTRACT_ADDRESS
        );
        dispatch(
          connectSuccess({
            account: accounts[0],
            smartContract: SmartContractObj,
            web3,
          })
        );
        // Add listeners start
        // eslint-disable-next-line no-shadow
        ethereum.on('accountsChanged', (accounts) => {
          // eslint-disable-next-line no-use-before-define
          dispatch(updateAccount(accounts[0]));
        });
        ethereum.on('chainChanged', () => {
          window.location.reload();
        });
        // Add listeners end
      } else {
        dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
      }
    } catch (err) {
      dispatch(connectFailed('Something went wrong.'));
    }
  } else {
    dispatch(connectFailed('Install Metamask.'));
  }
};

export const updateAccount = (account) => async (dispatch) => {
  dispatch(updateAccountRequest({ account }));
  dispatch(fetchData(account));
};
