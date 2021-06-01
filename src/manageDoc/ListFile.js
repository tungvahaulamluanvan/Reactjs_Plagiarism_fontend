import React, { useState } from "react";
import { Link } from "react-router-dom";
import SiteBar from "../siteBar/SiteBar";
function ListFile(props) {
  //  const [selectedFile, setSelectedFile] = useState();

  //   const { listFile, upload} = props;
  const setUploadFile = (e) => {
    let file = e.target.files[0];
    props.addFile(file);
    props.uploadFile(file);
  };
  // const upload =  () => {

  // }
  return (
    <div>
      <div className="add-document">
                  <form action="">
                    <button type="submit" className="btn-updoc">
                      <i className="fa fa-folder-open-o"></i>Thêm luận văn
                    </button>
                    <input
                      type="file"
                      name="file"
                      onChange={setUploadFile}
                      enctype="multipart/form-data"
                    ></input>
                  </form>
      </div>
      <div className="container1 p-30">
        <div className="row">
          <div className="col-md-12 main-datatable">
            <div className="card_body">
              <div className="row d-flex">
              </div>
              <div className="overflow-x">
                <table
                  style={{ width: "100%" }}
                  id="filtertable"
                  className="table cust-datatable dataTable no-footer"
                >
                  <thead>
                    <tr>
                      <th style={{ minWidth: "50px" }}>ID</th>
                      <th style={{ minWidth: "150px" }}>Tên tài liệu</th>
                      <th style={{ minWidth: "150px" }}>Trạng thái</th>
                      <th style={{ minWidth: "100px" }}>Độ tương đồng</th>
                      <th style={{ minWidth: "100px" }}>Ngày tải lên</th>
                      <th style={{ minWidth: "150px" }}>Đã được train</th>
                      <th style={{ minWidth: "150px" }}>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.listFile.map((file) => (
                      <tr>
                        <td>{file.id}</td>
                        <td>{file.name}</td>
                        <td>
                          <span className="mode mode_process">
                            {file.status}
                          </span>
                        </td>
                        <td>90%</td>
                        <td>{file.uploadDate}</td>
                        <td>
                          <span className="mode mode_on">Active</span>
                        </td>
                        <td>
                          <div className="btn-group">
                            <a
                              className="dropdown-toggle dropdown_icon"
                              data-toggle="dropdown"
                            >
                              <i className="fa fa-cloud-download"></i>
                            </a>
                          </div>
                          <span className="actionCust">
                            <a href="#">
                              <i className="fa fa-envelope-o"></i>
                            </a>
                          </span>
                          <div className="btn-group">
                            <a
                              class="dropdown-toggle dropdown_icon"
                              data-toggle="dropdown"
                            >
                              <i class="fa fa-ellipsis-h"></i>
                            </a>
                            <ul className="dropdown-menu dropdown_more">
                              <li >
                                <a href="#" target="_black" onClick ={() => props.deleteFile(file.id)}>
                                  <i className="fa fa-trash"></i> Xóa
                                </a>
                              </li>
                              <li>
                                <Link to={{pathname: "detail/" + file.name}}  target="_black">
                                  <i className="fa fa-info"></i>Chi tiết
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ListFile;
