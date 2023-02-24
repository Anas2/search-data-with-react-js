
import weblogo from '../images/noon-logo.svg'
import ae from '../images/ae.svg'
import './navbar.css'
import { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleGetData = () => {
    axios.get('https://fakestoreapi.com/products/')
      .then((res) => {
        console.log(res.data);
        setData(res.data);


      }).catch((err) => {
        console.log(err);

      })

  }
  useEffect(() => {
    handleGetData();
  }, []);

  const [searchFromArr, setSearch] = useState([])

  const inputFromUser = () => {

    setSearch([])

  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      // 👇 Get input value
      const keyword = event.target.value;
      const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(keyword)));

      setSearch(filtered);
    }
  };

  const cart = (e) => {
    console.log(e);
    navigate("cart", {
      state: e
    })
  }

  return (

    <div className="topnav">
      <Link to="/" ><img src={weblogo} width="80px" /></Link>
      <Link to="/" style={{ fontSize: '12px' }}><img src={ae} />Deliver To Dubia</Link>
      <div className="search-container">

        <input type="text" placeholder="What you are looking for?" name="search" onChange={inputFromUser} onKeyDown={handleKeyDown} />

      </div>
      <div className='lastOfNav'>
        <span>العربية</span>
        <span>|</span>
        <span>Sign in <img src='https://z.nooncdn.com/s/app/com/noon/icons/user_thin.svg' width={'16px'} /></span>
        <span >|</span>
        <span>Cart <img src='https://z.nooncdn.com/s/app/com/noon/icons/cart.svg' width={'20px'} /> </span>
      </div>
      <br />
      <br />
      <br />
      <div>
        {
          searchFromArr == [] ? true : searchFromArr.map((x, i) => {
            return (

              <div key={i}>
                <Container className='searchContainer'>
                  <Row>
                    <Col className='col left' >
                      <img src={x.image} width="100px" />
                    </Col>
                    <Col className='col right'>
                      <h6>{x.title}</h6>
                      <h6> Rs : {x.price}</h6>
                      <div className="navbtn"> <button onClick={() => { cart(x) }}>Add to cart</button></div>
                    </Col>
                  </Row>
                </Container>
              </div>
            )
          })
        }</div>
    </div>


  )

}

export default NavBar;