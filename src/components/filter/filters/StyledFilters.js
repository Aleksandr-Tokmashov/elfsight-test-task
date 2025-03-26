import styled from 'styled-components';

export const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  grid-template-areas:
    'status gender species'
    'name type buttons';
  gap: 10px;
  align-items: center;
  width: 561px;
  height: 90px;
  font-size: 16px;

  @media (max-width: 1000px) {
    width: 482px;
    gap: 15px;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40px;
    grid-template-areas:
      'status'
      'gender'
      'species'
      'name'
      'type'
      'buttons';
    width: 240px;
    height: auto;
  }
`;
