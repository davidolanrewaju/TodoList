type CircleIconProps = {
  onClick: () => void;
};

const CircleIcon = (props: CircleIconProps) => {
  return (
    <svg
      onClick={props.onClick}
      viewBox="0 0 512 512"
      className="circle cursor-pointer w-8 h-8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="circle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#57ddff" />
          <stop offset="100%" stopColor="#c058f3" />
        </linearGradient>
      </defs>
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path>
    </svg>
  );
};

export default CircleIcon;
