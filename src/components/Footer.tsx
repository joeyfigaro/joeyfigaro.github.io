import React from 'react';
import styled, { StyledComponent } from '@emotion/styled';

const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`;

const ColumnHeading = styled.h3`
  flex: 1;
  font-weight: 600;
  text-decoration: underline;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Footer = (p: any): JSX.Element => {
  return (
    <FooterContainer>
      <FooterColumn>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </FooterColumn>
      <FooterColumn>
        <ColumnHeading>Projects</ColumnHeading>
        <ul>
          <li>Shovel & Sandbox</li>
          <li>AntiPttrn</li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <ColumnHeading>Follow Me</ColumnHeading>
        <Row>
          <div>Github</div>
          <div>Twitter</div>
          <div>Instagram</div>
        </Row>
      </FooterColumn>
    </FooterContainer>
  );
};

export default Footer;
