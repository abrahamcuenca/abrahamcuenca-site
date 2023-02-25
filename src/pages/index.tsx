import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Container, Row, Col, Button } from 'reactstrap';

import photo from '../images/abe.jpg';

const IndexPage: React.FC<PageProps> = () => {
  return (
      <Container>
          <Row>
              <Col>
                  <h1>Hello, World!</h1>
              </Col>
          </Row>
          <Row>
              <Col>
                  <img src={photo} className="img-fluid img-thumbnail rounded-5"/>
              </Col>
          </Row>
          <Row className="mt-1 mb-1_5">
              <Col>
                  <Button color="primary">This is a button</Button>
              </Col>
          </Row>
      </Container>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
