import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import LocationInfo from './components/LocationInfo';
import styled from 'styled-components';
import * as config from './config';
import axios from 'axios';
import MyWish from './components/MyWish';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locationInfo, setLocationInfo] = useState([]);
  const [categoryInfo, setCategoryInfo] = useState(null);

  useEffect(() => {
    const fetchTripInfo = async () => {
      try {
        setError(null);
        setLoading(true);

        // 지역별 정보 가져오는 API
        const { data: { locations } } = await axios.get(
          config.LOCATION_API
        )

        //카테고리 정보 및 카테고리 별 데이터 가져오는 API
        const { data: { category }} = await axios.get(
          config.CATEGORY_API
        )

        setLocationInfo(locations);
        setCategoryInfo(category);

      } catch (e) {
        setError(e);
      }
      
      setLoading(false);
    };

    fetchTripInfo();
  }, []);

  if (loading) return <div>로딩 중...</div>
  return (
    <Container>
      {/* {info} */}
      <Home/>
      <LocationInfo location={locationInfo}/>
      <MyWish category={categoryInfo}/>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  justify-content: center;
  width: 800px;
`;

export default App;
