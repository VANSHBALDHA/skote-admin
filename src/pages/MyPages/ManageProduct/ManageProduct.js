import React, { useCallback, useEffect, useMemo, useState } from "react";
import withRouter from "../../../components/Common/withRouter";
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import {
  categoryData,
  productsData,
  brandData,
  certificateData,
} from "../../../common/data/MyFackData";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  FormFeedback,
  Label,
  Input,
  CardTitle,
} from "reactstrap";
import TableContainer from "../../../components/Common/TableContainer";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Dropzone from "react-dropzone";
import ViewProductModel from "./ViewProductModel";

const ManageProduct = () => {
  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const [isView, setIsView] = useState(false);
  const [viewProduct, setViewProduct] = useState(null);

  const [shortContent, setShortContent] = useState("");
  const [longContent, setLongContent] = useState("");

  const handleShortContentChange = (newContent) => {
    setShortContent(newContent);
    console.log("setShortContent", newContent);
  };

  const handleLongContentChange = (newContent) => {
    setLongContent(newContent);
    console.log("setLongContent", newContent);
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      [{ align: [] }],
      [{ color: [] }],
      ["code-block"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "video",
    "font",
    "size",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "code-block",
  ];

  const toggleModal = () => setModal(!modal);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: (currentProduct && currentProduct.id) || "",
      productCode: (currentProduct && currentProduct.productCode) || "",
      productName: (currentProduct && currentProduct.productName) || "",
      subSubCategoryName:
        (currentProduct && currentProduct.subSubCategoryName) || "",
      brandName: (currentProduct && currentProduct.brandName) || "",
      manufacturePartNumber:
        (currentProduct && currentProduct.manufacturePartNumber) || "",
      minimumPurchasedQuantity:
        (currentProduct && currentProduct.minimumPurchasedQuantity) || "",
      minimumStockQuantityWarning:
        (currentProduct && currentProduct.minimumStockQuantityWarning) || "",
      sellingPrice: (currentProduct && currentProduct.sellingPrice) || "",
      mrp: (currentProduct && currentProduct.mrp) || "",
      displayQuantity: (currentProduct && currentProduct.displayQuantity) || "",
      status: (currentProduct && currentProduct.status) || "active",
    },
    validationSchema: Yup.object({
      productCode: Yup.string().required("Please enter the product code"),
      productName: Yup.string().required("Please enter the product name"),
      subSubCategoryName: Yup.string().required(
        "Please select a sub-sub category"
      ),
      brandName: Yup.string().required("Please select a brand"),
      manufacturePartNumber: Yup.string().required(
        "Please enter the manufacturer part number"
      ),
      minimumPurchasedQuantity: Yup.number()
        .required("Please enter the minimum purchase quantity")
        .positive("Must be a positive number"),
      minimumStockQuantityWarning: Yup.number()
        .required("Please enter the minimum stock quantity warning")
        .positive("Must be a positive number"),
      sellingPrice: Yup.number()
        .required("Please enter the selling price")
        .positive("Must be a positive number"),
      mrp: Yup.number()
        .required("Please enter the MRP")
        .positive("Must be a positive number"),
      displayQuantity: Yup.number()
        .required("Please enter the display quantity")
        .positive("Must be a positive number"),
      status: Yup.string().required("Please select the status"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        console.log("Updating product:", values);
      } else {
        console.log("Adding new product:", values);
      }
      toggleModal();
    },
  });

  const columns = useMemo(
    () => [
      {
        Header: "Product Code",
        accessor: "productCode",
        Cell: ({ value }) => <div className="text-body fw-bold">{value}</div>,
      },
      {
        Header: "Product Name",
        accessor: "productName",
        filterable: true,
        Cell: ({ value }) => <div className="text-body fw-bold">{value}</div>,
      },
      {
        Header: "Display Quan.",
        accessor: "displayQuantity",
        filterable: true,
      },
      {
        Header: "Reserved Quan.",
        accessor: "reservedQuantity",
        filterable: true,
      },
      {
        Header: "Sales Quan.",
        accessor: "salesQuantity",
        filterable: true,
      },
      {
        Header: "Status",
        accessor: "status",
        filterable: true,
        Cell: ({ value }) => (
          <Badge color={value === "active" ? "success" : "danger"}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Badge>
        ),
      },
      {
        Header: "#",
        Cell: ({ row }) => {
          const { id } = row.original;
          return (
            <>
              <Button
                type="button"
                color="success"
                className="btn-rounded mb-2 me-2"
                style={{ width: "150px" }}
                onClick={() =>
                  navigate(
                    `/manage-products/feature-list/${row.original.productCode}`
                  )
                }
              >
                <i className="mdi mdi-plus me-1" />
                Add Features
              </Button>
            </>
          );
        },
      },
      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        Cell: ({ row }) => (
          <div className="d-flex gap-3">
            <Link
              to="#"
              className="text-success"
              onClick={() => handleViewClick(row.original)}
            >
              <i
                className="mdi mdi-eye-outline font-size-18"
                id="viewtooltip"
              ></i>
              <UncontrolledTooltip placement="top" target="viewtooltip">
                View
              </UncontrolledTooltip>
            </Link>
            <Link
              to="#"
              className="text-success"
              onClick={() => handleEditClick(row.original)}
            >
              <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
              <UncontrolledTooltip placement="top" target="edittooltip">
                Edit
              </UncontrolledTooltip>
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  const handleEditClick = (product) => {
    console.log("product", product);
    setCurrentProduct(product);
    setIsEdit(true);
    toggleModal();
  };

  const handleAddProduct = () => {
    setCurrentProduct(null);
    setIsEdit(false);
    toggleModal();
  };

  const handleViewClick = (product) => {
    console.log("product", product);
    setViewProduct(product);
    setIsView(true);
  };

  const handleViewClose = () => {
    setIsView(false);
  };

  const options = certificateData?.map((data) => ({
    value: data?.certificateName,
    label: data?.certificateName,
  }));

  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files) {
    files.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );

    setselectedFiles(files);
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function handleDelete(index) {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setselectedFiles(newFiles);
  }

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Product" breadcrumbItem="Manage Products" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={productsData}
                    isGlobalFilter={true}
                    customPageSize={10}
                    isAddProduct={true}
                    handleAddProduct={handleAddProduct}
                    className="custom-header-css"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>

          {/* Modal for Add/Edit Products */}
          <Modal
            isOpen={modal}
            toggle={toggleModal}
            backdrop="static"
            keyboard={false}
            size="xl"
            scrollable={true}
          >
            <ModalHeader toggle={toggleModal} tag="h4">
              {isEdit ? "Edit Product" : "Add Product"}
            </ModalHeader>
            <ModalBody>
              <form onSubmit={formik.handleSubmit}>
                <Row>
                  <CardTitle>Basic Information</CardTitle>
                  <p className="card-title-desc mb-4">
                    Fill all information below
                  </p>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">Product Code</Label>
                      <Input
                        name="productCode"
                        type="text"
                        placeholder="Insert Product Code"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productCode}
                        invalid={
                          formik.touched.productCode &&
                          formik.errors.productCode
                            ? true
                            : false
                        }
                      />
                      {formik.touched.productCode &&
                      formik.errors.productCode ? (
                        <FormFeedback type="invalid">
                          {formik.errors.productCode}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">Product Name</Label>
                      <Input
                        name="productName"
                        type="text"
                        placeholder="Insert Product Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productName}
                        invalid={
                          formik.touched.productName &&
                          formik.errors.productName
                            ? true
                            : false
                        }
                      />
                      {formik.touched.productName &&
                      formik.errors.productName ? (
                        <FormFeedback type="invalid">
                          {formik.errors.productName}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">
                        Select Sub-sub Category
                      </Label>
                      <Input
                        name="subSubCategoryName"
                        type="select"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.subSubCategoryName}
                        invalid={
                          formik.touched.subSubCategoryName &&
                          formik.errors.subSubCategoryName
                            ? true
                            : false
                        }
                      >
                        <option value="" label="Select sub-sub category" />
                        {categoryData.map((data) => (
                          <option key={data.id} value={data.id}>
                            {data.categoryName}
                          </option>
                        ))}
                      </Input>
                      {formik.touched.subSubCategoryName &&
                      formik.errors.subSubCategoryName ? (
                        <FormFeedback type="invalid">
                          {formik.errors.subSubCategoryName}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">Select Brand</Label>
                      <Input
                        name="brandName"
                        type="select"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.brandName}
                        invalid={
                          formik.touched.brandName && formik.errors.brandName
                            ? true
                            : false
                        }
                      >
                        <option value="" label="Select brand" />
                        {brandData.map((data) => (
                          <option key={data.id} value={data.id}>
                            {data.brandName}
                          </option>
                        ))}
                      </Input>
                      {formik.touched.brandName && formik.errors.brandName ? (
                        <FormFeedback type="invalid">
                          {formik.errors.brandName}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">
                        Manufacturer Part No.
                      </Label>
                      <Input
                        name="manufacturePartNumber"
                        type="text"
                        placeholder="Insert Manufacturer Part No."
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.manufacturePartNumber}
                        invalid={
                          formik.touched.manufacturePartNumber &&
                          formik.errors.manufacturePartNumber
                            ? true
                            : false
                        }
                      />
                      {formik.touched.manufacturePartNumber &&
                      formik.errors.manufacturePartNumber ? (
                        <FormFeedback type="invalid">
                          {formik.errors.manufacturePartNumber}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">
                        Minimum Purchase Quantity
                      </Label>
                      <Input
                        name="minimumPurchasedQuantity"
                        type="number"
                        placeholder="Insert Purchase Quantity"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.minimumPurchasedQuantity}
                        invalid={
                          formik.touched.minimumPurchasedQuantity &&
                          formik.errors.minimumPurchasedQuantity
                            ? true
                            : false
                        }
                      />
                      {formik.touched.minimumPurchasedQuantity &&
                      formik.errors.minimumPurchasedQuantity ? (
                        <FormFeedback type="invalid">
                          {formik.errors.minimumPurchasedQuantity}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">
                        Minimum Stock Qty. Warning
                      </Label>
                      <Input
                        name="minimumStockQuantityWarning"
                        type="number"
                        placeholder="Insert Minimum Stock Warning"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.minimumStockQuantityWarning}
                        invalid={
                          formik.touched.minimumStockQuantityWarning &&
                          formik.errors.minimumStockQuantityWarning
                            ? true
                            : false
                        }
                      />
                      {formik.touched.minimumStockQuantityWarning &&
                      formik.errors.minimumStockQuantityWarning ? (
                        <FormFeedback type="invalid">
                          {formik.errors.minimumStockQuantityWarning}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">
                        Selling Price (Per Item)
                      </Label>
                      <Input
                        name="sellingPrice"
                        type="number"
                        placeholder="Insert Selling Price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.sellingPrice}
                        invalid={
                          formik.touched.sellingPrice &&
                          formik.errors.sellingPrice
                            ? true
                            : false
                        }
                      />
                      {formik.touched.sellingPrice &&
                      formik.errors.sellingPrice ? (
                        <FormFeedback type="invalid">
                          {formik.errors.sellingPrice}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">MRP (Per Item)</Label>
                      <Input
                        name="mrp"
                        type="number"
                        placeholder="Insert MRP"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mrp}
                        invalid={
                          formik.touched.mrp && formik.errors.mrp ? true : false
                        }
                      />
                      {formik.touched.mrp && formik.errors.mrp ? (
                        <FormFeedback type="invalid">
                          {formik.errors.mrp}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">Display Quantity</Label>
                      <Input
                        name="displayQuantity"
                        type="number"
                        placeholder="Insert Display Quantity"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.displayQuantity}
                        invalid={
                          formik.touched.displayQuantity &&
                          formik.errors.displayQuantity
                            ? true
                            : false
                        }
                      />
                      {formik.touched.displayQuantity &&
                      formik.errors.displayQuantity ? (
                        <FormFeedback type="invalid">
                          {formik.errors.displayQuantity}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">Select Certificate</Label>
                      <Select
                        classNamePrefix="select2-selection"
                        placeholder="Choose Certificate"
                        options={options}
                        isMulti
                      />
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div className="mb-3">
                      <Label className="form-label">Status</Label>
                      <Input
                        name="status"
                        type="select"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.status}
                        invalid={
                          formik.touched.status && formik.errors.status
                            ? true
                            : false
                        }
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </Input>
                      {formik.touched.status && formik.errors.status ? (
                        <FormFeedback type="invalid">
                          {formik.errors.status}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <CardTitle>Product Description</CardTitle>
                  <p className="card-title-desc mb-4">
                    Fill all information below
                  </p>
                  <Col className="col-12 mb-5">
                    <div className="mb-3">
                      <Label className="form-label">Short Discription</Label>
                      <ReactQuill
                        value={shortContent}
                        theme="snow"
                        onChange={handleShortContentChange}
                        modules={quillModules}
                        formats={quillFormats}
                        style={{ height: "300px" }}
                        placeholder="Enter your content...."
                        className=""
                      />
                    </div>
                  </Col>
                  <Col className="col-12 mb-5">
                    <div className="mb-3">
                      <Label className="form-label">Long Discription</Label>
                      <ReactQuill
                        value={longContent}
                        theme="snow"
                        onChange={handleLongContentChange}
                        modules={quillModules}
                        formats={quillFormats}
                        style={{ height: "300px" }}
                        placeholder="Enter your content...."
                        className=""
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <CardTitle>Product Images</CardTitle>
                  <p className="card-title-desc mb-4">
                    Fill all information below
                  </p>
                  <Col className="col-6 mb-5">
                    <div className="mb-3">
                      <Label className="form-label">
                        Upload Product Images
                      </Label>
                      <Dropzone
                        onDrop={(acceptedFiles) => {
                          handleAcceptedFiles(acceptedFiles);
                        }}
                      >
                        {({ getRootProps, getInputProps }) => (
                          <div className="dropzone">
                            <div
                              className="dz-message needsclick"
                              {...getRootProps()}
                            >
                              <input {...getInputProps()} />
                              <div className="dz-message needsclick">
                                <div className="mb-3">
                                  <i className="display-4 text-muted bx bxs-cloud-upload" />
                                </div>
                                <h4>Drop files here or click to upload.</h4>
                              </div>
                            </div>
                          </div>
                        )}
                      </Dropzone>
                    </div>
                  </Col>
                  <Col className="col-6">
                    <Label className="form-label">Uploaded Images</Label>
                    <div className="dropzone-previews" id="file-previews">
                      {selectedFiles.map((f, i) => {
                        return (
                          <Card
                            className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                            key={i + "-file"}
                          >
                            <div className="p-2">
                              <Row className="align-items-center">
                                <Col className="col-auto">
                                  <img
                                    data-dz-thumbnail=""
                                    height="80"
                                    className="avatar-sm rounded bg-light"
                                    alt={f.name}
                                    src={f.preview}
                                  />
                                </Col>
                                <Col>
                                  <Link
                                    to="#"
                                    className="text-muted font-weight-bold"
                                  >
                                    {f.name}
                                  </Link>
                                  <p className="mb-0">
                                    <strong>{f.formattedSize}</strong>
                                  </p>
                                </Col>
                                <Col className="col-auto">
                                  <button
                                    type="button"
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(i)}
                                  >
                                    Delete
                                  </button>
                                </Col>
                              </Row>
                            </div>
                          </Card>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-end">
                      <Button type="submit" color="success">
                        {isEdit ? "Update" : "Save"}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </form>
            </ModalBody>
          </Modal>

          {/* Modal for View Products */}
          <ViewProductModel
            viewProduct={viewProduct}
            isView={isView}
            handleViewClick={handleViewClick}
            handleViewClose={handleViewClose}
          />
        </Container>
      </div>
    </>
  );
};

export default withRouter(ManageProduct);
