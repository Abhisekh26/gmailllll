import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

function Inbox() {

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        height: "91vh",
        display: "flex",
        marginLeft: '25rem'
      }}
    >
      <Card
        style={{
          width: "105rem",
          backgroundColor: "#f5f5f5",
          marginLeft: "16px",
          height: "700px",
        }}
      >
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            <strong>Inbox</strong>
          </Card.Title>
          <Card.Text>
          hello brother
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Inbox;