import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const Navbar = styled.nav`
  background-color: #eeeeee;
  box-sizing: border-box;
  font-family: "Open Sans";
  font-weight: bold;
  height: 60px;
  padding: 0px 30px 0px 30px;
  width: 100%;
  position: sticky;
  top:0px;
  z-index: 200;
`;

const Logo = styled.img`
  float: left;
  height: 100%;
`;

const Links = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  float: right;
  height: 60px;
  justify-content: space-between;
`;

const Item = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
`;

const Search = styled.form`
  background-color: #cfcfcf;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  margin-top: 60px;
  position: absolute;
  right: 70px;
  width: 25%;
  font-size: 15px;
  padding: 0px 0px 0px 25px;
`;

const Input = styled.input`
  background-color: transparent;
  width: 90%;
  outline: none;
  color: black;
  ::placeholder{
    color: black;
  }
`

const Active = {borderBottom: "3px solid black",height:"60px",display:"flex",alignItems:"center",width:"100%"}

export default function NavMenu() {
  const [viewSearch, setViewSearch] = useState(false);

  return (
    <Navbar>
      <Logo src="https://i.ibb.co/Q6x8Zgk/LOGO-EN-CASA-1.png" />
      <Links>
        <Item>
          <NavLink to="/" exact activeStyle={Active}>Inicio</NavLink>
        </Item>
        <Item>
          <NavLink to="/experimenta" exact activeStyle={Active}>Experimenta</NavLink>
        </Item>
        <Item>
          <NavLink to="/b" exact activeStyle={Active}>Conéctate</NavLink>
        </Item>
        <Item>
          <NavLink to="/c" exact activeStyle={Active}>Prográmate</NavLink>
        </Item>
        <Item>
          <NavLink to="/d" exact activeStyle={Active}>Conócenos</NavLink>
        </Item>
        <Item>
          <NavLink to="/e" activeStyle={Active}>Suscríbete</NavLink>
        </Item>
        <Item 
            onClick={() => setViewSearch(!viewSearch)}>
          <BsSearch
            color="#333"
            size="18px"
          />
        </Item>
      </Links>
      {<Search className={`animate__animated ${viewSearch?"animate__fadeIn":"animate__fadeOut"} animate__faster`}>
      <IoIosSearch
            color="#333"
            size="20px"
          />
          <Input placeholder="Ingresa tu búsqueda"/>
        </Search>}
    </Navbar>
  );
}
