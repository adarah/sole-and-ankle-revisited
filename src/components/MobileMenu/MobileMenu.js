/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseDialogButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </CloseDialogButton>
        <Filler/>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  background: hsla(220, 5%, 40%, 0.8);
  inset: 0;
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--color-white);

  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
`;

const FooterLink = styled.a`
  font-size: ${14 / 16}rem;
  color: var(--color-gray-700);

  text-decoration: none;
`;

const Filler = styled.div`
  flex: 1;
`;

const CloseDialogButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;

  padding: 14px;
  margin-top: -14px;
  margin-right: -14px;
`;

export default MobileMenu;
