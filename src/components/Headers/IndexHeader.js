/*eslint-disable*/
import React, { useState } from "react";

// reactstrap components
import { Container, Input, Button } from "reactstrap";

// Redirect to page
import { Redirect } from 'react-router-dom';
import OtherComponent from "components/OtherComponent";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// core components
export default function IndexHeader() {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Gửi giá trị inputValue đi tới nơi bạn muốn (ví dụ: API)
    console.log('Giá trị đã gửi:', inputValue);
    const product = { id: 1, name: 'Product 1' };
    history.push('/detail', { product });
  };

  return (
    <>
      <div className="page-header section-dark" style={{ backgroundImage: "url(" + require("assets/img/antoine-barres.jpg") + ")", }}>
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">AIQuest</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Nhập thông tin"
                value={inputValue}
                onChange={handleChange}
              />

              <Button type="submit">Press me pls</Button>
            </form>

            <h2 className="presentation-subtitle text-center">Languages: english, vietnameses, france, ...</h2>
          </Container>
        </div>
        <h6 className="category category-absolute"> Designed and coded by QuangKhanh</h6>
      </div>
    </>
  );
}