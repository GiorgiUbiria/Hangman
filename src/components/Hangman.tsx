export const Hangman = (props: { mistakes: number }) => {
  const mistakes = props.mistakes;

  /* return (
    <svg height="250" width="200">
      {mistakes > 0 && <circle cx="100" cy="50" r="40" />}
      {mistakes > 1 && (
        <line
          x1="100"
          y1="90"
          x2="100"
          y2="150"
          stroke-width="5"
          stroke="black"
        />
      )}
      {mistakes > 2 && (
        <line
          x1="100"
          y1="150"
          x2="50"
          y2="200"
          stroke-width="5"
          stroke="black"
        />
      )}
      {mistakes > 3 && (
        <line
          x1="100"
          y1="150"
          x2="150"
          y2="200"
          stroke-width="5"
          stroke="black"
        />
      )}
      {mistakes > 4 && (
        <line
          x1="100"
          y1="125"
          x2="60"
          y2="100"
          stroke-width="5"
          stroke="black"
        />
      )}
      {mistakes > 5 && (
        <line
          x1="100"
          y1="125"
          x2="140"
          y2="100"
          stroke-width="5"
          stroke="black"
        />
      )}
      
      <line x1="0" y1="250" x2="0" y2="0" stroke-width="5" stroke="black" />
    </svg>
  ); */
  return (
    <svg height="250" width="200">
      <g>
        <line
          x1="100"
          y1="50"
          x2="100"
          y2="20"
          strokeWidth="2"
          stroke="black"
        />
        <line x1="50" y1="20" x2="150" y2="20" strokeWidth="2" stroke="black" />
        <line x1="50" y1="20" x2="50" y2="50" strokeWidth="2" stroke="black" />
        <line
          x1="150"
          y1="20"
          x2="150"
          y2="50"
          strokeWidth="2"
          stroke="black"
        />
      </g>
      {/* {mistakes > 0 && <circle cx="100" cy="70" r="25" />} */}
      {mistakes > 0 && (
        <>
          <circle
            cx="100"
            cy="70"
            r="25"
            stroke="black"
            strokeWidth="2"
            fill="white"
          />

          <circle cx="110" cy="65" r="5" fill="black" />
          <circle cx="90" cy="65" r="5" fill="black" />
        </>
      )}
      {mistakes > 1 && (
        <line
          x1="100"
          y1="95"
          x2="100"
          y2="150"
          strokeWidth="2"
          stroke="black"
        />
      )}
      {mistakes > 2 && (
        <line
          x1="100"
          y1="150"
          x2="50"
          y2="200"
          strokeWidth="2"
          stroke="black"
        />
      )}
      {mistakes > 3 && (
        <line
          x1="100"
          y1="150"
          x2="150"
          y2="200"
          strokeWidth="2"
          stroke="black"
        />
      )}
      {mistakes > 4 && (
        <line
          x1="100"
          y1="125"
          x2="60"
          y2="100"
          strokeWidth="2"
          stroke="black"
        />
      )}
      {mistakes > 5 && (
        <line
          x1="100"
          y1="125"
          x2="140"
          y2="100"
          strokeWidth="2"
          stroke="black"
        />
      )}
    </svg>
  );
};
