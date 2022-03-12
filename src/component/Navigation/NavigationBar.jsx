import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import "./Navigation.css";
const NavigationBar = () => {
  return (
    <div>
      {/* <img src="./OLIVA.jpg" alt="img break" /> */}
      <a href="">Dress</a>
      <a href="">Cosmatic</a>
      <a href="">Hand Bag</a>
      <a href="">Footware</a>
      <a href="">Jewellery</a>
      <input type="text" placeholder="Search" />
      <button>Search</button>
      <a href="">Loging</a>
      <a href="">Cart</a>
      <>
        {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
          (variant) => (
            <DropdownButton
              // as={ButtonGroup}
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          )
        )}
      </>
    </div>
  );
};

export default NavigationBar;
