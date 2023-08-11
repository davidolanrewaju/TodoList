type CheckedIconProps = {
  onClick: () => void;
};

const CheckedCircle = (props: CheckedIconProps) => {
  return (
    <svg
      onClick={props.onClick}
      className="check cursor-pointer"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="circle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#57ddff" />
          <stop offset="100%" stopColor="#c058f3" />
        </linearGradient>
      </defs>
      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
    </svg>
  );
};

export default CheckedCircle;
