import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Sentboxdisplay from "./Sentboxdisplay";
const Send = () => {
  const items = useSelector((state) => state.emailState.items);
  const userEmail = useSelector((state) => state.emailState.userMail);
  console.log(items)
  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
        height: "91vh",
        display: "flex",
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
            <strong>Send</strong>
          </Card.Title>
          <Card.Text>
            {items.map((item) => {
              if (userEmail === item.sendEmailFrom && item.draft === false) {
                return (
                  <Sentboxdisplay
                    key={item.id}
                    id={item.id}
                    variant={item.clicked}
                    email={item.sendEmailTo}
                    subject={item.Subject}
                    description={item.Description}
                  />
                );
              }
            })}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Send;