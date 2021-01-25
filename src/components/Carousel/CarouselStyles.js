import styled from 'styled-components'

export const ContainerFather = styled.div`
  margin: auto;
  max-width: 80vw;
  margin-bottom: 4rem;
  border-top: 2px solid rgba(182, 26, 237, 0.1);
`;

export const TitleCarousel = styled.div`
  display:flex;
  justify-content: start;
  align-content: center;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
  height: 13rem;
  padding: 1rem 0;
  margin: auto;
  max-width: 80vw;
  overflow: hidden;
`;

export const ButtonLeft = styled.button`
  position: absolute;
  border: none;
  background: rgba(182, 26, 237, 0.2);
  font-size: 3rem;
  height: 50%;
  top: calc(50% - 25%);
  line-height: 3rem;
  width: 4rem;
  color: #B61AED;
  cursor: pointer;
  z-index: 100;
  font-weight: bold;
  transition: .2s ease all;
  left: 0;
  
  &:hover {
    background: rgba(182, 26, 237, 0.6);
  }
`;

export const ButtonRight = styled.button`
  position: absolute;
  border: none;
  background: rgba(182, 26, 237, 0.2);
  font-size: 3rem;
  height: 50%;
  top: calc(50% - 25%);
  line-height: 3rem;
  width: 4rem;
  color: #B61AED;
  cursor: pointer;
  z-index: 100;
  font-weight: bold;
  transition: .2s ease all;
  right: 0;

  &:hover {
    background: rgba(182, 26, 237, 0.6);
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.2rem 0;
  overflow: hidden;
  scroll-behavior: smooth;
`;

export const Item = styled.div`
  display: grid;
  margin: 0 1rem;
  width: 20%;
  transition: .3 ease all;
  height: calc(fit-content-1rem);
  justify-content: center;
  border: 4px solid #B61AED;
  border-radius: 1rem;

  &:hover {
    transform: scale(1.05);
    transform-origin: center;
    box-shadow: 0.5rem 0.5rem 0.5rem 0.5rem rgba(182, 26, 237, 0.3);
  }
`;

export const Logo = styled.img`
  width: 9.5rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 1rem;
  display: block;
  margin: auto;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ButtonVisit = styled.button`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  color: white;
  width: calc(fit-content-1rem);
  height: 2.02rem;
  background: #B61AED;
  border: 4px solid #B61AED;
  box-sizing: border-box;
  border-radius: 0 0 0.5rem 0.5rem;
`;