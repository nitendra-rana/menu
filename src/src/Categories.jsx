import React from 'react'

const Categories = (props) => {
    const { filterItems, categories } = props

    return (
        <div className="btn-container">
            <button className="filter-btn"
                onClick={() => filterItems('all')}>
                All
            </button>
            {categories.map((curr, idx) => {
                return <button key = {idx} className="filter-btn"
                    onClick={() => filterItems(curr) }>
                    {curr}
                </button>
            })

            }

        </div>
    )
}

export default Categories
