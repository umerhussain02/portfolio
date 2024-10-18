import "./loader.css";

const Loader = () => {
  return (
    <>
      <div className="loader-body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="loader-base"></div>

        <div className="loader-face"></div>
      </div>

      <h1>Loading</h1>
    </>
  );
};

export default Loader;
