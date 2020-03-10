import React, { useState, useEffect } from 'react';
import db                             from '../lib/datas/database.json';
import Layout                         from 'components/Layout';
import Room                           from 'components/Room';

const PRoom = ({ match }) => {

  const [room, setRoom] = useState(null);

  useEffect(() => {

    setRoom(db.find(room => room._id === match.params._id));

  }, []);

  if (!room) return null;

  return (
    <div>
      <Layout noneHeader={true}>
        <Room data={room}/>
      </Layout>
    </div>
  );
};

export default PRoom;