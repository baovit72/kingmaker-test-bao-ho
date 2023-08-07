import style from 'styled-components';
import ICON_HOME from '@/assets/images/icons/icon_home.svg';
import ICON_FAVORITE from '@/assets/images/icons/icon_heart.png';
import ICON_HISTORY from '@/assets/images/icons/icon_history.png';
import { FilterButton } from './FilterButton';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { backgroundColor, padding } from '@/utils/styled';

const Wrapper = style.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 148px;
    border-radius: 100px;
    ${padding}
    ${backgroundColor}
`;

const filters = [
  {
    name: 'home',
    icon: ICON_HOME,
  },
  {
    name: 'favorite',
    icon: ICON_FAVORITE,
  },
  {
    name: 'history',
    icon: ICON_HISTORY,
  },
];

export function FilterGroup({ onFilter }) {
  const [filter, setFilter] = useState(filters[0].name);

  useEffect(() => {
    onFilter(filter);
  }, [filter, onFilter]);

  const filterButtons = filters.map(({ icon, name }) => (
    <FilterButton active={filter === name} key={name} icon={icon} onClick={() => setFilter(name)} />
  ));

  return (
    <Wrapper $bgColor={'black'} $px={3} $py={2}>
      {filterButtons}
    </Wrapper>
  );
}

FilterGroup.propTypes = {
  onFilter: PropTypes.func.isRequired,
};
