import React from "react";
import ModalComp from "./components/ModalComp";

const MainScreen = () => {
    //data for modal A
    let modalDataA = {
        btnText: 'Button A',
        modalTitle: 'Modal title AAAAA',
        modalBody:'Modal body text goes here AAAA.',
        btn1InModal : 'All Contacts',
        btn2InModal :'US Contacts',
    }
    // data for modal B
    let modalDataB = {
        btnText: 'Button B',
        modalTitle: 'Modal title BBBBB',
        modalBody:'Modal body text goes here BBBB.',
        btn1InModal : 'All Contacts',
        btn2InModal :'US Contacts',
    }
  return (
    <div className="mx-auto mainScreenDiv">
      {/* Modal A */}
      <div className="mr-5">
        <ModalComp btnColor={'#46139f'}  modalId='ModalA' modalData={modalDataA} />
      </div>
      {/* Modal B */}
      <div className="ml-5">
        <ModalComp modalId='ModalB' modalData={modalDataB} />
      </div>
    </div>
  );
};

export default MainScreen;
