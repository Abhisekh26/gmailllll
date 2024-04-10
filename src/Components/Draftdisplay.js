import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { EmailSliceActions } from "../Data/Emailstore";
const Draftdisplay = (props) => {
  const dispatch = useDispatch();
  const handleItemClick = () => {
    dispatch(EmailSliceActions.clickedUpdate(props.id));
  };

  const handleDelete = (id) => {
    dispatch(EmailSliceActions.deleteMail(id));
  };

  console.log(props);

  return (
    <div style={{ marginBottom: "20px" }}>
      <ListGroup variant="flush">
        <ListGroup.Item
          action
          variant={props.variant}
          onClick={handleItemClick}
        >
          <Accordion variant="dark">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <Container>
                  <Row style={{ alignItems: "center" }}>
                    <Col xs={6} md={4} style={{ padding: "8px" }}>
                      <strong>Email:</strong> {props.email}
                    </Col>
                    <Col xs={6} md={4} style={{ padding: "8px" }}>
                      <strong>Subject:</strong> {props.subject}
                    </Col>
                    <Col
                      xs={12}
                      md={4}
                      style={{ padding: "8px", textAlign: "right" }}
                    >
                      <Button
                        variant="secondary"
                        onClick={() => handleDelete(props.id)}
                      >
                      <strong>Delete</strong>
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Accordion.Header>
              <Accordion.Body>{props.description}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default Draftdisplay;
