import React, { Component } from "react";
import { Modal, Button } from "bootstrap-4-react";
import CheckBoxComp from "./CheckBoxComp";
import "./modal.css";

export default class ModalComp extends Component {

  //   const { state = {} } = location;
  //   const { modal } = state
  // modalData
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  toggleCheckbox = (label) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  render() {
    let id = this.props.modalId;
    return (
      <div>
        {/* Button trigger Modal */}
        <Button
          style={{backgroundColor: this.props.btnColor}}
          primary
          data-toggle="modal"
          // used literals because i have add # to get the target modal id dynamically
          data-target={`#${id}`}
        >
          {this.props.modalData.btnText}
        </Button>

        {/* Modal */}
        <Modal id={id} fade>
          <Modal.Dialog centered>
            <Modal.Content>
              <Modal.Header>
                <Modal.Title>{this.props.modalData.modalTitle}</Modal.Title>
                <Modal.Close>
                  <span aria-hidden="true">&times;</span>
                </Modal.Close>
              </Modal.Header>
              <Modal.Body>{this.props.modalData.modalBody}</Modal.Body>
              <Modal.Footer>
                <div className="row">
                  <div className="col-md-3">
                    <CheckBoxComp
                      label="Only Even"
                      handleCheckboxChange={this.toggleCheckbox}
                      float="left"
                    />
                  </div>
                  <div className="col-md-9">
                    <Button
                      className="ml-2"
                      float="right"
                      onClick={() =>
                        console.log("wokring 1", this.props.modalData)
                      }
                      primary
                    >
                      {this.props.modalData.btn1InModal}
                    </Button>
                    <Button
                      className="ml-2"
                      float="right"
                      onClick={() =>
                        console.log("wokring 2", this.props.modalData)
                      }
                      primary
                    >
                      {this.props.modalData.btn2InModal}
                    </Button>
                    <Button
                      className="ml-2"
                      float="right"
                      primary
                      data-dismiss="modal"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </Modal.Footer>
            </Modal.Content>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}
