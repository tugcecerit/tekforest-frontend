import { useEffect, useCallback, useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Axios from 'axios'
import React from 'react'
import PlantNew from '../pages/PlantNew'
import PlantShow from '../pages/PlantShow'
import Plants from '../pages/Plants/Plants'
import UserPlants from '../pages/UserPlants/UserPlants'
import UserPlantShow from '../pages/UserPlantShow'
import UserPlantEdit from '../pages/UserPlantEdit'
import UserPlantNew from '../pages/UserPlantNew'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
// import Register from '../pages/Register'
// import Signin from '../pages/Signin'
import Auth from './Auth'
import { authContext } from '../context/authContext'
import './Main.css';
// import Register from '../pages/Register'
// import Signin from '../pages/Signin'
import PlantCategories from '../pages/PlantCategories'
import PlantsByCategory from '../pages/Plants/PlantsByCategory'

let logoutTimer;

const Main = (props) => {

    const [plants, setPlants] = React.useState([])
    const apiKey = process.env.REACT_APP_PLANT_API_KEY
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com'
        }
    };

    const getPlants = async () => {
        try {
            const response = await fetch('https://house-plants2.p.rapidapi.com/all-lite', options)
            const data = await response.json();
            setPlants(data)
            
        } catch (err) {
            console.error(err.message);
        }
    }

    const [userPlants, setUserPlants] = React.useState([])
    const URL = "http://localhost:4000/plants/"
    const [token, setToken] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userId, setUserId] = useState(false);
    const [isLoading, setIsloading] = useState(true)

    const signin = useCallback((uid, token, expirationDate) => {
        setToken(token);
        setUserId(uid);
        setIsloading(false)
        const tokenExpirationDate =
          expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
        setTokenExpirationDate(tokenExpirationDate);
        localStorage.setItem(
          'userData',
          JSON.stringify({
            userId: uid,
            token: token,
            expiration: tokenExpirationDate.toISOString()
          })
        );
        Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
      }, []);

    const signout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    localStorage.removeItem('userData');
    localStorage.removeItem('profileData');
    let token = null
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    }, []);

    useEffect(() => {
    if (token && tokenExpirationDate) {
        const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
        logoutTimer = setTimeout(signout, remainingTime);
    } else {
        clearTimeout(logoutTimer);
    }
    }, [token, signout, tokenExpirationDate]);
    
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        setIsloading(false)
        if (
          storedData &&
          storedData.token &&
          new Date(storedData.expiration) > new Date()
        ) {
          signin(storedData.userId, storedData.token, new Date(storedData.expiration));
        }
      }, [signin]);
    
      let route
      let loading
      if (isLoading) {
        loading = (<>
          <div className="container loading">
            <div className="mar-20">
             <h1>Loading</h1>
            </div>
          </div>
        </>)
      }
      else {
        route = (<>
          {token ? <Route path="/plants/new" element={<PlantNew plants={plants} createPlant={createPlant}/>}></Route> : <Navigate to="/auth" />}
          {token ? <Route path="/UserPlants/:id/edit" element={<UserPlantEdit plants={plants}/>}></Route> : <Navigate to="/auth" />}
          {token ? <Route path="/plants/:id" element={<PlantShow plants={plants}/>}></Route> : <Navigate to="/auth" />}
        </>
        )
    }

    const getUserPlants = async() => {
        const response = await fetch(URL);
        const data = await response.json()
        setUserPlants(data.data)
    }

    const createPlant = async (plant) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(plant)
        })
        getUserPlants()
    }

    const updatePlant = async (plant, id) => {
        console.log(plant)
        console.log(id)
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plant)
        })
        getUserPlants()
    }

    const deletePlant = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        getUserPlants();
      };

      useEffect(() => {
        getPlants()
        getUserPlants()
    }, [])
    return (
        <authContext.Provider
        value={{
            isLoggedIn: !!token,
            token: token,
            userId: userId,
            signin: signin,
            signout: signout
        }}
        >
        <main>
            <Routes>
                <Route path="/about" element={<About plants={plants}/>} />
                <Route path="/contact" element={<Contact plants={plants}/>} />
                <Route path="/signin" element={<Auth/>} />
                <Route path="/register" element={<Auth/>} />
                <Route path="/" element={<Home plants={plants}/>} />
                <Route path="/categories" element={<PlantCategories plants={plants}/>} />
                <Route path="/plantsByCategory/:categoryName" element={<PlantsByCategory />} />
                <Route path="/plants" element={<Plants plants={plants}/>} />
                <Route path="/userPlants" element={<UserPlants plants={userPlants}/>} />
                <Route path="/userPlants/:id" element={<UserPlantShow plants={userPlants} deletePlant={deletePlant}/>}  />
                <Route path="/userPlants/:id/edit" element={<UserPlantEdit plants={userPlants} updatePlant={updatePlant}/>} />

                <Route path="/userPlants/new" element={<UserPlantNew createPlant={createPlant}/>} />
                <Route path="/plants/new/:id" element={<PlantNew plants={plants} createPlant={createPlant}/>} />

                <Route path="/plants/:id" element={<PlantShow plants={plants}/>} />
            </Routes>
        </main>
        </authContext.Provider>
        
    )
}

export default Main;