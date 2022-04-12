// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';


import { socket } from '../../socket/socket.chat';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Chart } from 'chart.js'


function Voting(props) {

  const { mess } = useSelector(state => state.messReducer)
  console.log(mess);

  const ctx = useRef()

  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Candidates"],
    },
    options: {
    }
  });


  // On new vote update the chart
  socket.on("update", (candidates) => {

    // Convert the candidates object into an array
    candidates = Object.entries(candidates);

    // For each candidate
    for (const [key, candidate] of candidates) {

      // Update the vote if the candidate already exists if not create a new candidate and then update the vote
      if (typeof chart.data.datasets[key] == "undefined" && chart.data.datasets.length < candidates.length) {
        chart.data.datasets.push({
          backgroundColor: candidate.color,
          borderColor: candidate.color,
          data: [candidate.votes],
          label: candidate.label
        });
      } else if (typeof chart.data.datasets[key] != "undefined") {
        chart.data.datasets[key].data = [candidate.votes];
      }
    }

    // Update the chart
    chart.update();
  });


  function vote(index) {
    socket.emit("vote", index);
  }

  return (
    <>
      <div>
        <canvas ref={ctx}></canvas>
      </div>

      <button onclick={vote(0)}>JavaScript</button>
      <button onclick={vote(1)}>C#</button>
      <button onclick={vote(2)}>PHP</button>
      <button onclick={vote(3)}>Python</button>
      <button onclick={vote(4)}>Go</button>
    </>
  );
}

export default Voting;
