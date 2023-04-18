import { useEffect, useCallback, useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Axios from 'axios'

import PlantNew from '../pages/PlantNew'
import PlantEdit from '../pages/PlantEdit'
import PlantShow from '../pages/PlantShow'
import PlantIndex from '../pages/PlantIndex'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
// import Register from '../pages/Register'
// import Signin from '../pages/Signin'
import Auth from './Auth'
import { authContext } from '../context/authContext'

let logoutTimer;

const Main = (props) => {

    const [plants, setPlants] = useState(null)
    const URL = "http://localhost:4000/plants/"
    const [token, setToken] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userId, setUserId] = useState(false);
    const [isLoading, setIsloading] = useState(true)

    const login = useCallback((uid, token, expirationDate) => {
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

    const logout = useCallback(() => {
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
        logoutTimer = setTimeout(logout, remainingTime);
    } else {
        clearTimeout(logoutTimer);
    }
    }, [token, logout, tokenExpirationDate]);
    
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData'));
        setIsloading(false)
        if (
          storedData &&
          storedData.token &&
          new Date(storedData.expiration) > new Date()
        ) {
          login(storedData.userId, storedData.token, new Date(storedData.expiration));
        }
      }, [login]);
    
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
          {token ? <Route path="/plants/:id/edit" element={<PlantEdit plants={plants}/>}></Route> : <Navigate to="/auth" />}
          {token ? <Route path="/plants/:id" element={<PlantShow plants={plants}/>}></Route> : <Navigate to="/auth" />}
        </>
        )
    }

    const getPlants = async() => {
        const response = await fetch(URL);
        const data = await response.json()
        console.log(data.data)
        setPlants(data.data)
    }

    const createPlant = async (plant) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(plant)
        })
        getPlants()
    }

    const updatePlant = async (plant, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plant)
        })
        getPlants()
    }

    const deletePlant = async (id) => {
        await fetch(URL + id, {
            method: "DELETE",
        });
        getPlants();
      };

      useEffect(() => {
        getPlants()
    }, [])

    return (
        <authContext.Provider
        value={{
            isLoggedIn: !!token,
            token: token,
            userId: userId,
            login: login,
            logout: logout
        }}
        >
        <main>
            <Routes>
                <Route path="/about" element={<About plants={plants}/>} />
                <Route path="/contact" element={<Contact plants={plants}/>} />
                <Route path="/signin" element={<Auth/>} />
                <Route path="/register" element={<Auth/>} />
                <Route path="/" element={<Home plants={plants}/>} />
                <Route path="/plants" element={<PlantIndex plants={plants} getPlants={getPlants}/>} />
                <Route path="/plants/new" element={<PlantNew plants={plants} createPlant={createPlant}/>} />
                <Route path="/plants/:id/edit" element={<PlantEdit plants={plants} 
                updatePlant={updatePlant}/>} />
                <Route path="/plants/:id" element={<PlantShow plants={plants} 
                deletePlant={deletePlant}/>} />
            </Routes>
        </main>
        </authContext.Provider>
        
    )
}

export default Main;