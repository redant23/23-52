import React, { useState, useEffect } from 'react';
import Layout                         from 'components/Layout';
import Rooms                          from 'components/Rooms';
import db                             from '../lib/datas/database.json';

const Home = () => {

  const [rooms, setRooms] = useState(null)

  useEffect(() => {

    setRooms(db);

  }, []);

  if (!rooms) return null;

  return (
      <div>
          <Layout>
              <Rooms datas={rooms} />
          </Layout>
      </div>
  );
};

export default Home;