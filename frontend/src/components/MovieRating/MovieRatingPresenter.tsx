import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const ScoreTitle = styled.div`
  display: flex;
`;

const StarContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

const Star = styled(Icon)`
  font-size: 32px;
  cursor: pointer;
  margin-right: 4px;
  :last-child {
    margin-right: 0;
  }
`;

interface IProps {
  handleClickMovieRating: (rating: number) => void;
}

const MovieRatingPresenter: React.SFC<IProps> = ({
  handleClickMovieRating
}) => (
  <ScoreWrapper>
    <ScoreTitle>평가해주세요</ScoreTitle>
    <StarContainer>
      <Star
        type="star"
        theme="outlined"
        onClick={() => handleClickMovieRating(1)}
      />
      <Star
        type="star"
        theme="outlined"
        onClick={() => handleClickMovieRating(2)}
      />
      <Star
        type="star"
        theme="outlined"
        onClick={() => handleClickMovieRating(3)}
      />
      <Star
        type="star"
        theme="outlined"
        onClick={() => handleClickMovieRating(4)}
      />
      <Star
        type="star"
        theme="outlined"
        onClick={() => handleClickMovieRating(5)}
      />
    </StarContainer>
  </ScoreWrapper>
);

export default MovieRatingPresenter;
