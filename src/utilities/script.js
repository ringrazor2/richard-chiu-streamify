import axios from "axios";

export const showFetch = (title, country, setShow, setIsLoading) => {
  const options = {
    method: "GET",
    url: "https://streaming-availability.p.rapidapi.com/v2/search/title",
    params: {
      title: title,
      country: country,
      type: "all",
      output_language: "en",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_STREAMING_AVAILABILITY_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_STREAMING_AVAILABILITY_HOST,
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  if (title) {
    setIsLoading(true);
    axios
      .request(options)
      .then((response) => {
        const dataArr = response.data.result;
        const matchingData = dataArr[0];
        if (matchingData) {
          setIsLoading(false);
          const genre = matchingData.genres
            .map((genre) => genre.name)
            .join(", ");

          const streamingService = matchingData.streamingInfo[country]
            ? Object.keys(matchingData.streamingInfo[country])
            : null;
          setShow({
            ...matchingData,
            genre: genre,
            streamingService: streamingService,
          });
        } else {
          setIsLoading(false);
          setShow(null);
        }
      })
      .catch(function (error) {
        console.error(error);
        setIsLoading(false);
      });
  } else {
    setShow(null);
    setIsLoading(false);
  }
};
