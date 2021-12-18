import searchStyles from "/styles/FilterOptions.module.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const FilterOptions = () => (
  <Form>
    <Form.Group>
      <Container>
        <Row>
          <Form.Control
            className={searchStyles["search-bar"]}
            size="lg"
            type="text"
            placeholder="Search for locations"
          />
        </Row>
        <Row className="mt-4">
          <Col>
            <Form.Label>Sort by:</Form.Label>
            <Form.Select size="sm">
              <option>Nearest</option>
              <option>Best Rating</option>
              <option>Opening Hours</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Show me:</Form.Label>
            <Form.Select size="sm">
              <option>All</option>
              <option>Open</option>
            </Form.Select>
          </Col>
          <Col className={searchStyles["filter__button"]}>
            <Button variant="outline-dark">Filter</Button>
          </Col>
        </Row>
      </Container>
    </Form.Group>
  </Form>
);

export default FilterOptions;
