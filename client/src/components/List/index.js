import React from "react";

function ResultList(props) {
  return (
    <ul className="list-group">
      {props.patterns.map(pattern => (
        <li className="list-group-item" key={pattern._id}>
          <img alt={pattern.patternNumber} className="img-fluid" src={pattern.page.imgURL} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
