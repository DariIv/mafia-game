import { useEffect } from 'react';
import { socket, subscribeToNewMessages } from '../../socket/socket.chat';
import Question from './Question';
import Options from './Options';
import './component.css';
import { useVote } from './Voting';
import { Pie } from 'react-chartjs-2';

function Container() {
  const { setOptions } = useVote();
  const { data } = useVote();

  useEffect(() => {
    socket.on('new-vote', (dta) => {
      setOptions(dta);
    });
    

    // subscribeToNewMessages(dta => {
    //   setOptions(dta);
    // });
  }, [setOptions]);

  return (
    <div className="">
      <div className="poll">
        <div className="right">
          <div className="question-header">
            <Question />
          </div>
          <div className="question-body">
            {' '}
            <Options />
          </div>
        </div>
        <div className="left">
          <div className="graph">
            {' '}
            <Pie data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
