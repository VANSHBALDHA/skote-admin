import React from "react";
import withRouter from "../../../components/Common/withRouter";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const Legal = () => {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Legal" breadcrumbItem="Legal Pages" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  {/* <TableContainer
                columns={columns}
                data={users}
                isGlobalFilter={true}
                isAddUserList={true}
                handleUserClick={handleUserClicks}
                customPageSize={10}
                className="custom-header-css"
              /> */}
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
