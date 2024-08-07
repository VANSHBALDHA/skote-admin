import React from "react"
import PropTypes from "prop-types"
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
} from "reactstrap"
import img7 from "../../../assets/images/product/img-7.png"
import img4 from "../../../assets/images/product/img-4.png"

const EcommerceOrdersTrackingModal = props => {
  const { isOpen, toggle } = props
  return (
    <Modal
      isOpen={isOpen}
      role="dialog"
      autoFocus={true}
      centered={true}
      className="exampleModal"
      tabIndex="-1"
      toggle={toggle}
      size="xl"
      scrollable={true}
    >
      <div className="modal-content">
        <ModalHeader toggle={toggle}>Order Tracking Details</ModalHeader>
        <ModalBody>
          <p className="mb-2">
            Product id: <span className="text-primary">#SK2540</span>
          </p>
          <p className="mb-4">
            Billing Name: <span className="text-primary">Neal Matthews</span>
          </p>

          <div className="table-responsive">
            <Table className="table align-middle table-nowrap">
              <thead>
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Dispatch Qty</th>
                  <th scope="col">Remaining Qty</th>
                  <th scope="col">Tracking Number</th>
                  <th scope="col">Tracking Details</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div>
                      <img src={img7} alt="" className="avatar-sm"/>
                    </div>
                  </th>
                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                      <p className="text-muted mb-0">$ 225 x 1</p>
                    </div>
                  </td>
                  <td>100</td>
                  <td>
                    <div style={{ width: "120px" }}>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <button
                            type="button"
                            className="btn btn-primary"
                          >+
                          </button>
                        </div>
                        <Input
                          type="text"
                          value="0"
                          name="demo_vertical"
                          readOnly
                        />
                        <div className="input-group-append">
                          <button type="button" className="btn btn-primary"
                          >-</button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>100</td>
                  <td>1Z9999999999999999</td>
                  <td>In Transit</td>
                  <td>$ 255</td>
                </tr>
                <tr>
                  <th scope="row">
                    <div>
                      <img src={img4} alt="" className="avatar-sm"/>
                    </div>
                  </th>
                  <td>
                    <div>
                      <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                      <p className="text-muted mb-0">$ 145 x 1</p>
                    </div>
                  </td>
                  <td>100</td>
                  <td>
                    <div style={{ width: "120px" }}>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <button
                            type="button"
                            className="btn btn-primary"
                          >+
                          </button>
                        </div>
                        <Input
                          type="text"
                          value="0"
                          name="demo_vertical"
                          readOnly
                        />
                        <div className="input-group-append">
                          <button type="button" className="btn btn-primary"
                          >-</button>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>100</td>
                  <td>9400110200881000123456</td>
                  <td>Delivered</td>
                  <td>$ 145</td>
                </tr>
                <tr className="">
                  <td colSpan="3">
                    <h6 className="m-0 text-right">Sub Total:</h6>
                  </td>
                  <td>
                    $ 400
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <h6 className="m-0 text-right">Shipping:</h6>
                  </td>
                  <td>
                    Free
                  </td>
                </tr>
                <tr>
                  <td colSpan="3">
                    <h6 className="m-0 text-right">Total:</h6>
                  </td>
                  <td>
                    $ 400
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </div>
    </Modal>
  )
}

EcommerceOrdersTrackingModal.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default EcommerceOrdersTrackingModal
