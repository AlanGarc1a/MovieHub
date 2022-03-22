import styled from "styled-components";

interface IMovieDetailsProps {
  image?: string;
}

export const Movie = styled.div`
  width: 100rem;
  margin: 0 auto;
  border-radius: 1rem;
  box-shadow: 1.3rem 1.5rem 3rem 0.5rem var(--black);
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MovieImgContainer = styled.div`
  width: 53%;
  //height: 100%;
  //background-color: var(--white);

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MovieViewImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  opacity: 0.8;
`;

export const MovieDetails = styled.div<IMovieDetailsProps>`
  width: 100%;
  background-color: var(--white);
  padding: 2rem;
  color: var(--primary);

  @media screen and (max-width: 768px) {
    background-image: linear-gradient(
        to right bottom,
        rgba(45, 54, 64, 0.8),
        rgba(139, 148, 146, 0.8)
      ),
      url(${(props) => props.image});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: var(--white);
  }
`;

export const MovieTitle = styled.span`
  display: inline-block;
  font-size: 2.8rem;
  text-transform: uppercase;
  margin-right: 1.5rem;
`;

export const MoviePlot = styled.div`
  margin-top: 2rem;
`;

export const MoviePlotDetails = styled.p`
  font-size: 1.8rem;
`;

export const MovieSubDetails = styled.div`
  font-size: 2rem;
  display: flex;
`;

export const MovieSubDetail = styled.div`
  margin-right: 2.5rem;
`;

export const MovieFooter = styled.div`
  display: flex;
  font-size: 2rem;
  margin-top: 4rem;
`;

export const TrailerLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--light-green);
  margin-right: 3rem;
`;
