import { Counter } from "../components/counter";

export function HomePage() {
  return (
    <>
      <p>Home</p>
      <Counter />
      <iframe
        className="rumble"
        width="640"
        height="360"
        src="https://rumble.com/embed/v15iztg/?pub=4"
        style={styles.iframe}
        allowfullscreen
      />
    </>
  );
}

const styles = {
  iframe: {
    border: "none",
  },
};
