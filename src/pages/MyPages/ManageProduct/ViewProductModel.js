import React from "react";
import {
  CardTitle,
  Col,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

const ViewProductModel = ({
  viewProduct,
  isView,
  handleViewClick,
  handleViewClose,
}) => {
  return (
    <>
      <Modal
        isOpen={isView}
        toggle={handleViewClick}
        backdrop="static"
        keyboard={false}
        size="xl"
        scrollable={true}
      >
        <ModalHeader toggle={handleViewClose} tag="h4">
          Product Details
        </ModalHeader>
        <ModalBody>
          <Row>
            <CardTitle>Basic Information</CardTitle>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Product Code</Label>
                <Input type="text" value={viewProduct?.productCode} disabled />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Product Name</Label>
                <Input type="text" value={viewProduct?.productName} disabled />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Sub-sub Category</Label>
                <Input type="text" value="Electronics" disabled />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Select Brand</Label>
                <Input
                  type="text"
                  value={viewProduct?.subSubCategoryName || "Dell"}
                  disabled
                />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Manufacturer Part No.</Label>
                <Input
                  type="text"
                  value={viewProduct?.manufacturePartNumber}
                  disabled
                />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Minimum Purchase Quantity</Label>
                <Input
                  type="text"
                  value={viewProduct?.minimumPurchasedQuantity}
                  disabled
                />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Minimum Stock Qty. Warning</Label>
                <Input
                  type="text"
                  value={viewProduct?.minimumStockQuantityWarning}
                  disabled
                />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Selling Price (Per Item)</Label>
                <Input type="text" value={viewProduct?.sellingPrice} disabled />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">MRP (Per Item)</Label>
                <Input type="text" value="3000" disabled />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Display Quantity</Label>
                <Input
                  type="text"
                  value={viewProduct?.displayQuantity}
                  disabled
                />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Certificates</Label>
                <Input type="text" value="" disabled />
              </div>
            </Col>
            <Col className="col-4">
              <div className="mb-3">
                <Label className="form-label">Status</Label>
                <Input type="text" value={viewProduct?.status} disabled />
              </div>
            </Col>
          </Row>
          <Row>
            <CardTitle>Product Description</CardTitle>
            <Col className="col-6">
              <div className="mb-3">
                <Label className="form-label">Short Discription</Label>
                <textarea
                  className="form-control"
                  id="productdesc"
                  rows="5"
                  value={viewProduct?.shortDescription}
                  disabled
                />
              </div>
            </Col>
            <Col className="col-6">
              <div className="mb-3">
                <Label className="form-label">Long Discription</Label>
                <textarea
                  className="form-control"
                  id="productdesc"
                  rows="5"
                  value={viewProduct?.longDescription}
                  disabled
                />
              </div>
            </Col>
          </Row>
          <Row>
            <CardTitle>Product Images</CardTitle>
            <Col className="col-6 mb-5">
              <div className="mb-3">
                <Label className="form-label">Uploaded Product Images</Label>
                <img src="https://tse1.mm.bing.net/th?id=OIP.2wTlnzhSr-LUVkJyWxYdhQHaEK&pid=Api&rs=1&c=1&qlt=95&w=215&h=120"/>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ViewProductModel;
