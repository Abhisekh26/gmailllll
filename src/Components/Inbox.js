import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";

import Inboxdisplay from "./Inboxdisplay";


function Inbox() {
  const items = useSelector((state) => state.emailState.items);
  const userEmail = useSelector((state) => state.emailState.userMail);
  console.log(items)
  return (
  
      
    <div
      style={{
        backgroundColor: "#f0f0f0",   
        height: "91vh",
        display: "flex",
        // marginLeft: '25rem'
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
          {items.map((item) => {
              if (userEmail === item.sendEmailTo && item.draft === false) {
                return (
                  <Inboxdisplay
                    key={item.id}
                    id={item.id}
                    variant={item.clicked}
                    email={item.sendEmailFrom}
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
export default Inbox;