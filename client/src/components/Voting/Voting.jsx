import { createContext, useState, useContext } from 'react';
// names
import { useDispatch } from 'react-redux';
import useWebRTC from '../customHooks/useWebRTC';
import { useParams } from 'react-router';


const VoteContext = createContext();

export const Voting = ({ children }) => {
  const dispatch = useDispatch();
  const { id: roomID } = useParams();
  const { clients, provideMediaRef } = useWebRTC(roomID);
  
  const [options, setOptions] = useState({});
  const [data, setData] = useState({
    labels: [clients],
    datasets: [
      {
        label: '# of Votes',
        data: [0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });
  const values = {
    options,
    setOptions,
    data,
    setData,
  };

  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);
