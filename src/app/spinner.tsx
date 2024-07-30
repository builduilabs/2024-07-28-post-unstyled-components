export function Spinner() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1a11 11 0 1011 11A11 11 0 0012 1zm0 19a8 8 0 118-8 8 8 0 01-8 8z"
        opacity={0.25}
      />
      <path d="M10.14 1.16a11 11 0 00-9 8.92A1.59 1.59 0 002.46 12a1.52 1.52 0 001.65-1.3 8 8 0 016.66-6.61A1.42 1.42 0 0012 2.69a1.57 1.57 0 00-1.86-1.53z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
