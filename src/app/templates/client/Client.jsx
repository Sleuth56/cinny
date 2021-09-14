import React, { useState, useEffect } from 'react';
import './Client.scss';

import Text from '../../atoms/text/Text';
import Spinner from '../../atoms/spinner/Spinner';
import Navigation from '../../organisms/navigation/Navigation';
import Room from '../../organisms/room/Room';
import Windows from '../../organisms/pw/Windows';
import Dialogs from '../../organisms/pw/Dialogs';
import EmojiBoardOpener from '../../organisms/emoji-board/EmojiBoardOpener';
import RoomOptions from '../../organisms/room-optons/RoomOptions';

import initMatrix from '../../../client/initMatrix';

function Client() {
  const [isLoading, changeLoading] = useState(true);

  useEffect(() => {
    initMatrix.once('init_loading_finished', () => {
      changeLoading(false);
    });
    initMatrix.init();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-display">
        <Spinner />
        <Text className="loading__message" variant="b2">Heating up</Text>

        <div className="loading__appname">
          <Text variant="h2">Cinny</Text>
        </div>
      </div>
    );
  }
  return (
    <div className="client-container">
      <div className="navigation__wrapper">
        <Navigation />
      </div>
      <div className="room__wrapper">
        <Room />
      </div>
      <Windows />
      <Dialogs />
      <EmojiBoardOpener />
      <RoomOptions />
    </div>
  );
}

export default Client;
