export default function SvgFilters() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feOffset dx="6" dy="-6" />
          <feGaussianBlur stdDeviation="5" result="offset-blur" />

          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />

          <feFlood floodColor="#000" floodOpacity="0.35" result="color" />

          <feComposite operator="in" in="color" in2="inverse" result="shadow" />

          <feComposite in="SourceGraphic" in2="shadow" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
