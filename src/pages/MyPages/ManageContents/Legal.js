import React from "react";
import withRouter from "../../../components/Common/withRouter";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Table,
  UncontrolledTooltip,
} from "reactstrap";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Legal" breadcrumbItem="Legal Pages" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Page Name</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-primary">Terms & Conditions</td>
                          <td>Active</td>
                          <td>
                            <div className="d-flex gap-3">
                              <Link to="#" className="text-success">
                                <i
                                  className="mdi mdi-pencil font-size-18"
                                  id="edittooltip"
                                />
                                <UncontrolledTooltip
                                  placement="top"
                                  target="edittooltip"
                                >
                                  Edit
                                </UncontrolledTooltip>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td className="text-primary">Privacy Policy</td>
                          <td>Active</td>
                          <td>
                            <div className="d-flex gap-3">
                              <Link to="#" className="text-success">
                                <i
                                  className="mdi mdi-pencil font-size-18"
                                  id="edittooltip"
                                />
                                <UncontrolledTooltip
                                  placement="top"
                                  target="edittooltip"
                                >
                                  Edit
                                </UncontrolledTooltip>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td className="text-primary">
                            Refund & Replacement Policy
                          </td>
                          <td>Active</td>
                          <td>
                            <div className="d-flex gap-3">
                              <Link to="#" className="text-success">
                                <i
                                  className="mdi mdi-pencil font-size-18"
                                  id="edittooltip"
                                />
                                <UncontrolledTooltip
                                  placement="top"
                                  target="edittooltip"
                                >
                                  Edit
                                </UncontrolledTooltip>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withRouter(Legal);
