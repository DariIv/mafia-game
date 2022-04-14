import "./Voting.css";
import { LeafPoll, Result } from "react-leaf-polls";
import "react-leaf-polls/dist/index.css";
import { useEffect, useState } from "react";
import { socket } from "../../socket/socket.chat";


export default function Voting() {


  // useEffect(()=>{
    
  // },[])

  const makeVote = () => {
    socket.emit('killerVote', 'kill')
    socket.on('killerVote', (msg) => {
    console.log(msg);
    const newData = [...result];
    newData[0].votes++;
    setResult(newData);
    console.log(result);
    })
  }



  // Persistent data array (typically fetched from the server)
  const resData = [
    { text: "Вася", votes: 0 },
    { text: "Петя", votes: 0 },
    { text: "Маша", votes: 0 }
  ];

  // Object keys may vary on the poll type (see the 'Theme options' table below)
  const customTheme = {
    textColor: "black",
    mainColor: "#00B87B",
    backgroundColor: "rgb(255,255,255)",
    alignment: "center"
  };

  function vote(item, results) {
    // Here you probably want to manage
    // and return the modified data to the server.
    socket.emit('killerVote', 'kill')
    socket.on('killerVote', (msg) => {
    console.log(msg)
    const newData = [...result];
    newData[0].votes++;
    setResult(newData);
    console.log(result);
  })}


  const [result, setResult] = useState(resData);

  useEffect(() => {
    console.log(result);
  }, [result]);

  const addVote = () => {
    const newData = [...result];
    newData[0].votes++;
    setResult(newData);
    console.log(result);
  };

  return (
    <div className="voting">
      <LeafPoll
        type="multiple"
        question="Кого будем убивать?"
        results={result}
        theme={customTheme}
        onVote={vote}
      />
      <button onClick={makeVote} type="button" className="btn btn-dark">Убить</button>
    </div>
  );
}