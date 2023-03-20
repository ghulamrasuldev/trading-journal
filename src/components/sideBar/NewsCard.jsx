import React, { useState } from 'react'
import { Card, CardActionArea, CardContent, CardMedia} from '@mui/material'

import News from '../../assets/news.png'
import {NewsContent} from './NewsContent.js'

const NewsCard = () => {

    const[news,setNews]=useState(NewsContent)

    const cardStyle = {
        maxWidth: 190,
        margin:'10px 0'
    }
    // console.log(news)
    
    return (
        <div>
            
            {
                news.map((item, index) => {
                    return (
                        <Card sx={cardStyle} key={index}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="130"
                                    image={News}
                                    // image={item.Img}
                            alt="green iguana"
                                  
                          />
                          <CardContent>
                            <p className="newsHeading">
                              {item.heading.length>10? `${item.heading.substring(0,25)}...`:item.heading}
                            </p>
                            <p className="newsContent">
                              {item.news.length>10? `${item.news.substring(0,45)}...`:item.news}
                            </p>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    )
                })
            }
    </div>
   
  )
}

export default NewsCard