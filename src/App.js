
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {Container, Switch} from '@material-ui/core';
import Header from './components/Header/Header';
import Definition from './components/Definition/Definition';
import ErrorModal from './components/Modal/ErrorModal';

function App() {
  const [theme, setTheme] = useState({'theme':true});
  const [themeColor, setThemeColor] = useState("dark");
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("en");
  const [error, setError] = useState(false);
  
  const handleChange = (e) =>{
    setTheme({...theme, [e.target.name]: !theme.theme});
    theme.theme === true ? setThemeColor('white'):(setThemeColor('dark'));
  }
  const style = {
      appStyle: {
        height: '100vh', 
        backgroundColor: themeColor==="dark"? '#234c54': 'white', 
        color: themeColor==="dark"? 'white': '#234c54',
        transition: 'all 0.8s linear'
      },
      containerStyle: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-evenly',
        height:'100vh',
        color: themeColor==="dark"? 'white': '#234c54', 
      },
      switch: {
        position: 'absolute',
        right: '20px',
        top: '3px'
      }

  }
  const getFromApi = async() =>{
    try{
       const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`);
       setMeanings(data.data);
       setError(false);
    }
    catch(error){
      console.log(error);
      setError(true);
    }
  };
  useEffect(()=>{
    getFromApi()
  }, [word]);
  return (
    <div className="App" style={style.appStyle}>
      <Container maxWidth='md'
        style={style.containerStyle}>
          <Header 
            language={language} 
            setLanguage={setLanguage}
            word={word}
            setWord={setWord}
            themeColor={themeColor} 
            />
          {/* <Audio meanings={meanings} language={language} word={word} ></Audio> */}
          {
            error && (   
              <ErrorModal 
                error={error} 
                setError={setError}
                themeColor={themeColor}
                >
              </ErrorModal>
            )
            }
          <div style={style.switch}>
            <span>{themeColor} mode</span>
            <Switch
              checked={theme.theme}
              onChange={handleChange}
              name="theme"
              color={themeColor=="dark"? 'white':'primary'}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </div>
          <Definition 
            meanings={meanings} 
            word={word} 
            language={language} 
            setError={setError}
            error={error}>
          </Definition>
      </Container>
    </div>
  );
}

export default App;
