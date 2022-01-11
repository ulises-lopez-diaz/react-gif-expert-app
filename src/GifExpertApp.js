import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


// API_KEY = Nt2WPWkc1baxoAZ5Zo96EIRlJ5ZlPNxV

export const GifExpertApp = () => {
    
    
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = (newValue) => {
    //     // setCategories( ['HunterXHunter', ...categories])
    //     setCategories(categories => [...categories, newValue])
    // }


    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />


            <ol>
                { 
                    categories.map(category => (
                        <GifGrid 
                        key={category}
                        category={category} />
                    ))
                }
            </ol>
        </Fragment>
    )
}

