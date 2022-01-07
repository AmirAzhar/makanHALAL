// Styles
import searchStyles from "/styles/FilterOptions.module.css";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import { HiFilter } from "react-icons/hi";

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
            <Form.Select
              size="sm"
              className={`shadow-none ${searchStyles["filter__drop"]}`}
            >
              <option>Nearest</option>
              <option>Best Rating</option>
              <option>Open til</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>Show me:</Form.Label>
            <Form.Select
              size="sm"
              className={`shadow-none ${searchStyles["filter__drop"]}`}
            >
              <option>All</option>
              <option>Open</option>
            </Form.Select>
          </Col>
          <Col className={searchStyles["filter__button"]}>
            <Button variant="outline-dark">
              <HiFilter className={searchStyles["filter__icon"]} />
              Filter
            </Button>
          </Col>
        </Row>
      </Container>
    </Form.Group>
  </Form>
);

export default FilterOptions;
