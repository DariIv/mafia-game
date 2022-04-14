import { useEffect } from 'react';
import { socket, subscribeToNewMessages } from '../../socket/socket.chat';
import Question from './Question';
import Options from './Options';
import style from './component.module.css';
import { useVote } from './Voting';
import { Pie } from 'react-chartjs-2';

function Container() {
  const { options, setOptions } = useVote();
  const { data } = useVote();

  useEffect(() => {
    socket.on('new-vote', (dta) => {
      setOptions(dta);
    });

    

    // subscribeToNewMessages(dta => {
    //   setOptions(dta);
    // });
  }, [setOptions]);
  console.log(options);
  return (
    <div className="">
      <div className={style.poll}>
        <div className={style.right}>
          <div className="question-header">
            <Question />
          </div>
          <div className="question-body">
            {' '}
            <Options />
          </div>
        </div>
        <div className={style.left}>
          <div className={style.graph}>
            {' '}
            <Pie data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
