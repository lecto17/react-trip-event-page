import React, {useState, useEffect} from 'react';
import Home from './pages/Home';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  useEffect(() => {
    console.log("1");
    const fetchTripInfo = async () => {
      try {
        setError(null);
        setLoading(true);

        console.log("2");
        const response = await axios.get(
          'https://d2828c62-eb78-4052-8143-257d053b1240.mock.pstmn.io/trips/'
        )
        console.log("res: ", response)
        // await axios({
        //   method: 'get',
        //   url: "https://d2828c62-eb78-4052-8143-257d053b1240.mock.pstmn.io/trips",
        //   responseType: 'json'
        // }).then((result) => {
        //   const res = result.data;
        //   console.log("ddd: ", res);
        // })
        console.log("3");

      } catch (e) {
        console.log("e: ", e);
        setError(e);
      }
      
      setLoading(false);
    };

    fetchTripInfo();
  }, []);

  if (loading) return <div>로딩 중...</div>
  return (
    <div>
      {/* {info} */}
      <Home/>
    </div>
  );
}

export default App;
