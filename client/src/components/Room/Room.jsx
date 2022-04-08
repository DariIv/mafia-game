import {useParams} from 'react-router';
import useWebRTC, {LOCAL_VIDEO} from '../customHooks/useWebRTC';

//['1', '2', '3', '4', '5']
//[['1','2'],['3','4'],[5]]

function layout(clientsNumber = 1) {
  const pairs = Array.from({length: clientsNumber})   //разметка для видео чтобы видео было слева и справа и не на весь экран
    .reduce((acc, next, index, arr) => {              //массив с массивами по 2 элемента
      if (index % 2 === 0) {
        acc.push(arr.slice(index, index + 2));    //если четно значение тогда 0-1 то 1-2 (по 2 делит видео) 
      }

      return acc;
    }, []);

  const rowsNumber = pairs.length;  //узнаем количество пар
  const height = `${100 / rowsNumber}%`;

  return pairs.map((row, index, arr) => {   //возвращаем разметку

    if (index === arr.length - 1 && row.length === 1) { //когда нечетное количество элементов (в конце 1)
      return [{
        width: '100%',            //то ширина 100%
        height,
      }];
    }

    return row.map(() => ({
      width: '50%',            //а если 2 элемента то 50%
      height,
    }));
  }).flat();    //приводит в плоский список
}

export default function Room() {
  const {id: roomID} = useParams();
  const {clients, provideMediaRef} = useWebRTC(roomID);
  const videoLayout = layout(clients.length);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      height: '100vh',
    }}>
      {clients.map((clientID, index) => {
        return (
          <div key={clientID} style={videoLayout[index]} id={clientID}>
            <video
              width='100%'
              height='100%'
              ref={instance => {
                provideMediaRef(clientID, instance);
              }}
              autoPlay
              playsInline
              muted={clientID === LOCAL_VIDEO}
            />
          </div>
        );
      })}

      Room
     </div>
  );
}