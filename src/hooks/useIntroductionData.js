import { useState, useEffect } from "react";
import { getIntroduction, updateIntroduction } from "../services/Introduction";

const useIntroductionData = () => {
  const [data, setData] = useState({
    id: "",
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const introductionResponse = await getIntroduction();
        setData({
          id: introductionResponse[0].id,
          title: introductionResponse[0].title,
          description: introductionResponse[0].description,
        });

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(error.message);
      }
    }
    fetchData();
  }, []);

  const updateDescription = async (newDescription) => {
    setData((prevData) => ({ ...prevData, description: newDescription }));

    try {
      const response = await updateIntroduction(
        data.id,
        data.title,
        newDescription
      );
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return { data, loading, updateDescription };
};

export default useIntroductionData;
