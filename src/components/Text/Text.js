import "./Text.css";

const Text = (props) => {
  function renderText(text) {
    return text.split("").map((elem, i) => (
      <span className="char" key={i}>
        {elem}
      </span>
    ));
  }
  return <>{renderText(props.text)}</>;
};

export default Text;
