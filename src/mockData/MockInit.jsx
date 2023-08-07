import { setUser } from '@/store/actions/userActions';
import { useDispatch } from 'react-redux';
import { userMock } from './userMock';
import { setGameData, setGameList } from '@/store/actions/gameActions';
import { ingameUserDataMock } from './ingameUserDataMock';
import { gameListMock } from './gameListMock';
import { useEffect } from 'react';

export function MockInit() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(userMock));
    dispatch(setGameData(ingameUserDataMock));
    dispatch(setGameList(gameListMock));
    console.log('initialized mock data');
  }, []);

  return <></>;
}
