
import React, { Children } from 'react'
import { useContext } from 'react'
const AppContext = useContext();

const appProvider = ({ Children }) => {

    // const products = [
    const ss = {
        "productID": "SH12345",
        "name": "ComfortFit Running Shoes",
        "brand": "SportMax",
        "category": "Running Shoes",
        "price": 75.99,
        "currency": "USD",
        "sizes": ["7", "8", "9", "10", "11", "12"],
        "colors": ["Black", "White", "Blue"],
        "stockAvailability": true,
        "ratings": {
            "averageRating": 4.5,
            "totalReviews": 2,
            "individualRatings": [5, 4]
        },
        "reviews": [
            {
                "reviewID": "RV001",
                "userName": "chandan sharma",
                "rating": 5,
                "comment": "Great comfort and fit. Perfect for daily runs."
            },
            {
                "reviewID": "RV002",
                "userName": "JaneSmith",
                "rating": 4,
                "comment": "Good value for money, but the sizing runs a bit small."
            }
        ],
        "description": "The ComfortFit Running Shoes are designed for optimal comfort and performance. Perfect for runners of all levels, these shoes provide excellent support and cushioning."
    }


    return <AppContext.Provider value={ss}></AppContext.Provider>
    // ]

}

export { AppContext, appProvider }