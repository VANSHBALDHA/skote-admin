import React from "react";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import withRouter from "../../../components/Common/withRouter";
import "./index.css";
import { useNavigate } from "react-router-dom";

const UserQuoteList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Quotes" breadcrumbItem="Customer Quote List" />
          <Row>
            <Col lg="12">
              <Button
                type="button"
                color="primary"
                className="btn mb-2 me-2"
                onClick={() => navigate("/manage-request/quote")}
              >
                <i class="bx bx-arrow-back me-2"></i>
                Back To Quote
              </Button>
              <div class="product_card">
                <div class="product_img">
                  <img
                    src="https://market.thingpark.com/media/catalog/product/cache/496f4b8029935cd1a435219c05e3e604/s/m/smart-energy-iot-new-boundary-technologies-1024x665-removebg-preview.jpg"
                    class="w-100"
                  />
                </div>
                <div class="product_detail">
                  <span class="product_stock">In Stock</span>
                  <p>
                    New Boundary Technologies | RemoteVista IoT Web Application
                    Starter Kit
                  </p>
                  <div class="product_info_inr">
                    <div class="product_sku">
                      <h3>SKU: 2011-16369</h3>
                    </div>
                    <div class="product_price_info">
                      <div class="row">
                        <div class="col-md-5">
                          <div class="product_price">
                            <p>Original price</p>
                            <h3>€995.00</h3>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div class="your_price position-relative">
                            <input
                              type="text"
                              class="form-control "
                              placeholder="Your Price"
                            />
                            <i class="bx bx-info-circle your_price_input"></i>
                            {/* <i
                              class="bx bx-info-circle"
                              className="your_price_input"
                            ></i> */}
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="product_qty">
                            <span class="product_qty_counter">
                              <i class="bx bx-plus"></i>
                            </span>
                            <input type="text" class="form-control" value="2" />
                            <span class="product_qty_counter">
                              <i class="bx bx-plus"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="customer_review mt-4">
                    <textarea
                      name=""
                      rows="4"
                      class="form-control"
                      id=""
                      placeholder="Your comment"
                    ></textarea>
                  </div>
                  <div className="text-sm-end mt-4">
                    <Button
                      type="button"
                      color="success"
                      className="btn-secondary  mb-2 me-2"
                      onClick={() => navigate("/manage-request/quote")}
                    >
                      Update Quote
                    </Button>
                  </div>
                </div>
                <button class="del_btn btn">
                  <i class="bx bx-trash-alt font-size-22"></i>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default withRouter(UserQuoteList);
