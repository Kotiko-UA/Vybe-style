import { styled } from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.blackColor};
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 70px;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 100px;
    padding-bottom: 85px;
  }
  @media screen and (min-width: 1368px) {
    padding-top: 118px;
    padding-bottom: 100px;
  }
`;

export const Container = styled.section`
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1368px) {
    max-width: 1368px;
    padding-left: 60px;
    padding-right: 245px;
  }
  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    padding-left: 120px;
    padding-right: 198px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colorText};
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    margin-bottom: 62px;
    font-size: 40px;
  }
  @media screen and (min-width: 1368px) {
    text-align: right;
    margin-bottom: -40px;
  }
  @media screen and (min-width: 1920px) {
    margin-bottom: 0;
    font-size: 90px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media screen and (min-width: 1368px) {
    gap: 0;
    padding-left: 0;
    padding-right: 0;
  }
  @media screen and (min-width: 1920px) {
    flex-grow: 1;
  }
`;
