import React,{useState} from 'react'
import { Box, Grid } from '@mui/material'
import NavBar from '../../components/NavBar/NavBar'
import { lightTheme } from '../../Theme/theme'
import { NewsContent } from '../../components/sideBar/NewsContent.js'
import NewsImg from '../../assets/news.png'

const News = () => {
  
  
  
  const[news,setNews]=useState(NewsContent)
  
  const mainDiv = {
    padding: "30px 25px",
    backgroundColor:`${lightTheme.PageBackgroundColor}`,
  }
  const newsCard = {
    backgroundColor: `${lightTheme.ComponentBackgroundColor}`,
    padding: '15px 15px',
    marginTop: '25px',
    borderRadius:'8px'
    
  }
  
  return (
    <div>
      <Box sx={mainDiv}>
        <NavBar name={"News"} />
        <div>
          <Grid container columnGap={4} rowGap={2} >
            {
              news.map((news, index) => {
                return (
                  <>
                    <Grid item lg={5.8} md={12} sm={12} sx={newsCard} key={index}>
            
              <div style={{display:'flex'}}>
                        <img src={NewsImg} alt="" style={{ borderRadius: '8px' }} height={120} width={210} />
                        <div>
                        <p style={{ color: `${lightTheme.newsHeading}`, fontSize: '13px', fontWeight: '500', padding: '10px 5px' }}>{news.heading}</p>
                        <p style={{ color: `${lightTheme.textColor}`, fontSize: '12px', fontWeight: '400',paddingLeft:'10px'}}>{news.news}</p>
                        </div>
              </div>
            </Grid>
                  </>
                )
              })
            }
          </Grid>
        </div>
      </Box>
    </div>
  )
}

export default News