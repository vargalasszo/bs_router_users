import { Button, Col, Container, Row } from 'react-bootstrap';

export function Home() {
    return <>
      <Container>
        <Row>
          <Col>
          <h1>Home</h1>
          <Button as="a" variant="primary">
              Button as link
            </Button>
          </Col>
      </Row>
      </Container>
    </>
  }
