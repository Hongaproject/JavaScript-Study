// Promise
// 비동기 처리를 조금 더 편리하게 처리하기 위한 es6에 도입 된 기능. 
// 전에는 콜백함수를 사용하여 비동기 처리를 했지만 콜백 지옥 및 작업이 많아 질 시 코드가 난잡해 지게 되어 이 부분을 개선 하기위해 promise를 도입 시킴.
// async/await를 사용하여 조금 더 편리하게 사용 할 수 있도록 만듬 es8

const myPromise = new Promise((resolve, reject) => {
    // 기본 틀
    // resolve로 성공을 호출 reject로 실패를 호출 
  })

  const fetchData = async () => {
    try{
        const apiKey = process.env.REACT_APP_NEWS_KEY;
        const response =  await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${apiKey}`);
        setArticles(response.data.articles);
        console.log(response);
    }
    catch(err){
        console.log(err);
    }
}