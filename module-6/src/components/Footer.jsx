import sadik from "../assets/images/sadik.jpeg";

export default function Footer() {
  return (
    <div className="footer">
      <img src={sadik} height={400} alt="Sadikur Sadik" />
      <div className="about">
        <h3>ABOUT ME</h3>
        <p>Hello,</p>
        <p>
          I'm Sadikur Sadik, working as a Senior Software Engineer. I mostly
          worked as a backend developer in my entire carrier.
        </p>
        <p>
          Nowadays I'm learning React to enhance my frontend skill, so far I'm
          loving it. It's really amazing.
        </p>
      </div>
    </div>
  );
}
