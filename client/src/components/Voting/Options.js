import { useState, useEffect } from 'react';
import { socket, sendMessage } from '../../socket/socket.chat';
import { useVote } from './Voting';
import './component.module.css';

// names
import { useDispatch } from 'react-redux';
import useWebRTC from '../customHooks/useWebRTC';
import { useParams } from 'react-router';

function Options() {
  const dispatch = useDispatch();
  const { id: roomID } = useParams();
  const { clients, provideMediaRef } = useWebRTC(roomID);

  const { options } = useVote();
  const { setData } = useVote();
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelect = ({ target }) => setSelectedOption(target.value);

  const handleSubmit = () => {
    sendMessage('new-vote', selectedOption);
  };
  useEffect(() => {
    setData({
      labels: clients,
      datasets: [
        {
          label: '# of Votes',
          data: Object.values(options),
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
  }, [options, setData]);

  const total = Object.keys(options).reduce(
    (previous, key) => previous + options[key],
    0
  );

  const getPercent = key => {
    return ((options[key] * 100) / (total === 0 ? 1 : total)).toFixed(1);
  };

  return (
    <div id="options">
    
      {clients.map ((clients, options) => {
        return (
      <label htmlFor="">
        <input
        key={options}
          name="option"
          type="radio"
          value={options}
          onChange={handleSelect}
          // checked={selectedOption === options}
        />
        {clients}({getPercent(clients)} %)
      </label>
      )
     })
}
      <br />
      <br />
      <div>
        <button onClick={handleSubmit}>Голосовать</button>
      </div>
    </div>
  );
}

export default Options;
