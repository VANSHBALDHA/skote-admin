import React, { useMemo } from "react";
import withRouter from "../../../components/Common/withRouter";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TableContainer from "../../../components/Common/TableContainer";
import { newProductRequest } from "../../../common/data/MyFackData";

const Banner = () => {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        disableFilters: true,
        Cell: ({ value }) => <div className="text-body fw-bold">{value}</div>,
      },
      {
        Header: "Username",
        accessor: "customerName",
        disableFilters: true,
        Cell: ({ value }) => <div className="text-body fw-bold">{value}</div>,
      },
      {
        Header: "Company Name",
        accessor: "companyName",
        disableFilters: true,
      },
      {
        Header: "Product Name",
        accessor: "productName",
        disableFilters: true,
      },
      {
        Header: "Brand Name",
        accessor: "brandName",
        disableFilters: true,
      },
      {
        Header: "Contact no.",
        accessor: "contact",
        disableFilters: true,
      },
      // {
      //   Header: "Action",
      //   accessor: "action",
      //   disableFilters: true,
      //   Cell: ({ row }) => {
      //     return (
      //       <ul className="list-unstyled hstack gap-1 mb-0">
      //         <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
      //           <Link to="#" className="btn btn-sm btn-soft-primary">
      //             <i className="mdi mdi-eye-outline" id="viewtooltip"></i>
      //           </Link>
      //         </li>
      //         <UncontrolledTooltip placement="top" target="viewtooltip">
      //           View
      //         </UncontrolledTooltip>
      //       </ul>
      //     );
      //   },
      // },
    ],
    []
  );

  document.title = "Banner Section | Admin";

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Banner" breadcrumbItem="Banner Section" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  {/* <TableContainer
                    columns={columns}
                    data={newProductRequest}
                    isGlobalFilter={true}
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

export default withRouter(Banner);
