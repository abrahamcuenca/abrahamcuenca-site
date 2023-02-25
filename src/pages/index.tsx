import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Container, Row, Col, Button } from 'reactstrap';

const IndexPage: React.FC<PageProps> = () => {
  return (
      <Container>
          <Row>
              <Col>
                  <p>Hello, World!</p>
                  <Button color="primary">This is a button</Button>
              </Col>
          </Row>
      </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
