import React from "react";

const Grid = ({ config, data }) => {
  const TrailerComponent = config[3].component;
  return (
    <table>
      <thead>
        <tr>
          {config.map(({ field, title }) => (
            <th key={field}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ imdbID, Title, imdbRating, Trailer }) => (
          <tr key={imdbID}>
            <td>{imdbID}</td>
            <td>{Title}</td>
            <td>{imdbRating}</td>
            <td>
              <TrailerComponent data={Trailer} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
