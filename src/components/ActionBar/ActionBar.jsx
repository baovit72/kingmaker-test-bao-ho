import style from 'styled-components';
import { FilterGroup } from './FilterGroup';
import { SearchButton } from './SearchButton';

const Wrapper = style.div`
    display: flex; 
    align-items: center;
`;

export function ActionBar() {
  return (
    <Wrapper>
      <FilterGroup onFilter={() => {}} />
      <SearchButton $ml={2} />
    </Wrapper>
  );
}
