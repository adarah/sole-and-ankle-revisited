import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" size={24} strokeWidth={2} />
          </ShoppingBagButton>
          <StyledButton>
            <Icon id="search" size={24} strokeWidth={2} />
          </StyledButton>
          <StyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" size={24} strokeWidth={2} />
          </StyledButton>
        </MobileActions>

        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletOrSmaller} {
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.phoneOrSmaller} {
    padding-inline: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletOrSmaller} {
    margin-right: 0;
    align-items: start;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletOrSmaller} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletOrSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media ${QUERIES.tabletOrSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  gap: 32px;

  @media ${QUERIES.tabletOrSmaller} {
    display: flex;
  }

  @media ${QUERIES.phoneOrSmaller} {
    gap: 16px;
  }
`;

const StyledButton = styled(UnstyledButton)`
  display: none;
  color: ${COLORS.gray[900]};

  @media ${QUERIES.tabletOrSmaller} {
    display: revert;
  }
`;

const ShoppingBagButton = styled(StyledButton)`
  transform: translateX(-2px);
`;

export default Header;
