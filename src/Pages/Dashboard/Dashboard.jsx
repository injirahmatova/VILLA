import axios from 'axios'
import styles from './Dashboard.module.scss'
import React, { useEffect, useState } from 'react'

import Header from '../../Componenents/Header/Header'
import { useFormik } from 'formik'

const Dashboard = () => {

  const [data, setData] = useState([])
  const[search, setSearch] = useState("")
  const [sortType, setSortType] = useState(null); 

  const handleSearch = (event) =>{
    setSearch(event.target.value);
  }; 

  const filteredData = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

  const getData = () => {
    axios.get('https://664b0dc2a300e8795d44055f.mockapi.io/basket')
    .then( res => {
      setData(res.data)
    })
  }

  useEffect (() => {
    getData()
  }, [])

  useEffect(() => {
    if (sortType) {
      setData((prevData) => [...prevData].sort((a, b) => {
        if (sortType === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      }));
    }
  }, [sortType]);

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      count: "",
      price: "",
    },
    onSubmit: (values) => {
      axios.post(`https://664b0dc2a300e8795d44055f.mockapi.io/basket`, values);
      setTimeout(() => {
        getData();
      }, 1000);
    },
  });

  const deleteData = (id) => {
    axios.delete(`https://664b0dc2a300e8795d44055f.mockapi.io/basket/${id}`)
    setTimeout(() => {
        getData()
    }, 300)
  }



  const handleSorted = (type) => {
    setSortType(type);
  };


  return (
    <>
      <Header />
      <Welcome />
      <div className={styles.dashText}>
        <h2>ADMIN PANEL</h2>
      </div>
      <div className={styles.searchBox}>
        <h5>Mehsulu axtar:</h5>
        <input 
                type="text"
                placeholder='search '
                value={search}
                onChange={handleSearch}
            />
      </div>
      <div className={styles.sortedBox}>
        <button onClick={() => handleSorted("asc")}>A-Z</button>
        <button onClick={() => handleSorted("desc")}>Z-A</button>
      </div>
      <div className={styles.formBox}>
        <h5>Mehsul elave et:</h5>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <input className={styles.inp}
            name="thumbnail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
          />
          <input className={styles.inp}
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          <input className={styles.inp}
            name="count"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
          <input className={styles.inp}
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          <button type="submit">
            Submit</button>
        </form>
      </div>
      <div className={styles.cardsBox}>
        {
          filteredData.map( item => <CradsDash remove={() => deleteData(item.id)} item={item} />)
        }
      </div>
    </>
  )
}

export default Dashboard